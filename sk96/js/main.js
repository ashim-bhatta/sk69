const outerCursor = document.getElementById('outerCursor')
const cursor = document.getElementById('cursor')
const hamMenu = document.getElementById('ham-menu')
const nav = document.getElementById('nav')
const mobileMenu = document.getElementById('mobile-menu')


/*****getting height of outer div */
outerCursorHeight = () => {
    height = outerCursor.offsetHeight
    h = height / 2
    return (h)
}


/*******Event listener to mouse move ****/
document.getElementById("body").addEventListener("mousemove", function(event) {
    myFunction(event);
});


myFunction = (e) => {
    x = e.clientX;
    y = e.clientY
    changeCursorPosition(x, y)
}

/*****cuctom cursor position */

changeCursorPosition = (x, y) => {
    h = outerCursorHeight()
    outerCursor.style.top = (y - h) + 'px'
    outerCursor.style.left = (x - h) + 'px'
    cursor.style.top = (y) + 'px'
    cursor.style.left = (x) + 'px'


}

/*****change size of outer div on hover */
const cursorHover = (x, y) => {
    outerCursor.style.height = '50px'
    outerCursor.style.width = '50px'
    outerCursor.style.border = '2px solid white'


}

const normalCursor = (x, y) => {
    outerCursor.style.height = '30px'
    outerCursor.style.width = '30px'
    cursor.style.height = '5px'
    cursor.style.width = '5px'
    outerCursor.style.border = '1px solid white'

}

/*******toogle mobile menu */
var isMenuOpen = false;
hamMenuToogle = () => {
    if (isMenuOpen === true) {
        mobileMenu.style.height = '0'
        isMenuOpen = false
    } else {
        mobileMenu.style.height = '100vh'

        isMenuOpen = true

    }

}