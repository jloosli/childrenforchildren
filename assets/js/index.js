const options = {
    valueNames: ['name', 'tags'],
    listContainer: 'performers'
}

const performerList = new List('main', options);


/*******************************
 Overlay
 *****************************/

const overlay = document.getElementById('overlay');

function showVideo(videoID) {
    overlay.style.display = 'grid';
    const src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
    const iframe = createYoutubeIframe();
    iframe.src = src;
    overlay.querySelector('div').appendChild(iframe);

}

function createYoutubeIframe() {
    const iframe = document.createElement('iframe');
    iframe.title = "Youtube Video";
    iframe.allowfullscreen = true;
    return iframe;
}

function removeIframe() {
    const parent = overlay.querySelector('div')
    const iframe = parent.querySelector('iframe');
    // parent.removeChild(iframe);
    iframe.remove();
}

function closeVideo() {
    overlay.style.display = 'none';
    removeIframe();
}