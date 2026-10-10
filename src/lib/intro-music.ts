export function createIntroMusic() {
  const context = new AudioContext();
  const master = context.createGain();
  const compressor = context.createDynamicsCompressor();
  master.gain.value = 0.48;
  compressor.threshold.value = -18;
  compressor.ratio.value = 4;
  master.connect(compressor);
  compressor.connect(context.destination);
  let step = 0;
  const tone = (frequency: number, duration: number, volume: number, type: OscillatorType = 'sine') => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start();
    oscillator.stop(context.currentTime + duration);
  };
  const timer = window.setInterval(() => {
    if (context.state !== 'running') return;
    const bass = [55, 55, 65.41, 73.42][Math.floor(step / 16) % 4] ?? 55;
    if (step % 4 === 0 || step % 16 === 11) tone(bass, 0.38, 0.65);
    if (step % 8 === 0) {
      [220, 261.63, 329.63].forEach((frequency) => tone(frequency * (bass / 55), 1.5, 0.07, 'triangle'));
    }
    if (step % 4 === 2) tone(180, 0.08, 0.18, 'triangle');
    if (step % 2 === 0 || step % 8 === 7) tone(4200, 0.025, 0.025, 'square');
    if ([3, 6, 10, 14].includes(step % 16)) tone([440, 523.25, 659.25, 587.33][Math.floor(step / 4) % 4] ?? 440, 0.16, 0.07, 'triangle');
    step++;
  }, 150);
  return {
    play: () => context.resume(),
    pause: () => context.suspend(),
    onStateChange: (listener: (running: boolean) => void) => {
      const update = () => listener(context.state === 'running');
      context.addEventListener('statechange', update);
      update();
      return () => context.removeEventListener('statechange', update);
    },
    dispose: () => { window.clearInterval(timer); void context.close(); },
  };
}