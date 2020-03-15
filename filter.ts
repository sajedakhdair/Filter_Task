type FilterOptions =
  | "Is equal to"
  | "Is not equal to"
  | "Starts with"
  | "Contains"
  | "Does not contain"
  | "Ends with";

type CompareOptions = "And" | "Or";

type FilterFormValues = {
  filter1By: FilterOptions;
  filter1Value: string;
  filter2By: FilterOptions;
  filter2Value: string;
  compareValue: CompareOptions;
  column?: string | ((item) => string);
};

interface Column<T> {
  id: T;
  category: T;
  name: T;
}

const filterRows = <T>(rows: Column<T>[], filterValues: FilterFormValues): Column<T>[] => {
  let rowsToFilter = rows;
  const filter1Value = filterValues.filter1Value;
  if (!filter1Value) {
    return rowsToFilter;
  }
  let firstFilterResult = firstFilter(rowsToFilter, filterValues);
  let finalResult = secondFilterController(rowsToFilter, firstFilterResult, filterValues);
  return finalResult;
};

const firstFilter = <T>(rowsToFilter: Column<T>[], filterValues: FilterFormValues) => {
  const column: string | ((item) => string) = filterValues.column;
  const filter1By = filterValues.filter1By;
  const filter1Value_LowerCase = filterValues.filter1Value.toLowerCase();
  return filterOptionsController(rowsToFilter, filter1By, filter1Value_LowerCase, column);
}

const filterOptionsController = (rowsToFilter, filterBy, filterValue, column) => {
  const filterOperations = {
    "Is equal to": filterIsEqualTo(rowsToFilter, filterValue, column),
    "Is not equal to": filterIsNotEqualTo(rowsToFilter, filterValue, column),
    "Starts with": filterStartsWith(rowsToFilter, filterValue, column),
    "Contains": filterContains(rowsToFilter, filterValue, column),
    "Does not contain": filterDoesNotContains(rowsToFilter, filterValue, column),
    "Ends with": filterEndsWith(rowsToFilter, filterValue, column)
  }
  return filterOperations[filterBy];
}

const filterIsEqualTo = (rowsToFilter, filterValue, column) => {
  return rowsToFilter.filter(row => findTheValueForNestedColumn(row, column).toLowerCase() === filterValue)
}

const filterIsNotEqualTo = (rowsToFilter, filterValue, column) => {
  return rowsToFilter.filter(row =>
    findTheValueForNestedColumn(row, column).toLowerCase() !== filterValue)
}

const filterStartsWith = (rowsToFilter, filterValue, column) => {
  return rowsToFilter.filter(row =>
    findTheValueForNestedColumn(row, column).toLowerCase().startsWith(filterValue))
}

const filterContains = (rowsToFilter, filterValue, column) => {
  return rowsToFilter.filter(row =>
    findTheValueForNestedColumn(row, column).toLowerCase().includes(filterValue))
}

const filterDoesNotContains = (rowsToFilter, filterValue, column) => {
  return rowsToFilter.filter(row =>
    !findTheValueForNestedColumn(row, column).toLowerCase().includes(filterValue))
}

const filterEndsWith = (rowsToFilter, filterValue, column) => {
  return rowsToFilter.filter(row =>
    findTheValueForNestedColumn(row, column).toLowerCase().endsWith(filterValue))
}

const findTheValueForNestedColumn = (row, column) => {
  if (typeof column === "function") return column(row);
  else {
    return row[column]
  };
}

const secondFilterController = <T>(rowsToFilter: Column<T>[], firstFilterResult: Column<T>[], filterValues: FilterFormValues) => {
  const filter2Value = filterValues.filter2Value;
  const compareValue = filterValues.compareValue;
  if (!filter2Value)
    return firstFilterResult;
  if (compareValue === "And") {
    return filterWithAndFinalResult(firstFilterResult, filterValues);
  }
  return filterWithOrController(rowsToFilter, firstFilterResult, filterValues);
}

const filterWithAndFinalResult = <T>(firstFilterResult: Column<T>[], filterValues: FilterFormValues) => {
  const column: string | ((item) => string) = filterValues.column;
  const filter2By = filterValues.filter2By;
  const filter2Value_LowerCase = filterValues.filter2Value.toLowerCase();
  if (firstFilterResult === [])
    return [];
  return filterOptionsController(firstFilterResult, filter2By, filter2Value_LowerCase, column);
}

const filterWithOrController = <T>(rowsToFilter: Column<T>[], firstFilterResult: Column<T>[], filterValues: FilterFormValues) => {
  const column: string | ((item) => string) = filterValues.column;
  const filter2By = filterValues.filter2By;
  const filter2Value_LowerCase = filterValues.filter2Value.toLowerCase();
  let secondFilterResult = filterOptionsController(rowsToFilter, filter2By, filter2Value_LowerCase, column);
  return prepareFinalResult(firstFilterResult, secondFilterResult);
}

const prepareFinalResult = <T>(firstFilterResult: Column<T>[], secondFilterResult: Column<T>[]) => {
  let mergedResult = mergeTwoArray(firstFilterResult, secondFilterResult);
  let sortedResult = sortArrayById(mergedResult);
  let finalResult = removeDuplicateElements(sortedResult);
  return finalResult;
}

const mergeTwoArray = (firstArray, secondArray) => {
  return [...firstArray, ...secondArray];
}

const sortArrayById = (myArray) => {
  return myArray.sort((FirstItem, SecondItem) => {
    return Number(FirstItem.id) - Number(SecondItem.id);
  });
}

const removeDuplicateElements = (myArray) => {
  let finalResult = myArray.filter((elem, index, self) => self.findIndex(
    (item) => { return (item.id === elem.id) }) === index)
  return finalResult;
}

module.exports = {
  filterRows
};