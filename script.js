//your JS code here. If required.
const sounds = ['applause' , 'boo' ,'gasp' ,'tada' ,'victory' ,'wrong' ,'stop'];
const button = document.querySelector("#buttons");

const audioMap ={};
sounds.forEach(sound=>{
	audioMap[sound]=new Audio (`sounds/${sound}.mp3`);
})
sounds.forEach(sound=>{
	const btn = document.createElement("button");
	btn.classList.add("btn");

	if(sound=="stop"){
		btn.classList.add("stop");
	}
	btn.innerText = sound;

	btn.addEventListener('click' ,()=>{
		stopAllSounds();
		audioMap[sound].play();
})
	button.append(btn);
})
	function stopAllSounds(){
		sounds.forEach(sound=>{
			const audio = audioMap[sound];
			audio.pause()
			audio.currentTime=0;
		});
	}