const initialState = {
  // Productos a vizualizar en el catalogo
  products: []
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATALOGO':
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}