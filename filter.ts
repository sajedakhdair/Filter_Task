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

const myStartsWith = (firstString: string, secondString: string): boolean => { return firstString.startsWith(secondString) }
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
  switch (filter1By) {
    case "Is equal to":
      if (filter2By === "Is equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Is not equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Starts with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Contains") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Does not contain") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Ends with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() === filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : false)
          );
        }
      }
      break;
    case "Is not equal to":
      if (filter2By === "Is equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Is not equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Starts with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Contains") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Does not contain") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Ends with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column].toLowerCase() !== filter1Value_LowerCase ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : false)
          );
        }
      }
      break;
    case "Starts with":
      if (filter2By === "Is equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Is not equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Starts with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Contains") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Does not contain") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Ends with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row => myStartsWith(row[column].toLowerCase(), filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : false)
          );
        }
      }
      break;
    case "Contains":
      if (filter2By === "Is equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Is not equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Starts with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Contains") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Does not contain") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Ends with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : false)
          );
        }
      }
      break;
    case "Does not contain":
      if (filter2By === "Is equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Is not equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Starts with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Contains") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Does not contain") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Ends with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              !row[column]
                .toLowerCase()
                .includes(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : false)
          );
        }
      }
      break;
    case "Ends with":
      if (filter2By === "Is equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() ===
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Is not equal to") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column].toLowerCase() !==
                filter2Value_LowerCase
                : false)
          );
        }
      } else if (filter2By === "Starts with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? myStartsWith(row[column].toLowerCase(), filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Contains") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Does not contain") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? !row[column]
                  .toLowerCase()
                  .includes(filter2Value_LowerCase)
                : false)
          );
        }
      } else if (filter2By === "Ends with") {
        if (compareValue === "And") {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) &&
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : true)
          );
        } else {
          rowsToFilter = rowsToFilter.filter(
            row =>
              row[column]
                .toLowerCase()
                .endsWith(filter1Value_LowerCase) ||
              (filter2Value_LowerCase
                ? row[column]
                  .toLowerCase()
                  .endsWith(filter2Value_LowerCase)
                : false)
          );
        }
      }
      break;
    default:
      break;
  }
  return rowsToFilter;
};
module.exports = {
  filterRows
};