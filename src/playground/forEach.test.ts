import { forEach } from "./forEach"

/*
forEach.ts
export function forEach(items: Array<any>, callback: Function) {
  for (const item of items) {
    callback(item)
  }
}
*/

//const myMock = a function to be passed to forEach and be used repeatedly
const mockCallback = jest.fn((x) => 42 + x)

//not a test suite, a test (describe is a suite)
test("forEach mock function", () => {
  //doThisFunctionForEveryItem(anArray[ 0, 1 ], myMock, the function to be triggered repeatedly)
  forEach([0, 1], mockCallback)

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2)

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)
  //note -> there's only one argument possible

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42)
})
