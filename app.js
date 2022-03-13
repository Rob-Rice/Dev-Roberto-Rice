// ===================== date at footer =====================   
const dates = document.querySelectorAll('.date')

dates.forEach(date => {
    date.innerHTML = new Date().getFullYear()
})

// ===================== buttons for tabs ===================== 
const aboutMe = document.querySelector('.first-btn')
const portfolio = document.querySelector('.second-btn')
const resume = document.querySelector('.third-btn')
const contact = document.querySelector('.fourth-btn')

const orange = document.querySelector('.orange')
const smaller = document.querySelector('.smaller')
const hiddenAboutMe = document.querySelector('.hidden')
const hiddenPort = document.querySelector('.port-hidden')
const hiddenResume = document.querySelector('.resume-hidden')
const hiddenContact = document.querySelector('.contact-hidden')
const hiddenHome = document.querySelector('.fifth-btn')
hiddenHome.style.visibility = 'hidden'

const aboutPage = document.querySelector('.about')

aboutMe.addEventListener('click', appearAbout)
// about tab
function appearAbout (e) {
    e.preventDefault()
    const btn = e.currentTarget;
    if (btn) {
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenContact.classList.remove('contact')
        hiddenPort.classList.remove('projects')
        hiddenResume.classList.remove('resume')
        setTimeout(() => {
            hiddenAboutMe.classList.add('about')
            hiddenHome.style.visibility = 'visible'
        }, 100)
    } 
}


portfolio.addEventListener('click', appearPort)
// portfolio tab
function appearPort(event) {
    event.preventDefault()
    const portfolioBtn = event.currentTarget
    if(portfolioBtn){
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenContact.classList.remove('contact')
        hiddenAboutMe.classList.remove('about')
        hiddenResume.classList.remove('resume')
        setTimeout(() => {
            hiddenPort.classList.add('projects')
            hiddenHome.style.visibility = 'visible'
        }, 100)

    } 
}

resume.addEventListener('click', appearResume)
// resume tab
function appearResume(ev) {
    ev.preventDefault()
    const resumeBtn = ev.currentTarget
    if(resumeBtn){
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenAboutMe.classList.remove('about')
        hiddenContact.classList.remove('contact')
        hiddenPort.classList.remove('projects')
        setTimeout(() => {
            hiddenResume.classList.add('resume')

        }, 100)
    }
}

contact.addEventListener('click', appearContact)
// contact tab
function appearContact(even) {
    even.preventDefault()
    const contactBtn = even.currentTarget
    if(contactBtn){
        orange.classList.add('change-size')
        smaller.classList.add('change-font')
        hiddenAboutMe.classList.remove('about')
        hiddenResume.classList.remove('resume')
        hiddenPort.classList.remove('projects')
        setTimeout(() => {
            hiddenContact.classList.add('contact')
        hiddenHome.style.visibility = 'visible'

        }, 100)
    }
}


// ===================== gsap ===================== 
pageTransition = () => {
    const width =  window.innerWidth;
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
        translateY: 150,
        opacity: 0,
    }),
    timeline.from('.about-btn', {
        duration: .235,
        translateY: -250,
        opacity: 0,
    }),
    timeline.from('.what-it-do', {
        duration: .24,
        translateY: 150,
        opacity: 0,
    }),
    timeline.from('.res-btn', {
        duration: .245,
        translateY: -150,
        opacity: 0,
    }),
    timeline.from('.main-para', {
        duration: .25,
        translateY: 150,
        opacity: 0,
    }),
    timeline.from('.img', {
        duration: .255,
        translateY: -150,
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
                location.reload()
                done()
            },
            async once(data) {
                mainAnimation()
            }
        }
    ]
})