$(document).ready(function(){
  var playlist = [{
      title:"Ziran18岁生日快乐",
      artist:"大熊",
      mp3:"asset/ziran.mp3",
      poster: "images/1.jpg"
    },{
      title:"YUKI雪",
      artist:"山下力哉",
      mp3:"asset/YUKI.mp3",
      poster: "images/1.jpg"
    }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});