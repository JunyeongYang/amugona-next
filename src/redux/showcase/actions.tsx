export const UPDATE_PRODUCT = 'UPDATE PRODUCT'
export const ADD_PRODUCT = 'ADD PRODUCT'
export const DELETE_PRODUCT = 'DELETE PRODUCT'
export const UPDATE_MESSAGE = 'UPDATE MESSAGE'

export const updateProduct = (product: any) => dispatch => {
  return dispatch({
    type: UPDATE_PRODUCT,
    payload: product
  })
}

export const addProduct = (product: any) => dispatch => {
  return dispatch({
    type: ADD_PRODUCT,
    payload: product
  })
}

export const deleteproduct = (product: any) => dispatch => {
  return dispatch({
    type: DELETE_PRODUCT,
    payload: product
  })
}

export const updateMessage = (message: string) => dispatch => {
  return dispatch({
    type: UPDATE_MESSAGE,
    payload: message
  })
}