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
});
