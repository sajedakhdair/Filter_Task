var myStartsWith = function (firstString, secondString) { return firstString.startsWith(secondString); };
var filterRows = function (rows, filterValues) {
    var rowsToFilter = rows;
    var column = filterValues.column;
    var filter1By = filterValues.filter1By;
    var filter2By = filterValues.filter2By;
    var filter1Value_LowerCase = filterValues.filter1Value.toLowerCase();
    var filter2Value_LowerCase = filterValues.filter2Value.toLowerCase();
    var compareValue = filterValues.compareValue;
    if (!filter1Value_LowerCase) {
        return rowsToFilter;
    }
    switch (filter1By) {
        case "Is equal to":
            if (filter2By === "Is equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() ===
                                    filter2Value_LowerCase
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() ===
                                    filter2Value_LowerCase
                                : false);
                    });
                }
            }
            else if (filter2By === "Is not equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() !==
                                    filter2Value_LowerCase
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() !==
                                    filter2Value_LowerCase
                                : false);
                    });
                }
            }
            else if (filter2By === "Starts with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Contains") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Does not contain") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? !row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? !row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Ends with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .endsWith(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() === filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .endsWith(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            break;
        case "Is not equal to":
            if (filter2By === "Is equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() ===
                                    filter2Value_LowerCase
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() ===
                                    filter2Value_LowerCase
                                : false);
                    });
                }
            }
            else if (filter2By === "Is not equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() !==
                                    filter2Value_LowerCase
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() !==
                                    filter2Value_LowerCase
                                : false);
                    });
                }
            }
            else if (filter2By === "Starts with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Contains") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Does not contain") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? !row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? !row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Ends with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase &&
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .endsWith(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column].toLowerCase() !== filter1Value_LowerCase ||
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .endsWith(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            break;
        case "Starts with":
            if (filter2By === "Is equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
                        (filter2Value_LowerCase
                            ? row[column].toLowerCase() ===
                                filter2Value_LowerCase
                            : true); });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
                        (filter2Value_LowerCase
                            ? row[column].toLowerCase() ===
                                filter2Value_LowerCase
                            : false); });
                }
            }
            else if (filter2By === "Is not equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
                        (filter2Value_LowerCase
                            ? row[column].toLowerCase() !==
                                filter2Value_LowerCase
                            : true); });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
                        (filter2Value_LowerCase
                            ? row[column].toLowerCase() !==
                                filter2Value_LowerCase
                            : false); });
                }
            }
            else if (filter2By === "Starts with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
                        (filter2Value_LowerCase
                            ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                            : true); });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
                        (filter2Value_LowerCase
                            ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                            : false); });
                }
            }
            else if (filter2By === "Contains") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
                        (filter2Value_LowerCase
                            ? row[column]
                                .toLowerCase()
                                .includes(filter2Value_LowerCase)
                            : true); });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
                        (filter2Value_LowerCase
                            ? row[column]
                                .toLowerCase()
                                .includes(filter2Value_LowerCase)
                            : false); });
                }
            }
            else if (filter2By === "Does not contain") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
                        (filter2Value_LowerCase
                            ? !row[column]
                                .toLowerCase()
                                .includes(filter2Value_LowerCase)
                            : true); });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
                        (filter2Value_LowerCase
                            ? !row[column]
                                .toLowerCase()
                                .includes(filter2Value_LowerCase)
                            : false); });
                }
            }
            else if (filter2By === "Ends with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
                        (filter2Value_LowerCase
                            ? row[column]
                                .toLowerCase()
                                .endsWith(filter2Value_LowerCase)
                            : true); });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) { return myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
                        (filter2Value_LowerCase
                            ? row[column]
                                .toLowerCase()
                                .endsWith(filter2Value_LowerCase)
                            : false); });
                }
            }
            break;
        case "Contains":
            if (filter2By === "Is equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() ===
                                    filter2Value_LowerCase
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() ===
                                    filter2Value_LowerCase
                                : false);
                    });
                }
            }
            else if (filter2By === "Is not equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() !==
                                    filter2Value_LowerCase
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() !==
                                    filter2Value_LowerCase
                                : false);
                    });
                }
            }
            else if (filter2By === "Starts with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Contains") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Does not contain") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? !row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? !row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Ends with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .endsWith(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .endsWith(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            break;
        case "Does not contain":
            if (filter2By === "Is equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() ===
                                    filter2Value_LowerCase
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() ===
                                    filter2Value_LowerCase
                                : false);
                    });
                }
            }
            else if (filter2By === "Is not equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() !==
                                    filter2Value_LowerCase
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() !==
                                    filter2Value_LowerCase
                                : false);
                    });
                }
            }
            else if (filter2By === "Starts with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Contains") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Does not contain") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? !row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? !row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Ends with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .endsWith(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return !row[column]
                            .toLowerCase()
                            .includes(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .endsWith(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            break;
        case "Ends with":
            if (filter2By === "Is equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() ===
                                    filter2Value_LowerCase
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() ===
                                    filter2Value_LowerCase
                                : false);
                    });
                }
            }
            else if (filter2By === "Is not equal to") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() !==
                                    filter2Value_LowerCase
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column].toLowerCase() !==
                                    filter2Value_LowerCase
                                : false);
                    });
                }
            }
            else if (filter2By === "Starts with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Contains") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Does not contain") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? !row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? !row[column]
                                    .toLowerCase()
                                    .includes(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            else if (filter2By === "Ends with") {
                if (compareValue === "And") {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) &&
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .endsWith(filter2Value_LowerCase)
                                : true);
                    });
                }
                else {
                    rowsToFilter = rowsToFilter.filter(function (row) {
                        return row[column]
                            .toLowerCase()
                            .endsWith(filter1Value_LowerCase) ||
                            (filter2Value_LowerCase
                                ? row[column]
                                    .toLowerCase()
                                    .endsWith(filter2Value_LowerCase)
                                : false);
                    });
                }
            }
            break;
        default:
            break;
    }
    return rowsToFilter;
};
module.exports = {
    filterRows: filterRows
};
