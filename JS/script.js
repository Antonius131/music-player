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