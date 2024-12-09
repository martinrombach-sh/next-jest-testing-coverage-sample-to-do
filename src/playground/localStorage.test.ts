beforeEach(() => {
  const localStorageMock = (() => {
    //The local storage of browsers only accepts strings.
    //Therefore a record of strings with key value pairs imitates this fine
    //https://www.freecodecamp.org/news/how-to-store-objects-or-arrays-in-browser-local-storage/
    let store: Record<string, string> = {}

    return {
      getItem: jest.fn((key: string) => store[key] || null),
      setItem: jest.fn((key: string, value: string) => {
        store[key] = value
      }),
      removeItem: jest.fn((key: string) => {
        delete store[key]
      }),
      clear: jest.fn(() => {
        store = {}
      }),
    }
  })()

  Object.defineProperty(global, "localStorage", {
    value: localStorageMock,
    writable: true,
  })
})

afterEach(() => {
  jest.clearAllMocks()
})

test("local storage", () => {
  localStorage.setItem("key", "value")
  const item = localStorage.getItem("key")
  //get item won't work, you're saying 'expect the function to be the result"

  expect(item).toBe("value")
})
