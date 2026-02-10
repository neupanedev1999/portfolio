function showSummary(type) {
  const it = document.getElementById('it');
  const cyber = document.getElementById('cyber');
  const btnIt = document.getElementById('btn-it');
  const btnCyber = document.getElementById('btn-cyber');

  if (type === 'cyber') {
    it.style.display = 'none';
    cyber.style.display = 'block';
    btnIt.classList.remove('active');
    btnCyber.classList.add('active');
  } else {
    cyber.style.display = 'none';
    it.style.display = 'block';
    btnCyber.classList.remove('active');
    btnIt.classList.add('active');
  }
}

// default
document.addEventListener('DOMContentLoaded', () => showSummary('it'));
