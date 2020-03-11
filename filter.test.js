const { filterRows } = require("./filter.js");
describe("filter Rows according to a column value  ", () => {
  let mycolumn = [
    { id: "1", name: "sajeda KHDAIR", category: "female" },
    { id: "2", name: "Ahmad khdair", category: "male" },
    { id: "3", name: "Ban Afanah", category: "FEMALE" },
    { id: "4", name: "SAJED Abd", category: "Male" }
  ];
  test("testcase 1: filterValues does not include filterFirstValue", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "",
      filter2By: "Is equal to",
      filter2Value: "dunia",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 2:compare columnValue by 'Is equal to' filter1Value And 'Is equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "SAJEDA KHDAIR",
      filter2By: "Is equal to",
      filter2Value: "sajeda khdair",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 3:compare columnValue by 'Is equal to' filter1Value Or 'Is equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "SAJEDA KHDAIR",
      filter2By: "Is equal to",
      filter2Value: "Ban Afanah",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 4:compare columnValue by 'Is equal to' filter1Value And 'Is not equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "female",
      filter2By: "Is not equal to",
      filter2Value: "Male",
      compareValue: "And",
      column: "category"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 5:compare columnValue by 'Is equal to' filter1Value Or 'Is not equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "female",
      filter2By: "Is not equal to",
      filter2Value: "female",
      compareValue: "Or",
      column: "category"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 6:compare columnValue by 'Is equal to' filter1Value And 'Starts with' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "Sajeda Khdair",
      filter2By: "Starts with",
      filter2Value: "Sa",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 7:compare columnValue by 'Is equal to' filter1Value Or 'Starts with' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "Sajeda Khdair",
      filter2By: "Starts with",
      filter2Value: "Sa",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 8:compare columnValue by 'Is equal to' filter1Value And 'Contains' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "Sajeda Khdair",
      filter2By: "Contains",
      filter2Value: "AIR",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 9:compare columnValue by 'Is equal to' filter1Value Or 'Contains' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "Sajeda Khdair",
      filter2By: "Contains",
      filter2Value: "Khdair",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 10:compare columnValue by 'Is equal to' filter1Value And 'Does not contain' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "Sajeda Khdair",
      filter2By: "Does not contain",
      filter2Value: "Khdair",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 11:compare columnValue by 'Is equal to' filter1Value Or 'Does not contain' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "Sajeda Khdair",
      filter2By: "Does not contain",
      filter2Value: "Khdair",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 12:compare columnValue by 'Is equal to' filter1Value And 'Ends with' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "Sajeda Khdair",
      filter2By: "Ends with",
      filter2Value: "Khdair",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 13:compare columnValue by 'Is equal to' filter1Value Or 'Ends with' filter2Value", () => {
    let filterValues = {
      filter1By: "Is equal to",
      filter1Value: "Ban Afanah",
      filter2By: "Ends with",
      filter2Value: "Khdair",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" }
    ];
    expect(result).toStrictEqual(expected);
  });
  /////////////////////finished testing for all blocks that  enter case 1 in filter.ts code
  ///////////start testing for all blocks that  enter case 2 in filter.ts code
  test("testcase 14:compare columnValue by 'Is not equal to' filter1Value And 'Is equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "Female",
      filter2By: "Is equal to",
      filter2Value: "",
      compareValue: "And",
      column: "category"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 15:compare columnValue by 'Is not equal to' filter1Value Or 'Is equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "sajeda khdair",
      filter2By: "Is equal to",
      filter2Value: "Ban Afanah",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 16:compare columnValue by 'Is not equal to' filter1Value And 'Is not equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "sajeda KHDAIR",
      filter2By: "Is not equal to",
      filter2Value: "Ban Afanah",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 17:compare columnValue by 'Is not equal to' filter1Value Or 'Is not equal to' filter2Value,here specified case > filter2value=''", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "sajeda KHDAIR",
      filter2By: "Is not equal to",
      filter2Value: "",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 18:compare columnValue by 'Is not equal to' filter1Value And 'Starts with' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "sajeda KHDAIR",
      filter2By: "Starts with",
      filter2Value: "S",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "4", name: "SAJED Abd", category: "Male" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 19:compare columnValue by 'Is not equal to' filter1Value Or'Starts with' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "Ban Afanah",
      filter2By: "Starts with",
      filter2Value: "S",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 20:compare columnValue by 'Is not equal to' filter1Value And 'Contains' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "sajeda KHDAIR",
      filter2By: "Contains",
      filter2Value: "Sajed",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "4", name: "SAJED Abd", category: "Male" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 21:compare columnValue by 'Is not equal to' filter1Value Or 'Contains' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "Ahmad Khdair",
      filter2By: "Contains",
      filter2Value: "Sajed",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 22:compare columnValue by 'Is not equal to' filter1Value And 'Does not contain' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "sajeda KHDAIR",
      filter2By: "Does not contain",
      filter2Value: "Sajed",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 23:compare columnValue by 'Is not equal to' filter1Value Or 'Does not contain' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "Ban Afanah",
      filter2By: "Does not contain",
      filter2Value: "B",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 24:compare columnValue by 'Is not equal to' filter1Value And 'Ends with' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "sajeda KHDAIR",
      filter2By: "Ends with",
      filter2Value: "Khdair",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "2", name: "Ahmad khdair", category: "male" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 25:compare columnValue by 'Is not equal to' filter1Value Or 'Ends with' filter2Value", () => {
    let filterValues = {
      filter1By: "Is not equal to",
      filter1Value: "Ban Afanah",
      filter2By: "Ends with",
      filter2Value: "Khdair",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  //finished testing for all blocks that  enter case 2 in filter.ts code
  //////////////////////////////////////////////////////////////////////////////////////
  ///////////start testing for all blocks that  enter case 3 in filter.ts code
  test("testcase 26:compare columnValue by 'Starts with' filter1Value And 'Is equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "S",
      filter2By: "Is equal to",
      filter2Value: "SajedA KHDAIR",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 27:compare columnValue by 'Starts with' filter1Value Or 'Is equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "S",
      filter2By: "Is equal to",
      filter2Value: "Ban Afanah",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 28:compare columnValue by 'Starts with' filter1Value And 'Is not equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "S",
      filter2By: "Is not equal to",
      filter2Value: "SajedA KHDAIR",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "4", name: "SAJED Abd", category: "Male" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 29:compare columnValue by 'Starts with' filter1Value Or 'Is not equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "S",
      filter2By: "Is not equal to",
      filter2Value: "Ban Afanah",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 30:compare columnValue by 'Starts with' filter1Value And 'Starts with' filter2Value,here specified case filter2Value='' ", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "S",
      filter2By: "Starts with",
      filter2Value: "",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 31:compare columnValue by 'Starts with' filter1Value Or 'Starts with' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "A",
      filter2By: "Starts with",
      filter2Value: "B",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 32:compare columnValue by 'Starts with' filter1Value And 'Contains' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "S",
      filter2By: "Contains",
      filter2Value: "Khdair",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 33:compare columnValue by 'Starts with' filter1Value Or 'Contains' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "S",
      filter2By: "Contains",
      filter2Value: "Khdair",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 34:compare columnValue by 'Starts with' filter1Value And 'Does not contain' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "S",
      filter2By: "Does not contain",
      filter2Value: "Khdair",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "4", name: "SAJED Abd", category: "Male" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 35:compare columnValue by 'Starts with' filter1Value Or 'Does not contain' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "A",
      filter2By: "Does not contain",
      filter2Value: "Sajed",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 36:compare columnValue by 'Starts with' filter1Value And 'Ends with' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "S",
      filter2By: "Ends with",
      filter2Value: "Khdair",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 37:compare columnValue by 'Starts with' filter1Value Or 'Ends with' filter2Value", () => {
    let filterValues = {
      filter1By: "Starts with",
      filter1Value: "S",
      filter2By: "Ends with",
      filter2Value: "Khdair",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  //finished testing for all blocks that  enter case 3 in filter.ts code
  ////////////////////////////////////////////////////////////////////
  // start testing for all blocks that  enter case 4 in filter.ts code
  test("testcase 38:compare columnValue by 'Contains' filter1Value And 'Is equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "khdair",
      filter2By: "Is equal to",
      filter2Value: "Sajeda Khdair",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 39:compare columnValue by 'Contains' filter1Value Or 'Is equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: " Khdair",
      filter2By: "Is equal to",
      filter2Value: "Sajeda Khdair",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 40:compare columnValue by 'Contains'  filter1Value And 'Is not equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "Sajed",
      filter2By: "Is not equal to",
      filter2Value: "sajeda KHDAIR",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "4", name: "SAJED Abd", category: "Male" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 41:compare columnValue by 'Contains'  filter1Value Or 'Is not equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "Sajed",
      filter2By: "Is not equal to",
      filter2Value: "Ahmad Khdair",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 42:compare columnValue by 'Contains' filter1Value And 'Starts with' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "Khdair",
      filter2By: "Starts with",
      filter2Value: "S",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 43:compare columnValue by 'Contains' filter1Value Or 'Starts with' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "Khdair",
      filter2By: "Starts with",
      filter2Value: "s",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 44:compare columnValue by 'Contains' filter1Value And 'Contains' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "Khdair",
      filter2By: "Contains",
      filter2Value: "Sajeda",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 45:compare columnValue by 'Contains' filter1Value Or 'Contains' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "Khdair",
      filter2By: "Contains",
      filter2Value: "Sajed",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 46:compare columnValue by 'Contains' filter1Value And 'Does not contain' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "Khdair",
      filter2By: "Does not contain",
      filter2Value: "Sajeda",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "2", name: "Ahmad khdair", category: "male" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 47:compare columnValue by 'Contains' filter1Value Or 'Does not contain' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "Afanah",
      filter2By: "Does not contain",
      filter2Value: "Sajed",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "3", name: "Ban Afanah", category: "FEMALE" }
    ];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 48:compare columnValue by 'Contains' filter1Value And 'Ends with' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "Sa",
      filter2By: "Ends with",
      filter2Value: "Khdair",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
  test("testcase 49:compare columnValue by 'Contains' filter1Value Or 'Ends with' filter2Value", () => {
    let filterValues = {
      filter1By: "Contains",
      filter1Value: "Sa",
      filter2By: "Ends with",
      filter2Value: "Khdair",
      compareValue: "Or",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [
      { id: "1", name: "sajeda KHDAIR", category: "female" },
      { id: "2", name: "Ahmad khdair", category: "male" },
      { id: "4", name: "SAJED Abd", category: "Male" }
    ];
    expect(result).toStrictEqual(expected);
  });
  //finished testing for all blocks that  enter case 4 in filter.ts code
  //////////////////////////////////////////////////////////////////////////////////////////
  test("testcase 50:compare columnValue by 'Does not contain' filter1Value And 'Is equal to' filter2Value", () => {
    let filterValues = {
      filter1By: "Does not contain",
      filter1Value: "Abd",
      filter2By: "Is equal to",
      filter2Value: "Sajeda Khdair",
      compareValue: "And",
      column: "name"
    };
    const result = filterRows(mycolumn, filterValues);
    const expected = [{ id: "1", name: "sajeda KHDAIR", category: "female" }];
    expect(result).toStrictEqual(expected);
  });
});
