import { addArgs, addArray, addObj } from "../src";

test("adds two numbers correctly", () => {
  const result = addArgs(2, 3);
  expect(result).toBe(5);
});

test("adds array numbers correctly", () => {
  const result = addArray([2, 3]);
  expect(result).toBe(5);
});

test("adds array numbers with currency correctly", () => {
  const result = addArray([2, 3], "USD");
  expect(result).toBe("$5.00");
});

test("adds numbers from object", () => {
  const result = addObj({ a: 2, b: 3 });
  expect(result).toBe(5);
});
