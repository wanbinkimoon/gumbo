export default items => {
  let album = {
    title: [],
    mainArtist: [],
    picture: [],
    year: [],
    description: [],
    spotifyLink: [],
    label: [],
    tracksNumber: [],
    tracksList: [],
    countryList: [],
  };

  for (let item of items) {
    album.title.push(item.name);
    album.mainArtist.push(item.artists[0].name);
    // album.picture.push(item.);
    album.year.push(item.release_date);
    // album.description.push(item.);
    album.spotifyLink.push(item.external_urls.spotify);
    // album.label.push(item.);
    album.tracksNumber.push(item.total_tracks);
    // album.tracksList.push(item.);
    album.countryList.push(item.available_markets.join());
  }
  return album;
};
