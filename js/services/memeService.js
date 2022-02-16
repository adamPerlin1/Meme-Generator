'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,

    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'white'
        }
    ]
}

function setLineTxt(memeTxt) {
    gMeme.lines[0].txt = memeTxt
}

function getMeme() {
    return gMeme
}

function setMeme(){}