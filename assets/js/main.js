/* SEARCH */
const searchContent = document.getElementById('search-content'),
      searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close');

/* Show search */
if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}

/* Hide search */
if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}

/* LOGIN */
const loginContent = document.getElementById('login-content'), // Entire login content div
      loginButton = document.getElementById('login-button'), // At nav, under actions
      loginClose = document.getElementById('login-close'); // Inside content div, closes the screen

/* Show login */
if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}

/* Hide login */
if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/


/*=============== HOME SWIPER ===============*/


/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
