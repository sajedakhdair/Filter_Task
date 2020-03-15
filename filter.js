var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var filterRows = function (rows, filterValues) {
    var rowsToFilter = rows;
    var filter1Value = filterValues.filter1Value;
    if (!filter1Value) {
        return rowsToFilter;
    }
    var firstFilterResult = firstFilter(rowsToFilter, filterValues);
    var finalResult = secondFilterController(rowsToFilter, firstFilterResult, filterValues);
    return finalResult;
};
var firstFilter = function (rowsToFilter, filterValues) {
    var column = filterValues.column;
    var filter1By = filterValues.filter1By;
    var filter1Value_LowerCase = filterValues.filter1Value.toLowerCase();
    return filterOptionsController(rowsToFilter, filter1By, filter1Value_LowerCase, column);
};
var filterOptionsController = function (rowsToFilter, filterBy, filterValue, column) {
    var filterOperations = {
        "Is equal to": filterIsEqualTo(rowsToFilter, filterValue, column),
        "Is not equal to": filterIsNotEqualTo(rowsToFilter, filterValue, column),
        "Starts with": filterStartsWith(rowsToFilter, filterValue, column),
        "Contains": filterContains(rowsToFilter, filterValue, column),
        "Does not contain": filterDoesNotContains(rowsToFilter, filterValue, column),
        "Ends with": filterEndsWith(rowsToFilter, filterValue, column)
    };
    return filterOperations[filterBy];
};
var filterIsEqualTo = function (rowsToFilter, filterValue, column) {
    return rowsToFilter.filter(function (row) { return findTheValueForNestedColumn(row, column).toLowerCase() === filterValue; });
};
var filterIsNotEqualTo = function (rowsToFilter, filterValue, column) {
    return rowsToFilter.filter(function (row) {
        return findTheValueForNestedColumn(row, column).toLowerCase() !== filterValue;
    });
};
var filterStartsWith = function (rowsToFilter, filterValue, column) {
    return rowsToFilter.filter(function (row) {
        return findTheValueForNestedColumn(row, column).toLowerCase().startsWith(filterValue);
    });
};
var filterContains = function (rowsToFilter, filterValue, column) {
    return rowsToFilter.filter(function (row) {
        return findTheValueForNestedColumn(row, column).toLowerCase().includes(filterValue);
    });
};
var filterDoesNotContains = function (rowsToFilter, filterValue, column) {
    return rowsToFilter.filter(function (row) {
        return !findTheValueForNestedColumn(row, column).toLowerCase().includes(filterValue);
    });
};
var filterEndsWith = function (rowsToFilter, filterValue, column) {
    return rowsToFilter.filter(function (row) {
        return findTheValueForNestedColumn(row, column).toLowerCase().endsWith(filterValue);
    });
};
var findTheValueForNestedColumn = function (row, column) {
    if (typeof column === "function")
        return column(row);
    else {
        return row[column];
    }
    ;
};
var secondFilterController = function (rowsToFilter, firstFilterResult, filterValues) {
    var filter2Value = filterValues.filter2Value;
    var compareValue = filterValues.compareValue;
    if (!filter2Value)
        return firstFilterResult;
    if (compareValue === "And") {
        return filterWithAndFinalResult(firstFilterResult, filterValues);
    }
    return filterWithOrController(rowsToFilter, firstFilterResult, filterValues);
};
var filterWithAndFinalResult = function (firstFilterResult, filterValues) {
    var column = filterValues.column;
    var filter2By = filterValues.filter2By;
    var filter2Value_LowerCase = filterValues.filter2Value.toLowerCase();
    if (firstFilterResult === [])
        return [];
    return filterOptionsController(firstFilterResult, filter2By, filter2Value_LowerCase, column);
};
var filterWithOrController = function (rowsToFilter, firstFilterResult, filterValues) {
    var column = filterValues.column;
    var filter2By = filterValues.filter2By;
    var filter2Value_LowerCase = filterValues.filter2Value.toLowerCase();
    var secondFilterResult = filterOptionsController(rowsToFilter, filter2By, filter2Value_LowerCase, column);
    return prepareFinalResult(firstFilterResult, secondFilterResult);
};
var prepareFinalResult = function (firstFilterResult, secondFilterResult) {
    var mergedResult = mergeTwoArray(firstFilterResult, secondFilterResult);
    var sortedResult = sortArrayById(mergedResult);
    var finalResult = removeDuplicateElements(sortedResult);
    return finalResult;
};
var mergeTwoArray = function (firstArray, secondArray) {
    return __spreadArrays(firstArray, secondArray);
};
var sortArrayById = function (myArray) {
    return myArray.sort(function (FirstItem, SecondItem) {
        return Number(FirstItem.id) - Number(SecondItem.id);
    });
};
var removeDuplicateElements = function (myArray) {
    var finalResult = myArray.filter(function (elem, index, self) { return self.findIndex(function (item) { return (item.id === elem.id); }) === index; });
    return finalResult;
};
module.exports = {
    filterRows: filterRows
};
