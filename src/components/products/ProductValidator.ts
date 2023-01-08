export const validateTitle = (title:string):string | null => {
  if (title === '') {
    return 'عنوان محصول نمی تواند خالی باشد'
  }
  return null
}
export const validatePrice = (price:string):string | null => {
  if (price === '') {
    return 'قیمت محصول نمی تواند خالی باشد'
  }
  if (parseInt(price) === 0) {
    return 'قیمت محصول نمی تواند صفر باشد'
  }
  return null
}
