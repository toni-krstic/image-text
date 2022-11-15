const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  btn.style.display = 'none';

  const learnMore = document.getElementById('learn-more');
  learnMore.style.display = 'block';
});