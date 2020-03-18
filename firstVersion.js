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

function nextSong() {
    audio.pause();
    const currentSong = audio.src;
    const currentAudioIndex = musicPlaylist.indexOf(
        musicPlaylist.find(({src}) => currentSong.includes(src))
    );
    const nextSong = musicPlaylist.find((item, index) => index === currentAudioIndex + 1) || musicPlaylist[0];
    updateTitle(nextSong);
    audio.src = `./audio/${nextSong.src}`;
    audio.play();
}

function prevSong() {
    audio.pause();
    const currentSong = audio.src;
    const currentAudioIndex = musicPlaylist.indexOf(
        musicPlaylist.find(({src}) => currentSong.includes(src))
    );
    const nextSong = musicPlaylist.find((item, index) => index === currentAudioIndex - 1) || musicPlaylist[musicPlaylist.length - 1];

    updateTitle(nextSong);
    audio.src = `./audio/${nextSong.src}`;
    audio.play();
}

function updateTitle({title}) {
    musicTitle.textContent = title;
}



playButton.addEventListener('click', playMusic);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);