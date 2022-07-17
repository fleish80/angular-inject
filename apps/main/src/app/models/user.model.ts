export interface User {
  results: [
    { gender: string },
    {
      name: {
        title: string,
        first: string,
        last: string
      }
    }
  ]
}
