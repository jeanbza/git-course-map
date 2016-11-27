export const getTakenCourses = () => {
  const rawTakenCoursesCookie = document.cookie
    .split('; ')
    .find(rawCookie => rawCookie.includes('taken_courses'))

  if (rawTakenCoursesCookie === undefined) {
    return []
  }

  const cookieValue = rawTakenCoursesCookie.split('=')[1];
  return cookieValue.split(',')
}

const rewriteTakenCourses = (arrayOfCodes) => {
  const codesStr = arrayOfCodes.join(',')
  document.cookie = `taken_courses=${codesStr}`
}

export const removeTakenCourse = code => {
  const takenCourses = getTakenCourses()
  const codeIndex = takenCourses.indexOf(code)
  takenCourses.splice(codeIndex, 1)
  rewriteTakenCourses(takenCourses)
}

export const addTakenCourse = code => {
  const takenCourses = getTakenCourses()
  takenCourses.push(code)
  rewriteTakenCourses(takenCourses)
}

export const resetTakenCourses = _ => {
  rewriteTakenCourses([])
}