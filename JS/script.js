// create tracks objects array

const tracks = [
   {
      title: 'at-the-cross',
      artist: 'Kodak Black',
      img: 'imagePath'
   },
   {
      title: 'hop-out-shoot',
      artist: 'Kodak Black',
      img: 'imagePath'
   },
   {
      title: 'into-it',
      artist: 'A Boogie Wit da Hoodie',
      img: 'imagePath'
   },
   {
      title: 'play',
      artist: 'Kodak Black',
      img: 'imagePath'
   },
];

// put tracks URLs into src audio tag

const audioTag = document.getElementById('audio-file');
const dirPath = "./tracks";
let i = 0;
let trackTitle = tracks[i].title;

audioTag.src = `${dirPath}/${trackTitle}.mp3`;

console.dir(audioTag);




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

      trackTitle = tracks[i].title;
      audioTag.src = `${dirPath}/${trackTitle}.mp3`;

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

         trackTitle = tracks[i].title;
         audioTag.src = `${dirPath}/${trackTitle}.mp3`;
         iconToPause();
      }

      audioTag.currentTime = 0;
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