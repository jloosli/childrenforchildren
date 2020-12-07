/**************************
 * Search
 **************************/
const options = {
    valueNames: ['name', 'talent'],
    listContainer: 'cards'
}

const performerList = new List('performers', options);

/*******************************
 Overlay
 *****************************/

const overlay = document.getElementById('overlay');

function showVideo(videoID) {
    const src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
    const youtubeCode = createYoutubeCode(src);
    overlay.appendChild(youtubeCode);
    overlay.style.display = 'grid';
}

function createYoutubeCode(src) {
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

function removeYoutubeCode() {
    overlay.innerHTML = '';
}

function closeVideo() {
    overlay.style.display = 'none';
    removeYoutubeCode();
}