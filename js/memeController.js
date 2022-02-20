'use strict'

var gElCanvas
var gCtx

function init() {
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
        drawText(line, txtWidthPosition(line), idx)
    })
}

function drawText({ txt, color, size, align, pos }, x, idx) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.textAlign = align
    gCtx.fillStyle = color
    gCtx.font = `${size}px impact`

    if (!pos.y) pos.y = txtHeightPosition(idx)

    pos.x = x
    gCtx.fillText(txt, pos.x, pos.y)
    gCtx.strokeText(txt, pos.x, pos.y)
}

function txtHeightPosition(idx) {
    const { height } = gElCanvas
    var y = 30
    if (idx === 1) y = height - 10
    else if (idx > 1) y = height / 2
    return y
}

function txtWidthPosition({ align }) {
    const { width } = gElCanvas
    switch (align) {
        case 'left':
            return 10
        case 'right':
            return width - 20
        default:
            return width / 2
    }
}

function moveTxt(diff) {
    const memeLine = getLine(getCurrLineIdx())
    memeLine.pos.y += diff
    renderMeme()
}

// function fontSizeAdjustment() {

// }

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onSetAlignTxt(align) {
    setAlignTxt(align)
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

function onSetLineTxt() {
    const txtInput = document.querySelector('#meme-text')
    setLineTxt(txtInput.value)
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    const memeLine = getLine(getCurrLineIdx())
    document.querySelector('#meme-text').value = memeLine.txt
}

function addListeners() {
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
}

function resizeCanvas() {
    const memeLine = getLine(1)
    memeLine.pos.y = 0
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = gElCanvas.height = elContainer.offsetWidth
    renderMeme()
}

function onDownloadMeme(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
}