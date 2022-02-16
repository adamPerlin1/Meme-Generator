'use strict'

var gElCanvas
var gCtx

function init() {
    renderGallery()
    gElCanvas = document.querySelector('.meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    onSetLineTxt()
    addListeners()
}

function renderMeme() {
    const meme = getMeme()
    const img = new Image()

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme.lines[0].txt, gElCanvas.width / 2, 40, meme.lines[gMeme.selectedLineIdx].color, meme.lines[gMeme.selectedLineIdx].size)
        drawText(meme.lines[1].txt, gElCanvas.width / 2, 140, meme.lines[gMeme.selectedLineIdx].color, meme.lines[gMeme.selectedLineIdx].size)
    }
    img.src = `meme-img/${meme.selectedImgId}.jpg`
}

function drawText(text, x, y, fillColor = 'white', fontSize = '30') {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.textAlign = 'center'
    gCtx.fillStyle = fillColor
    gCtx.font = `${fontSize}px Arial`
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetLineTxt() {
    const txtInput = document.getElementById('meme-text')
    setLineTxt(txtInput.value)
    renderMeme()
}

function onSetColor() {
    const colorInputVal = document.getElementById('color').value
    setColor(colorInputVal)
}

function onChangeFontSize(diff) {
    changeFontSize(diff)
    renderMeme()
}

function onSwitchLine(){
    console.log('S');
    document.getElementById('meme-text').value = '';
    switchLine()
}

function addListeners() {
    // addMouseListeners()
    // addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    console.log(elContainer);
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
    renderMeme()
}