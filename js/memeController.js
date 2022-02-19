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


function drawText({ txt, color, size, align, pos }, x, y) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.textAlign = align
    gCtx.fillStyle = color
    gCtx.font = `${size}px impact`

    if (!pos.y) {
        gCtx.fillText(txt, x, y)
        gCtx.strokeText(txt, x, y)
    } else {
        gCtx.fillText(txt, x, pos.y)
        gCtx.strokeText(txt, x, pos.y)
    }
}

function txtHeightPosition(idx) {
    var {height} = gElCanvas
    var y = 270
    if (idx === 1) y = 20
    // else if (idx > 1)  y = getRandomIntInclusive(40, 260)
    return height - y
}

function txtWidthPosition({ align }) {
    var txtPosition = gElCanvas.width
    switch (align) {
        case 'left':
            txtPosition = 10
            break;
        case 'right':
            txtPosition -= 20
            break;
        default:
            txtPosition /= 2
            break;
    }
    return txtPosition
}

function onUpDownTxt(diff) {
    const memeLine = getLine(getCurrLineIdx())
    memeLine.pos.y += diff
    renderMeme()
}

function onSetAlignTxt(align) {
    setAlignTxt(align)
    renderMeme()
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

function onDownloadMeme(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
}