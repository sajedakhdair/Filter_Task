var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var myfilter = function (rowsToFilter, filterBy, filterValue, column) {
    switch (filterBy) {
        case "Is equal to":
            rowsToFilter = rowsToFilter.filter(function (row) {
                return row[column].toLowerCase() === filterValue;
            });
            break;
        case "Is not equal to":
            rowsToFilter = rowsToFilter.filter(function (row) {
                return row[column].toLowerCase() !== filterValue;
            });
            break;
        case "Starts with":
            rowsToFilter = rowsToFilter.filter(function (row) {
                return row[column].toLowerCase().startsWith(filterValue);
            });
            break;
        case "Contains":
            rowsToFilter = rowsToFilter.filter(function (row) {
                return row[column].toLowerCase().includes(filterValue);
            });
            break;
        case "Does not contain":
            rowsToFilter = rowsToFilter.filter(function (row) {
                return !row[column].toLowerCase().includes(filterValue);
            });
            break;
        case "Ends with":
            rowsToFilter = rowsToFilter.filter(function (row) { return row[column].toLowerCase().endsWith(filterValue); });
            break;
        default:
            break;
    }
    return rowsToFilter;
};
var firstFilter = function (rowsToFilter, filterValues) {
    var column = filterValues.column;
    var filter1By = filterValues.filter1By;
    var filter1Value_LowerCase = filterValues.filter1Value.toLowerCase();
    return myfilter(rowsToFilter, filter1By, filter1Value_LowerCase, column);
};
var secondFilter = function (rowsToFilter, firstFilterResult, filterValues) {
    var column = filterValues.column;
    var filter2By = filterValues.filter2By;
    var filter2Value_LowerCase = filterValues.filter2Value.toLowerCase();
    var compareValue = filterValues.compareValue;
    if (!filter2Value_LowerCase)
        return firstFilterResult;
    if (compareValue === "And") {
        var secondFilterResult_1 = myfilter(firstFilterResult, filter2By, filter2Value_LowerCase, column);
        return secondFilterResult_1;
    }
    var secondFilterResult = myfilter(rowsToFilter, filter2By, filter2Value_LowerCase, column);
    var finalResult1 = __spreadArrays(firstFilterResult, secondFilterResult);
    finalResult1.sort(function (a, b) {
        return Number(a.id) - Number(b.id);
    });
    var finalResult = finalResult1.filter(function (elem, index, self) { return self.findIndex(function (t) { return (t.id === elem.id); }) === index; });
    return finalResult;
};
var filterRows = function (rows, filterValues) {
    var rowsToFilter = rows;
    var filter1Value = filterValues.filter1Value;
    if (!filter1Value) {
        return rowsToFilter;
    }
    var firstFilterResult = firstFilter(rowsToFilter, filterValues);
    var finalResult = secondFilter(rowsToFilter, firstFilterResult, filterValues);
    return finalResult;
};
module.exports = {
    filterRows: filterRows
};
