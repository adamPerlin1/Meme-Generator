'use strict'

var gElCanvas
var gCtx

function init() {
    gElCanvas = document.querySelector('.meme-canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme()
    onSetLineTxt()
    
}

function renderMeme() {
    const meme = getMeme()
    console.log(meme);
    const img = new Image()
    
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme.lines[0].txt, 10, 50, meme.lines[0].color, meme.lines[0].size)
    }
    img.src = `meme-img/${meme.selectedImgId}.jpg`
    
    
}

function drawText(text, x, y, fillColor = 'white', fontSize = '30') {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = fillColor
    gCtx.font = `${fontSize}px Arial`
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetLineTxt() {
    const txtInput = document.getElementById('meme-text')
    // console.log(txtInput.value);
    setLineTxt(txtInput.value)
    renderMeme()
}