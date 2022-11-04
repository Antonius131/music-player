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
const firstTrack = tracks[0].title;

const trackPath = audioTag.setAttribute('src', `${dirPath}/${firstTrack}.mp3`);



// play/pause track

const playBtn = document.getElementById('play-pause');
const playIcon = document.querySelector('.fa-play');

console.log(playIcon);

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