// create tracks objects array

const tracks = [
   {
      trackTitle: 'Hop out shoot',
      title: 'hop-out-shoot',
      artist: 'Kodak Black',
      imgPath: './images/kdk-hos.jpg'
   },
   {
      trackTitle: 'At the cross',
      title: 'at-the-cross',
      artist: 'Kodak Black',
      imgPath: './images/kdk-atc.jpeg'
   },
   {
      trackTitle: 'Into it',
      title: 'into-it',
      artist: 'A Boogie Wit da Hoodie',
      imgPath: './images/abwdh-ii.jpg'
   },
   {
      trackTitle: 'Play',
      title: 'play',
      artist: 'Kodak Black',
      imgPath: './images/kdk-play.jpg'
   },
];

// seet track media paths on page load

const albumImage = document.getElementById('album-img');
const audio = document.getElementById('audio-file');
const dirPath = "./tracks";
let trackTitle;
let i = 0;

audio.addEventListener(
   'loadeddata',
   () => {
      const timeEnd = document.querySelector('.time-end');
      timeEnd.innerHTML = '0:' + Math.floor(audio.duration);
   }
);

setImagePath();
setTrackPath();
setTrackInfo();




// play/pause track

const playBtn = document.getElementById('play-pause');
const playIcon = document.querySelector('.fa-play');
let buffer = document.querySelector('.buffer');
let currentTime = document.querySelector('.current-time');

playBtn.addEventListener(
   'click',
   () => {
      if (audio.paused) {
         audio.play();
         iconToPause();

         setInterval(() => {
            buffer.style.width = audio.currentTime / audio.duration * 100 + '%';
            currentTime.textContent = getTimer(audio.currentTime);
         }, 0);
      } else {
         audio.pause();
         iconToPlay();
      };
   }
)



// skip track

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener (
   'click',
   () => {
      toNextTrack();

      setImagePath();
      setTrackPath();
      animateImg();
      setTrackInfo();
      setAutoplay();
      iconToPause();
   }
);

prevBtn.addEventListener (
   'click',
   () => {
      if (audio.currentTime > 0 && audio.currentTime < 2 ) {
         toPrevTack();

         setImagePath();
         setTrackPath();
         animateImg();
         setTrackInfo();
         iconToPause();
      }

      audio.currentTime = 0;
      audio.play();
      iconToPause();
   }
);






// Useful funcionts

function setAutoplay() {
   audio.autoplay = true;
}

function iconToPause() {
   const isPlay = playIcon.classList.contains('fa-play');
   const isAutoplay = audio.autoplay = true;

   if (isPlay || isAutoplay) {
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
   }
}

function iconToPlay() {
   const isPause = playIcon.classList.contains('fa-pause');
   const isAutoplay = audio.autoplay = false;

   if (isPause || !isAutoplay) {
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
   }
}

function setTrackInfo() {
   const trackTitle = document.querySelector('.track-title');
   const artistName = document.querySelector('.artist');

   trackTitle.innerHTML = tracks[i].trackTitle;
   artistName.innerHTML = tracks[i].artist;
}

function setTrackPath() {
   trackTitle = tracks[i].title;
   audio.src = `${dirPath}/${trackTitle}.mp3`;
}

function setImagePath() {
   albumImage.setAttribute('src', tracks[i].imgPath);
}

function animateImg() {
   albumImage.classList.remove('animated-img');
   setTimeout(function(){
      albumImage.classList.add('animated-img');
    },10);
}

function toNextTrack() {
   i++;
   if (i > tracks.length-1) {
      i = 0;
   }
}

function toPrevTack() {
   i--;
   if (i < 0) {
      i = tracks.length - 1;
   }
}

function getTimer(num) {
   let seconds = parseInt(num);
   let minutes = parseInt(seconds / 60);
   seconds -= minutes * 60;

   return `${minutes}:${String(seconds % 60).padStart(2,0)}`;
}