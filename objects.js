var playlist = {Object};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist ;
} 
function deleteFromPlaylist(playlist, artistName) {
  delete playlist.songTitle; 
  return playlist;
}