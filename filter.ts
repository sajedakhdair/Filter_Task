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
  column?: keyof Column;
};

interface Column {
  id: string;
  category: string;
  name: string;
}

const myfilter = (rowsToFilter, filterBy, filterValue, column) => {
  switch (filterBy) {
    case "Is equal to": rowsToFilter = rowsToFilter.filter(row =>
      row[column].toLowerCase() === filterValue)
      break;
    case "Is not equal to": rowsToFilter = rowsToFilter.filter(row =>
      row[column].toLowerCase() !== filterValue)
      break;
    case "Starts with": rowsToFilter = rowsToFilter.filter(row =>
      row[column].toLowerCase().startsWith(filterValue))
      break;
    case "Contains": rowsToFilter = rowsToFilter.filter(row =>
      row[column].toLowerCase().includes(filterValue))
      break;
    case "Does not contain": rowsToFilter = rowsToFilter.filter(row =>
      !row[column].toLowerCase().includes(filterValue))
      break;
    case "Ends with": rowsToFilter = rowsToFilter.filter(
      row => row[column].toLowerCase().endsWith(filterValue))
      break;
    default:
      break;
  }
  return rowsToFilter;
}

const firstFilter = (rowsToFilter: Column[], filterValues: FilterFormValues) => {
  const column: keyof Column = filterValues.column;
  const filter1By = filterValues.filter1By;
  const filter1Value_LowerCase = filterValues.filter1Value.toLowerCase();
  return myfilter(rowsToFilter, filter1By, filter1Value_LowerCase, column);
}

const filterWithAnd = (firstFilterResult: Column[], filterValues: FilterFormValues) => {
  const column: keyof Column = filterValues.column;
  const filter2By = filterValues.filter2By;
  const filter2Value_LowerCase = filterValues.filter2Value.toLowerCase();
  if (firstFilterResult === [])
    return [];
  return myfilter(firstFilterResult, filter2By, filter2Value_LowerCase, column);
}

const mergeTwoArray = (firstArray, secondArray) => {
  return [...firstArray, ...secondArray];
}

const SortArrayById = (myArray) => {
  return myArray.sort((FirstItem, SecondItem) => {
    return Number(FirstItem.id) - Number(SecondItem.id);
  });
}

const removeDuplicateElements = (myArray) => {
  let finalResult = myArray.filter((elem, index, self) => self.findIndex(
    (item) => { return (item.id === elem.id) }) === index)
  return finalResult;
}

const filterWithOr = (rowsToFilter: Column[], firstFilterResult: Column[], filterValues: FilterFormValues) => {
  const column: keyof Column = filterValues.column;
  const filter2By = filterValues.filter2By;
  const filter2Value_LowerCase = filterValues.filter2Value.toLowerCase();
  let secondFilterResult = myfilter(rowsToFilter, filter2By, filter2Value_LowerCase, column);
  let finalResult1 = mergeTwoArray(firstFilterResult, secondFilterResult);
  let sortedArray = SortArrayById(finalResult1);
  let finalResult = removeDuplicateElements(sortedArray);
  return finalResult;
}

const secondFilter = (rowsToFilter: Column[], firstFilterResult: Column[], filterValues: FilterFormValues) => {
  const filter2Value_LowerCase = filterValues.filter2Value.toLowerCase();
  const compareValue = filterValues.compareValue;
  if (!filter2Value_LowerCase)
    return firstFilterResult;
  if (compareValue === "And") {
    return filterWithAnd(firstFilterResult, filterValues);
  }
  return filterWithOr(rowsToFilter, firstFilterResult, filterValues);
}

const filterRows = (rows: Column[], filterValues: FilterFormValues): Column[] => {
  let rowsToFilter = rows;
  const filter1Value = filterValues.filter1Value;
  if (!filter1Value) {
    return rowsToFilter;
  }
  let firstFilterResult = firstFilter(rowsToFilter, filterValues);
  let finalResult = secondFilter(rowsToFilter, firstFilterResult, filterValues);
  return finalResult;
};
module.exports = {
  filterRows
};