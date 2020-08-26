export default (passedDate) => {
  return passedDate.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
}