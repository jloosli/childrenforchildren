/**************************
 * Search
 **************************/
const options = {
    valueNames: ['name', 'talent'],
    // listContainer: 'cards'
}

const performerList = new List('performers', options);

let search = document.querySelector('.fuzzy-search');
search.addEventListener('search', e => {
    if (!e.inputType) {
        performerList.search(search.value)
    }
})

/*******************************
 Overlay
 *****************************/

const overlay = document.getElementById('overlay');

function showVideo(performer) {
    const {youtubeID} = performer;
    const src = `https://www.youtube.com/embed/${youtubeID}?autoplay=1`;
    const youtubeCode = createYoutubeIframe(src);
    const meta = createMetaDiv(performer)
    overlay.appendChild(youtubeCode);
    overlay.appendChild(meta);
    overlay.style.display = 'grid';
}

function createYoutubeIframe(src) {
    const div = document.createElement('div');
    div.setAttribute('class', 'youtube-wrapper');

    const iframe = document.createElement('iframe');
    iframe.title = "Youtube Video";
    iframe.setAttribute('allowFullscreen', '')
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
    iframe.setAttribute('frameborder', '0')
    iframe.src = src;

    div.appendChild(iframe);
    return div;
}

function createMetaDiv({fullName, talent, composer, piece}) {
    const div = document.createElement('div');
    div.setAttribute('class', 'meta')
    div.setAttribute('style', 'text-align: center; color: white;')
    const metaVals = []
    fullName && metaVals.push(styleMeta('Peformer', fullName))
    talent && metaVals.push(styleMeta(`Talent`, talent))
    piece && metaVals.push(styleMeta(`Piece`, piece))
    composer && metaVals.push(styleMeta(`Composer`, composer))
    div.innerHTML = metaVals.join(``)
    return div
}

function styleMeta(key, value) {
    return `<div>${key}: <span class="h4">${value}</span></div>`
}

function removeOverlayContent() {
    overlay.innerHTML = '';
}

function closeVideo() {
    overlay.style.display = 'none';
    removeOverlayContent();
}