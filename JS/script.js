// create tracks objects array

const tracks = [
   {
      title: 'at-the-cross',
      artist: 'Kodak Black',
      img: 'imagePath'
   },
   {
      title: 'brun-the-house-down',
      artist: 'AJR',
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

let trackPath = audioTag.setAttribute('src', `${dirPath}/${trackTitle}.mp3`);



// play/pause track

const playBtn = document.getElementById('play-pause');
const playIcon = document.querySelector('.fa-play');

playBtn.addEventListener(
   'click',
   () => {
      if (audioTag.paused) {
         audioTag.play()

         playIcon.classList.remove('fa-play');
         playIcon.classList.add('fa-pause');
      } else {
         audioTag.pause()

         playIcon.classList.remove('fa-pause');
         playIcon.classList.add('fa-play');
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
      trackPath = audioTag.setAttribute('src', `${dirPath}/${trackTitle}.mp3`);
   }
);

prevBtn.addEventListener (
   'click',
   () => {
      i--;
      if (i < 0) {
         i = tracks.length - 1;
      }

      trackTitle = tracks[i].title;
      trackPath = audioTag.setAttribute('src', `${dirPath}/${trackTitle}.mp3`);
   }
)