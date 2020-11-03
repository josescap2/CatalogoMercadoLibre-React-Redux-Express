const initialState = {
  // Productos a vizualizar en el catalogo
  products: [],

  /**
   * Ciclo de busqueda
   * 0: No se registra busqueda
   * 1: Buscando
   * 2: Resultados
   * 3: No hay resultados
   */
  ciclo: 0,

  // Pagina a visualizar
  page: 1,

  // Numero de paginas
  pages: 0
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATALOGO':
      return {
        ...state,
        products: action.payload,
        ciclo: 2,
        pages: Math.ceil(action.payload.length / 30)
      };
    case 'UPDATE_CICLO':
      return {
        ...state,
        ciclo: action.payload,
      }
    case 'NO_RESULTS':
      return {
        ...state,
        ciclo: action.payload
      }
    case 'UPDATE_PAGE':
      return {
        ...state,
        page: action.payload
      }
    default:
      return state;
  }
}