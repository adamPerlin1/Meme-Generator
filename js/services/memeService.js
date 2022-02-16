'use strict'

var gImgs = [
    {id: 1, keywords: ['funny']},
    {id: 2, keywords: ['funny']},
]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,

    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'white'
        },
        {
            txt: '',
            size: 20,
            align: 'center',
            color: 'white'
        }
    ]
}

function switchLine(){
    console.log(gMeme.selectedLineIdx);
    if (gMeme.selectedLineIdx >= gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}

function changeFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setImg(imgId){
    gMeme.selectedImgId = imgId
}

function setLineTxt(memeTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = memeTxt
}

function getImgs() {
    return gImgs
}

function getMeme() {
    return gMeme
}