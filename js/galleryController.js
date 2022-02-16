'use strict'

function renderGallery() {
    const imgs = getImgs()
    var strHtmls = imgs.map(img => {
        return `<div>
                    <img onclick="onImgSelect(${img.id})" src="meme-img/${img.id}.jpg">
                </div>`
    })
    document.querySelector('.gallery').innerHTML = strHtmls.join()
}

function onImgSelect(imgId) {
    setImg(imgId)
    document.querySelector('.meme-editor-container').classList.remove('hide')
    document.querySelector('.gallery').classList.add('hide')
    renderMeme()
    resizeCanvas()
}