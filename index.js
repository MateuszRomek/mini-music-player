const playButton = document.querySelector('.play');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.back');
const audio = document.querySelector('audio');
const playerInfo = document.querySelector('.player__info');
const musicTitle = document.querySelector('.musicTitle');

const musicPlaylist = [
    {
        title: 'Quebonafide - Przy Tobie',
        src: 'QuebonafidePRZYTOBIE.mp3'
    },
    {
        title: 'Jan-rapowanie & NOCNY - Thx',
        src: 'JanRapowanieThx.mp3',
    }
];


function playMusic() {
    const [play, pause] = playButton.children;
    play.classList.toggle('hide');
    pause.classList.toggle('hide');
    playButton.classList.toggle('playing');

    playButton.classList.contains('playing') ?  audio.play() : audio.pause();

    playerInfo.classList.toggle('active');
}

function updateTitle({title}) {
    musicTitle.textContent = title;
}

function changeSong(e) {
    audio.pause();
    const currentSong = audio.src;
    const currentAudioIndex = musicPlaylist.indexOf(
        musicPlaylist.find(({src}) => currentSong.includes(src))
    );
    const previousOrNext = e.currentTarget.classList.contains('next') ? 1 : -1;
    const nextSong = musicPlaylist.find((item, index) => index === currentAudioIndex + previousOrNext) || musicPlaylist[musicPlaylist.length - 1];

    updateTitle(nextSong);
    audio.src = `./audio/${nextSong.src}`;
    audio.play();
}

playButton.addEventListener('click', playMusic);
nextButton.addEventListener('click', changeSong);
prevButton.addEventListener('click', changeSong);