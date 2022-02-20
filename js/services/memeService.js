'use strict'

var gImgs = [
    { id: 1, keywords: ['funny'] },
    { id: 2, keywords: ['funny'] },
    { id: 3, keywords: ['funny'] },
    { id: 4, keywords: ['funny'] },
    { id: 5, keywords: ['funny'] },
    { id: 6, keywords: ['funny'] },
    { id: 7, keywords: ['funny'] },
    { id: 8, keywords: ['funny'] },
    { id: 9, keywords: ['funny'] },
    { id: 10, keywords: ['funny'] },
    { id: 11, keywords: ['funny'] },
    { id: 12, keywords: ['funny'] },
    { id: 13, keywords: ['funny'] },
    { id: 14, keywords: ['funny'] },
    { id: 15, keywords: ['funny'] },
    { id: 16, keywords: ['funny'] },
    { id: 17, keywords: ['funny'] },
    { id: 18, keywords: ['funny'] }
]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,

    lines: [
        {
            txt: 'Funny something',
            size: 30,
            align: 'center',
            color: 'white',
            pos: {
                x: null,
                y: null
            }
        },
        {
            txt: 'Something Funny',
            size: 30,
            align: 'center',
            color: 'white',
            pos: {
                x: null,
                y: null
            }
        }
    ]
}

function switchLine() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}

function deleteLine() {
    gMeme.lines.splice(gMeme.lines[gMeme.selectedLineIdx], 1)
}

function addLine() {
    gMeme.lines.push({
        txt: 'New line',
        fontFam: 'impact',
        size: 30,
        align: 'center',
        color: 'white',
        pos: {
            x: null,
            y: null
        }
    })
}

function changeFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function setAlignTxt(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setLineTxt(memeTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = memeTxt
}

function getLine(lineIdx) {
    return gMeme.lines[lineIdx]
}

function getCurrLineIdx() {
    return gMeme.selectedLineIdx
}

function getImgs() {
    return gImgs
}

function getMeme() {
    return gMeme
}
