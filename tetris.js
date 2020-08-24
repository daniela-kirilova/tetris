const canvas = document.getElementById("tetris")
const context = canvas.getContext('2d')

context.scale(20, 20)


// draw pieces 

// T- Piece
const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
]

function draw() {
    context.fillStyle = '#000'
    context.fillRect(0, 0, canvas.width, canvas.height)

    drawMatrix(player.matrix, player.position)
}


function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = 'red'
                context.fillRect(x + offset.x, y + offset.y, 1, 1) // left, top, right, down
            }
        })
    })
}
//  make the pieces drop
let dropCounter =0
let dropInterval = 1000 //every 1 second that the piece drop
let lastTime = 0 //last shown time so we can calculate timedependent things
function update(time = 0) {
    const deltaTime = time - lastTime
    lastTime = time
dropCounter += deltaTime{
    
}

    draw()
    requestAnimationFrame(update)
}
const player = {
    position: { x: 5, y: 5 },
    matrix: matrix
}
update()







