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
const filterRows = (rows: Column[], filterValues: FilterFormValues): Column[] => {
  let rowsToFilter = rows;
  const column: keyof Column = filterValues.column;
  const filter1By = filterValues.filter1By;
  const filter2By = filterValues.filter2By;
  const filter1Value_LowerCase = filterValues.filter1Value.toLowerCase();
  const filter2Value_LowerCase = filterValues.filter2Value.toLowerCase();
  const compareValue = filterValues.compareValue;

  if (!filter1Value_LowerCase) {
    return rowsToFilter;
  }
  let firstFilterResult = myfilter(rowsToFilter, filter1By, filter1Value_LowerCase, column);
  if (!filter2Value_LowerCase)
    return firstFilterResult;
  if (compareValue === "And") {
    let secondFilterResult = myfilter(firstFilterResult, filter2By, filter2Value_LowerCase, column);
    return secondFilterResult;
  }
  let secondFilterResult = myfilter(rowsToFilter, filter2By, filter2Value_LowerCase, column);
  let finalResult1 = [...firstFilterResult, ...secondFilterResult];
  finalResult1.sort((a, b) => {
    return Number(a.id) - Number(b.id);
  });
  let finalResult = finalResult1.filter((elem, index, self) => self.findIndex(
    (t) => { return (t.id === elem.id) }) === index)
  return finalResult;
};
module.exports = {
  filterRows
};