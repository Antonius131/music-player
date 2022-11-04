// create tracks objects array

const tracks = [
   {
      trackTitle: 'At the cross',
      title: 'at-the-cross',
      artist: 'Kodak Black',
      imgPath: './images/kdk-atc.jpg'
   },
   {
      trackTitle: 'Hop out shoot',
      title: 'hop-out-shoot',
      artist: 'Kodak Black',
      imgPath: './images/kdk-hos.jpg'
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

// put tracks URLs into src audio tag

const albumImage = document.getElementById('album-img');
const audioTag = document.getElementById('audio-file');
const dirPath = "./tracks";
let trackTitle;
let i = 0;

setTrackPath();
setTrackInfo();



// play/pause track

const playBtn = document.getElementById('play-pause');
const playIcon = document.querySelector('.fa-play');

playBtn.addEventListener(
   'click',
   () => {
      if (audioTag.paused) {
         audioTag.play();
         iconToPause();
      } else {
         audioTag.pause()
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
      i++;
      if (i > tracks.length-1) {
         i = 0;
      }

      setTrackPath();
      setTrackInfo();
      setAutoplay();
      iconToPause();
   }
);

prevBtn.addEventListener (
   'click',
   () => {
      if (audioTag.currentTime > 0 && audioTag.currentTime < 2 ) {
         i--;
         if (i < 0) {
            i = tracks.length - 1;
         }

         setTrackPath();
         iconToPause();
      }

      audioTag.currentTime = 0;
      setTrackInfo();
      setAutoplay();
      iconToPause();
   }
);






// Useful funcionts

function setAutoplay() {
   audioTag.autoplay = true;
}

function iconToPause() {
   const isPlay = playIcon.classList.contains('fa-play');
   const isAutoplay = audioTag.autoplay = true;

   if (isPlay || isAutoplay) {
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
   }
}

function iconToPlay() {
   const isPause = playIcon.classList.contains('fa-pause');
   const isAutoplay = audioTag.autoplay = false;

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
   audioTag.src = `${dirPath}/${trackTitle}.mp3`;
}

function setAlbumImage() {

}