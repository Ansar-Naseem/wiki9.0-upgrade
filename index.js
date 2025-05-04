// Dark Mode Persistence
const darkModeToggle = document.getElementById('darkModeToggle');

// Load preferences
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
}

// Toggle Function
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Voting System
let votes = JSON.parse(localStorage.getItem('intelligenceVotes')) || { ai: 0, human: 0 };

function vote(type) {
    votes[type]++;
    localStorage.setItem('intelligenceVotes', JSON.stringify(votes));
    updateResults();
}

function updateResults() {
    const total = votes.ai + votes.human || 1; // Avoid division by zero
    const aiPercent = Math.round((votes.ai / total) * 100);

    document.getElementById('ai-bar').style.width = `${aiPercent}%`;
    document.getElementById('ai-bar').textContent = `AI: ${aiPercent}%`;

    document.getElementById('human-bar').style.width = `${100 - aiPercent}%`;
    document.getElementById('human-bar').textContent = `Human: ${100 - aiPercent}%`;

    // Always show results after voting
    document.getElementById('vote-results').style.display = 'flex';
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function () {
    // Populate strengths lists
    const aiStrengths = ["Never fatigues", "Instant processing", "Perfect memory"];
    const humanStrengths = ["Emotional IQ", "Creativity", "Ethics"];

    document.getElementById('ai-strengths').innerHTML = aiStrengths.map(s => `<li>${s}</li>`).join('');
    document.getElementById('human-strengths').innerHTML = humanStrengths.map(s => `<li>${s}</li>`).join('');

    updateResults(); // Show initial votes
});