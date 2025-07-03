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
    'C# 🎯',
    'Python 🐍',
    'Swift 🍏',
    'Rust 🦀',
    'TypeScript 📜',
    'C++ ⚙️',
    'Dart 🦄',
    'Scala 🐪',
    'Elixir 🦺',
    'Haskell 🧠',
  ],
  level: [
    'Newbie 🐣',
    'Intermediate 🚶‍♂️',
    'Senior 🧑‍💼',
    'Master 🧙‍♂️',
    'Grand Master 🐉',
    'Expert 🧑‍🏫',
    'Legendary 🦸‍♂️',
    'Guru 🧘‍♂️', 
    'Prodigy 🌟',
    'Innovator 💡',
    'Visionary 👁️',
    'Pioneer 🚀',
    'Trailblazer 🔥',
    'Architect 🏛️',
  ],
  tip: [
    'Keep pushing! 💪',
    'Practice makes perfect! 🧠',
    'Take breaks to avoid burnout 🌴',
    'Build real projects 🏗️',
    'Read code from others 📖',
    'Stay curious and consistent 🔍',
    'Join a community for support 🤝',
    'Never stop learning! 📚',
    'Experiment with new technologies 🧪',
    'Share your knowledge with others 🌍',
    'Embrace challenges as opportunities 🚀',
    'Stay updated with industry trends 🌐',
    'Balance work and life for better productivity ⚖️',
    'Focus on problem-solving skills 🧩',
    'Document your learning journey 📝',
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