//! -------------------- API PATHS --------------------

export const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
export const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
export const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

//! -------------------- HTML ELEMENTS --------------------

export const form = document.getElementById('form')
export const search = document.getElementById('search')
export const main = document.getElementById('main')

//! -------------------- MOVIE CARDS --------------------

export const  showMovies = (data) => {
    main.innerHTML = ''
  
    data.forEach((movie) => {
      const { title, poster_path, vote_average, overview } = movie
  
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie')
      
      movieEl.innerHTML = `
      <div class="movie-card">
          <img src="${IMG_PATH + poster_path}" alt="${title}"/>
      </div>
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
        </div>
        <div class="overview">
        <h3> ${title}  <small> Overview </small> </h3>
        <p>${overview}</p>
        </div>
      `
      main.appendChild(movieEl)
      
    })
  }

  //! -------------------- RATING CLASS --------------------

export const getClassByRate = (vote) => {
    if (vote >= 7.5) {
      return 'green'
    } else if (vote >=5.5 ) {
      return 'orange'
    } else {
      return 'red'
    }
  }