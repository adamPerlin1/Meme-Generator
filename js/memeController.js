'use strict'

var gElCanvas
var gCtx
var gLinesCount

function init() {
    gLinesCount = 0
    renderGallery()
    gElCanvas = document.querySelector('.meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    addListeners()
}



function renderMeme() {
    const meme = getMeme()
    const img = new Image()

    img.onload = displayMemeOnCanvas.bind(null, meme, img)
    img.src = `meme-img/${meme.selectedImgId}.jpg`
}

function displayMemeOnCanvas(meme, img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    meme.lines.forEach((line, idx) => {
        drawText(line, txtWidthPosition(line), txtHeightPosition(idx))
    })
}

function txtHeightPosition(idx) {
    const canvasHeight = gElCanvas.height
    var y = 270
    if (idx === 1) y = 20
    // else if (idx > 1)  y = getRandomIntInclusive(40, 260)
    return canvasHeight - y
}

function txtWidthPosition({ align }) {
    var canvasWidth = gElCanvas.width
    switch (align) {
        case 'left':
            canvasWidth = 10
            break;
        case 'right':
            canvasWidth -= 20
            break;
        default:
            canvasWidth /= 2
            break;
    }
    return canvasWidth
}

function drawText({ txt, color, size, align }, x, y) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.textAlign = align
    gCtx.fillStyle = color
    gCtx.font = `${size}px impact`
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}

function onSetAlignTxt(align) {
    setAlignTxt(align)
}

function onSetLineTxt() {
    const txtInput = document.querySelector('#meme-text')
    setLineTxt(txtInput.value)
    renderMeme()
}

function onSetColor() {
    const colorInputVal = document.querySelector('#color').value
    setColor(colorInputVal)
}

function onChangeFontSize(diff) {
    changeFontSize(diff)
    renderMeme()
}

function onSwitchLine() {
    document.querySelector('#meme-text').value = '';
    switchLine()
}

function addListeners() {
    // addMouseListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
    renderMeme()
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    return pos
}


/* OUT OF TIME */
// function addMouseListeners() {
//     gElCanvas.addEventListener('mousedown', onDown)
    
// }


// function onDown(ev) {
    // console.log(ev);
    // const meme = getMeme()
    // const pos = getEvPos(ev)
    // console.log('pos', pos);
    // console.log('onDown()');
    // if (!isTxtClicked(pos, gCtx)) return
    

    // const txtWidth = gCtx.measureText(meme.lines[meme.selectedLineIdx].txt).width
    // const txtHeight = meme.lines[meme.selectedLineIdx].size
    // console.log(txtWidth);
    // console.log(txtHeight);
    // gCtx.strokeRect(50, meme.pos.y, txtWidth, 20);
// }