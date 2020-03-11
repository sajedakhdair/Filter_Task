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
});
