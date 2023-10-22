document.addEventListener("DOMContentLoaded", function () {
    const videoPlayer = document.querySelector(".video video");
    const playPauseButton = document.querySelector(".play-pause");
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");
  
    const videoSources = [
      "./Assets/Video/film/muse.mp4",
      "./Assets/Video/film/KomUnik.mp4",
      "./Assets/Video/film/diner.mp4",
    ];
    let currentVideoIndex = 0; // Index de la vidéo en cours
  
    // Fonction pour mettre en pause ou jouer la vidéo
    function togglePlayPause() {
      if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseButton.setAttribute("icon", "fluent:video-pause-24-regular");
      } else {
        videoPlayer.pause();
        playPauseButton.setAttribute("icon", "fluent:video-play-24-regular");
      }
    }
  
    // Fonction pour charger la vidéo suivante
    function loadNextVideo() {
      currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
      videoPlayer.src = videoSources[currentVideoIndex];
      videoPlayer.play();
      playPauseButton.setAttribute("icon", "fluent:video-pause-24-regular");
    }
  
    // Fonction pour charger la vidéo précédente
    function loadPrevVideo() {
      currentVideoIndex =
        (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
      videoPlayer.src = videoSources[currentVideoIndex];
      videoPlayer.play();
      playPauseButton.setAttribute("icon", "fluent:video-pause-24-regular");
    }
  
    // Attribution des fonctions aux boutons
    playPauseButton.onclick = togglePlayPause;
    leftButton.onclick = loadPrevVideo;
    rightButton.onclick = loadNextVideo;
  
    // Chargement de la première vidéo et lecture automatique
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
  });