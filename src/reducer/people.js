import {ADD_NEW_USER} from '../constants'

const initialState = ['Лёха', 'Володька','Тамара','Галина Петровна', 'Санёк','Петька','Вальдемар']

export default (state = initialState, action) => {
  const { payload} = action
  switch (action.type) {

  case ADD_NEW_USER:
        return state.concat(payload)

  default:
    return state
  }
}
