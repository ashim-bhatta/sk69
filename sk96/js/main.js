const outerCursor = document.getElementById('outerCursor')
const cursor = document.getElementById('cursor')
const hamMenu = document.getElementById('ham-menu')
const nav = document.getElementById('nav')
const mobileMenu = document.getElementById('mobile-menu')
// const img = document.querySelectorAll('#img')
const box = document.querySelectorAll('#box');


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
    changeCursorPosition(x, y);
}

/*****cuctom cursor position */

changeCursorPosition = (x, y) => {
    h = outerCursorHeight()
    outerCursor.style.top = (y - h) + 'px'
    outerCursor.style.left = (x - h) + 'px'
    cursor.style.top = (y) + 'px'
    cursor.style.left = (x) + 'px'


}


/*****change size of outer div on mouse over */
const cursorHover = (x, y) => {
    outerCursor.style.height = '70px'
    outerCursor.style.width = '70px'
    outerCursor.style.border = '2px solid rgb(255, 94, 0)';
    cursor.style.border = '4px solid rgb(255, 94, 0)';
    cursor.style.background = 'rgb(255, 94, 0)';
}
/*****change size of outer div on mouse out  */
const normalCursor = (x, y) => {
    outerCursor.style.height = '30px'
    outerCursor.style.width = '30px'
    outerCursor.style.border = '1px solid white';
    cursor.style.height = '5px'
    cursor.style.width = '5px'
    cursor.style.border = '1px solid rgb(255, 94, 0)';

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


changeCursorPosition = (x, y) => {
    h = outerCursorHeight();

    /****for outer cursor */
    outerCursor.style.top = y - h + 'px';
    outerCursor.style.left = x - h + 'px';

    /****for main cursor */
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    

    /***for image  */
    var i = 0;
    for (i = 0; i < box.length; i++) {
            box[i].style.top = y + 'px';
            box[i].style.left = x + 'px';

    }
};

