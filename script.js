// Helper to generate random number
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Define the advice content
const collectiveAdvice = {
  programLanguage: [
    'JavaScript 💻',
    'Ruby 💎',
    'Java ☕',
    'Kotlin 📱',
    'PHP 🐘',
    'Go 🚀',
    'C# 🎯'
  ],
  level: [
    'Newbie 🐣',
    'Intermediate 🚶‍♂️',
    'Senior 🧑‍💼',
    'Master 🧙‍♂️',
    'Grand Master 🐉'
  ],
  tip: [
    'Keep pushing! 💪',
    'Practice makes perfect! 🧠',
    'Take breaks to avoid burnout 🌴',
    'Build real projects 🏗️',
    'Read code from others 📖',
    'Stay curious and consistent 🔍'
  ]
};

// Main function
function generateAdvice() {
  let messageParts = [];

  for (let item in collectiveAdvice) {
    let randomIndex = generateRandomNumber(collectiveAdvice[item].length);
    switch(item) {
      case 'programLanguage':
        messageParts.push(`Your current skill path is: <strong>${collectiveAdvice[item][randomIndex]}</strong>`);
        break;
      case 'level':
        messageParts.push(`Your next growth level: <strong>${collectiveAdvice[item][randomIndex]}</strong>`);
        break;
      case 'tip':
        messageParts.push(`Advice for today: <em>${collectiveAdvice[item][randomIndex]}</em>`);
        break;
    }
  }

  const box = document.getElementById('advice-box');
  box.classList.remove('show');
  setTimeout(() => {
    box.innerHTML = messageParts.join('<br><br>');
    box.classList.add('show');
  }, 100);
}