// ===================== date at footer =====================   
const dates = document.querySelectorAll('.date')

dates.forEach(date => {
    date.innerHTML = new Date().getFullYear()
})

const aboutMe = document.querySelector('.first-btn')
const portfolio = document.querySelector('.second-btn')
const resume = document.querySelector('.third-btn')
const contact = document.querySelector('.fourth-btn')



const orange = document.querySelector('.orange')
const smaller = document.querySelector('.smaller')
const hiddenAboutMe = document.querySelector('.hidden')
const hiddenPort = document.querySelector('.port-hidden')
const hiddenContact = document.querySelector('.contact-hidden')
const hiddenHome = document.querySelector('.fifth-btn')
hiddenHome.style.visibility = 'hidden'




aboutMe.addEventListener('click', appearAbout)
// about tab
function appearAbout (e) {
    e.preventDefault()
    if (window.innerWidth <= 824) {
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenContact.classList.remove('contact')
        hiddenPort.classList.remove('projects')
        setTimeout(() => {
            hiddenAboutMe.classList.add('about')
            hiddenHome.style.visibility = 'visible'
        }, 100)
    } else {
        orange.classList.add('change-size-larger')
        hiddenContact.classList.remove('contact')
        hiddenPort.classList.remove('projects')
        setTimeout(() => {
            hiddenAboutMe.classList.add('about')
        }, 100)
    }
}

if (window.innerWidth > 824) {
    orange.classList.add('change-size')
    hiddenAboutMe.classList.add('about')
}


portfolio.addEventListener('click', appearPort)
// portfolio tab
function appearPort(event) {
    event.preventDefault()
    if (window.innerWidth <= 824) {
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenContact.classList.remove('contact')
        hiddenAboutMe.classList.remove('about')
        setTimeout(() => {
            hiddenPort.classList.add('projects')
            hiddenHome.style.visibility = 'visible'
        }, 100)
    } else {
        orange.classList.add('change-size-larger')
        hiddenContact.classList.remove('contact')
        hiddenAboutMe.classList.remove('about')
        setTimeout(() => {
            hiddenPort.classList.add('projects')
        }, 100)
    }
}

contact.addEventListener('click', appearContact)
// contact tab
function appearContact(even) {
    even.preventDefault()
    if (window.innerWidth <= 824) {
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenAboutMe.classList.remove('about')
        hiddenPort.classList.remove('projects')
        setTimeout(() => {
            hiddenContact.classList.add('contact')
            hiddenHome.style.visibility = 'visible'
        }, 100)
    } else {
        orange.classList.add('change-size-larger')
        hiddenAboutMe.classList.remove('about')
        hiddenPort.classList.remove('projects')
        setTimeout(() => {
            hiddenContact.classList.add('contact')
        }, 100)
    }
}

// ===================== gsap ===================== 
pageTransition = () => {
    const width =  window.innerWidth
    if(width < 824) {
        return undefined
    } 

    var timeline = gsap.timeline()
}

mainAnimation = () => {

    const width =  window.innerWidth
    if(width < 824) {
        return undefined
    } 

    var timeline = gsap.timeline()


    timeline.from('.name', {
        duration: .23,
        translateX: 10,
        opacity: 0,
    }),
    timeline.from('.what-it-do', {
        duration: .24,
        translateX: 10,
        opacity: 0,
    }),
    timeline.from('.home', {
        duration: .24,
        translateY: 10,
        opacity: 0,
    }),
    timeline.from('.first-btn', {
        duration: .24,
        translateX: 10,
        opacity: 0,
    }),
    timeline.from('.second-btn', {
        duration: .241,
        translateX: 10,
        opacity: 0,
    }),
    timeline.from('.fourth-btn', {
        duration: .2411,
        translateX: 10,
        opacity: 0,
    }),
    timeline.from('.third-btn', {
        duration: .2412,
        translateX: 10,
        opacity: 0,
    })
}

delay = (n) => {
    n = n || 1000
    return new Promise((done) => {
        setTimeout(() => {
            done()
        }, n)
    })
}

// ===================== barba ===================== 
barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async()
                pageTransition()
                await delay(1000)
                // setTimeout(() => {
                    location.reload()
                // }, 800);
                done()
            },
            async once(data) {
                mainAnimation()
            }
        }
    ]
})
