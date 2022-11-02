const tracks = [];

axios.get('https://api.napster.com/v2.1/tracks/top?apikey=NWYxMzI0ZmEtZTQ3OC00ZTU0LTllMmYtNjIyYTdmYzBlMjkw')
.then(response => {
   const tracksList = response.data.tracks;

   for (let i=0; i<=tracksList.length-1; i++) {
      const songURL = tracksList[i].previewURL;
      tracks.push(songURL);
   }
}).catch(error => {
   console.log(error);
});