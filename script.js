const soundNames = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

// Play selected sound
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    stopAllSounds();

    const audio = document.getElementById(btn.innerText);
    audio.play();
  });
});

// Stop button functionality
document.querySelector(".stop").addEventListener("click", stopAllSounds);

// Stop all sounds
function stopAllSounds() {
  soundNames.forEach(name => {
    const audio = document.getElementById(name);
    audio.pause();
    audio.currentTime = 0;
  });
}
