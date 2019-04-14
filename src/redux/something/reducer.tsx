const UPDATE_TITLE = 'UPDATE TITLE'

const initialState: any = {
  title: 'something reducer'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return Object.assign({}, state, { title: action.payload })
    default: return state
  }
}