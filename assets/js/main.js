const scrollHeader = () => {
    const header = document.getElementById('header')
    this. scrollY >= 50 ?header.classList.add( 'scroll-header' )
                    : header.classList.remove( 'scroll-header')
}
window.addEventListener( 'scroll' , scrollHeader)



let swiperProducts = new Swiper(".products__container" , {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidePerView: 'auto',
    loop: true,
    autoplay: {delay: 3500 , disableOnInteraction: false},

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 62,
        },
 
    },
});



 const sections = document.querySelectorAll( 'section[id]' )

 const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach( current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute( 'id' ),
              sectionsClass = document.querySelector( '.nav__menu a[href*=' + sectionId + ']' )

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
 }
    window.addEventListener( 'scroll' , scrollActive)


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



const sr = ScrollReveal({ 
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal('.home__data')

sr.reveal('.home__images', {delay: 600,origin: 'bottom'})

sr.reveal('.new__card' , {delay: 400})

sr.reveal('.products__container')

sr.reveal('.brand__container')

sr.reveal('.footer__info')

sr.reveal('.footer__container')

sr.reveal('.collection__explore:nth-child(1)', {origin: 'right'})

sr.reveal('.collection__explore:nth-child(2)', {origin: 'left'})
