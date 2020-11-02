export function getProducts(query) {
  return function (dispatch) {
    return fetch("http://localhost:8080/api/search?query=" + query, {
      method: 'GET',
      redirect: 'follow'
    })
    .then(results => results.json())
    .then(data => { dispatch({ type: "GET_CATALOGO", payload: data})})
  }
}