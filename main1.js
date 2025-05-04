// Dark Mode Toggle with icon switching
const darkModeToggle = document.getElementById('darkModeToggle');

// Set initial icon based on current mode (if you want to start with light mode)
darkModeToggle.textContent = '🌙'; // Default to moon icon for light mode

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change icon based on current mode
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️'; // Sun icon for dark mode
  } else {
    darkModeToggle.textContent = '🌙'; // Moon icon for light mode
  }
});

// Auto-generate Table of Contents
const headings = document.querySelectorAll('h2, h3');
const tocList = document.getElementById('tocList');

headings.forEach(heading => {
  if (heading.id) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    li.appendChild(a);
    tocList.appendChild(li);
  }
});