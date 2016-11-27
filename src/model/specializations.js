import rawSpecializations from '../constants/specializations'

const specializationsDecorator = specializations => {
  let i = 0
  specializations.forEach(s => {
    s.required.forEach(r => {
      r.id = i
      i++
    })
  })
  return specializations
}

export default specializationsDecorator(rawSpecializations)