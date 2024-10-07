//! -------------------- IMPORTS --------------------

import { API_URL,IMG_PATH,SEARCH_API,showMovies,form,search,main } from "./ui.js";










//! -------------------- FETCH DATA --------------------

getMovies(API_URL)

let data;

async function getMovies(url) {

  const res = await fetch(url)

  data = await res.json()

  showMovies(data.results)
}

window.addEventListener("DOMContentLoaded",() => {

getMovies(API_URL)

.then(()=>showMovies(data.results))

});







//! -------------------- SEARCH AREA --------------------

form.addEventListener('submit', (e) => {

  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {

    getMovies(SEARCH_API + searchTerm)

    search.value = ''

  } else {

    window.location.reload()

  }

})



