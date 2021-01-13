export const required = value => (value ? false : true)
export const isNumber = value => (isNaN(value) ? true : false)

export const minLength = min => value => value && value.length < min ? true : false
export const minLength5 = minLength(5)
export const minLength10 = minLength(10)
export const minLength150 = minLength(150)

export const isOldDate = date => Date.parse(date) > new Date() ? false : true
