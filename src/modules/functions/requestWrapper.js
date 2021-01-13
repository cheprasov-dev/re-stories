export const requestWrapper =  async (request, params) => {
  try {
    return {...(await request(params)), catchError: {isError: false}}
  } catch (error) {
    console.log(error)
    return {catchError: {...error, isError: true}}
  }
}
