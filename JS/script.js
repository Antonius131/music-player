// get tracks URLs from API

const audioFile = document.getElementById('audio-file');
const tracks = [
   {
      track: 'audioTrack',
      artist: 'artist1',
      img: 'imagePath'
   },
   {
      track: 'audioTrack',
      artist: 'artist1',
      img: 'imagePath'
   },
   {
      track: 'audioTrack',
      artist: 'artist1',
      img: 'imagePath'
   },
   {
      track: 'audioTrack',
      artist: 'artist1',
      img: 'imagePath'
   },
   {
      track: 'audioTrack',
      artist: 'artist1',
      img: 'imagePath'
   },
];

axios.get('https://api.napster.com/v2.1/tracks/top?apikey=NWYxMzI0ZmEtZTQ3OC00ZTU0LTllMmYtNjIyYTdmYzBlMjkw')
.then(response => {
   const tracksList = response.data.tracks;

   console.log(tracksList);
}).catch(error => {
   console.log(error);
});

audioFile.innerHTML = tracks[0];


// put tracks URLs in audio tag

