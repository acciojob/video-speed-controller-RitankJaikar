const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



const video=  document.querySelector("video");
const progress = document.querySelector('.progress');
const playerButton= document.querySelector(".toggle");
const volume= document.querySelector(".volume");
const playbackSpeed= document.querySelector(".playbackSpeed");
const rewind= document.querySelector(".rewind");
const forward= document.querySelector(".forward");
let progressBar;

video.addEventListener('loadedmetadata', () => {
  progress.innerHTML = `<input type="range" class="progress__filled" min="0" max="${video.duration}" step="1" style="width: 100%;">`;
  const progressBar = document.querySelector('.progress__filled');
  progressBar.addEventListener("input", (e) => {
	  video.currentTime= e.target.value;
  })

  video.addEventListener('timeupdate', () => {
    progressBar.value = video.currentTime;
  });
});


playerButton.addEventListener("click", () => {
	video.paused ? video.play() : video.pause()
})

video.addEventListener("play", () => {
	playerButton.innerText= "❚ ❚";
})

video.addEventListener("pause", () => {
	playerButton.innerText= "►";
})

volume.addEventListener("input", (e) => {
	video.volume= e.target.value;
})

playbackSpeed.addEventListener("input", (e) => {
	video.playbackRate= e.target.value;
})

rewind.addEventListener("click", () => {
	video.currentTime-=10; 
})

forward.addEventListener("click", () => {
	video.currentTime+=25; 
})

