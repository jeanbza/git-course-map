export const clickCheckbox = courseCode => {
  return {
    type: 'CLICK_CHECKBOX',
    courseCode: courseCode,
  }
}

export const clickFilter = id => {
  return {
    type: 'CLICK_FILTER',
    id: id,
  }
}