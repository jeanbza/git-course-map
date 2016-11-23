export const clickCheckbox = courseCode => {
  return {
    type: 'CLICK_CHECKBOX',
    courseCode: courseCode,
  }
}