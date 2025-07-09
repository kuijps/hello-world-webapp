const helloEl = document.getElementById('hello');

const colors = ['#ff6b6b', '#6bffb1', '#6bc0ff', '#ffe36b', '#d96bff'];
let colorIndex = 0;

helloEl.addEventListener('click', () => {
  // Cycle through colors
  document.body.style.backgroundColor = colors[colorIndex];
  helloEl.style.color = colors[(colorIndex + 2) % colors.length];
  helloEl.textContent = getRandomGreeting();
  
  colorIndex = (colorIndex + 1) % colors.length;
});

function getRandomGreeting() {
  const greetings = [
    'Hello, World!',
    'Hey there!',
    'What’s up?',
    'Bonjour, le monde!',
    'Hola, Mundo!',
    '👋 Hello!',
    'Greetings, Earthling!'
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}
