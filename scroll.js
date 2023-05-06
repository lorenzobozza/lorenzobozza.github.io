const svg = document.getElementById('geometry').children[0]
const content = document.getElementById('content')
const nav = document.getElementsByTagName('nav')[0]
var navState = 0
let pos = 0

window.addEventListener('scroll', function(e) {
    e.preventDefault()
    //console.log(window.scrollY)
    pos = 1500*window.scrollY/window.innerHeight

    svg.children[0].setAttribute('x1', -2500+pos)
    svg.children[0].setAttribute('y1', 4000-pos)

    svg.children[0].setAttribute('x2', 4000-pos)
    svg.children[0].setAttribute('y2', -2800-pos)

    svg.children[1].setAttribute('cx',-1000-pos)
    svg.children[1].setAttribute('cy',3000-pos)

    svg.children[2].setAttribute('r', 2000+pos)

    if(!(content.classList == 'show') && window.scrollY > window.innerHeight*0.7) {
        content.classList.add('show')
    }

    if(!navState && window.scrollY > window.innerHeight*0.53) {
        nav.classList.add('show')
        navState = 1
    } else if(navState && window.scrollY < window.innerHeight*0.52) {
        nav.classList.remove('show')
        navState = 0
    }
})