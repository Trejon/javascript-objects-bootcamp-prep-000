var playlist = {Object};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist ;
} 
function removeFromPlaylist(playlist, artistName) {
  delete playlist.songTitle; 
  return playlist; 
}