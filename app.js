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
    const width =  window.innerWidth
    if(width < 824) {
        return undefined
    } 

    var timeline = gsap.timeline()
    timeline.set('body', {
        visibility: 'hidden'
    })

    timeline.to('main, .btn-container', {
        zIndex: 900
    })

    // timeline.to('.page-transition', {
    //     duration: .5,
    //     height: '100%',
    //     top: '0%'
    // })


    timeline.to('.page-transition', {
        duration: .1,
        height: '100%',
        top: '100%',
        // delay: .1
    })
    timeline.set('body', {
        // top: '-100%'
        visibility: 'hidden'
    })

    timeline.set('.page-transition', {
        // top: '-100%'
        opacity: '.1'
    })


}

mainAnimation = () => {

    const width =  window.innerWidth
    if(width < 824) {
        return undefined
    } 
    var timeline = gsap.timeline()
    // timeline.from('.container, .btn-container', {
    // timeline.from('.name, .what-it-do, .smaller, .img, .btn-container', {
    timeline.from('.main, .a-main', {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: {
            amount: .4
        },
        delay: 1
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