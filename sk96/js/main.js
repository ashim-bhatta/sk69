const outerCursor = document.getElementById('outerCursor')
const cursor = document.getElementById('cursor')

document.getElementById("body").addEventListener("mousemove", function(event) {
    myFunction(event);
});


function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    changeDivPosition(x, y)

}
changeDivPosition = (x, y) => {
    outerCursor.style.top = (y - 8) + 'px'
    outerCursor.style.left = (x - 8) + 'px'
    cursor.style.top = (y + 5) + 'px'
    cursor.style.left = (x + 5) + 'px'


}
const cursorHover = () => {
    outerCursor.style.height = '50px'
    outerCursor.style.width = '50px'
}

const normalCursor = () => {
    outerCursor.style.height = '30px'
    outerCursor.style.width = '30px'
}