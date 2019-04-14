import { IShowcase } from './state'
import * as showcaseActions from './actions'

const initialState: IShowcase = {
  products: [],
  message: 'Hello Showcase'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case showcaseActions.UPDATE_MESSAGE:
      return Object.assign({}, state, { message: action.payload })
    default: return state
  }
}