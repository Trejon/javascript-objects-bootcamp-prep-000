var playlist = {Object};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist ;
} 
delete playlist.songTitle; 
