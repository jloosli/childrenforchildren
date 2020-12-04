/**************************
 * Search
 **************************/
const options = {
    valueNames: ['name', 'tags'],
    listContainer: 'performers'
}

const performerList = new List('performances', options);

/******************************
 * Nav
 */

const header = document.querySelector('header');
let lastKnownScrollPostion = 0;
document.addEventListener('scroll', function(e){
    // if(window.scrollY > 100){
    //     header.style.backgroundColor = 'blue';
    // }
})

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
    iframe.allowfullscreen = true;
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