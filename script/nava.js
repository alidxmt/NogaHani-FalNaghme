var oscillator = null;
var isPlaying = false;
var context = new AudioContext();
var volume = context.createGain();
function dec(decreaseTime) {
    volume.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+decreaseTime)
}
function play(Lfreq, Lgain) {
    if (isPlaying) {
        oscillator.frequency.setValueAtTime(Lfreq, context.currentTime);
        volume.gain.value = Lgain;
    }
    else {
    volume.connect(context.destination);
    volume.gain.value = Lgain;
    oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = Lfreq;
    oscillator.connect(volume);
    oscillator.start();
    isPlaying = true;
}
}

