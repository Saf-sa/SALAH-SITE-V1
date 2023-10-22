document.addEventListener("DOMContentLoaded", function () {
    const videoPlayer = document.querySelector(".video video");
    const playPauseButton = document.querySelector(".play-pause");
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");
  
    // Tableau contenant les chemins des vidéos
    const videoSources = [
      "./Assets/Video/music/dolce.mp4",
      "./Assets/Video/music/just an emotion.mp4",
      "./Assets/Video/music/if sometime.mp4",
      "./Assets/Video/music/petite hisoire.mp4",
      "./Assets/Video/music/Avec le temps.mp4",
      "./Assets/Video/music/Night Story.mp4",
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
  
  // Tableau contenant les chemins des vidéos