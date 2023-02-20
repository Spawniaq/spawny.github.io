const audioPlayer = document.getElementById('audio-player');
const happyButton = document.getElementById('happy-button');
const sadButton = document.getElementById('sad-button');
const angryButton = document.getElementById('angry-button');
const calmButton = document.getElementById('calm-button');
const surprisedButton = document.getElementById('surprised-button');

happyButton.addEventListener('click', function() {
	audioPlayer.src = 'https://www.internet-radio.com/station/danceradiouk/';
	audioPlayer.play();
});

sadButton.addEventListener('click', function() {
	audioPlayer.src = 'http://example.com/sad-radio-stream.mp3';
	audioPlayer.play();
});

angryButton.addEventListener('click', function() {
	audioPlayer.src = 'http://example.com/angry-radio-stream.mp3';
	audioPlayer.play();
});

calmButton.addEventListener('click', function() {
	audioPlayer.src = 'http://example.com/calm-radio-stream.mp3';
	audioPlayer.play();
});
