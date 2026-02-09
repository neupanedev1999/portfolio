const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const copyBtn = document.getElementById('copyEmail');
if (copyBtn){
  copyBtn.addEventListener('click', async () => {
    const text = copyBtn.dataset.copy || '';
    try{
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = 'Copied!';
      setTimeout(()=> copyBtn.textContent='Copy email', 1200);
    }catch(e){
      // Fallback: select via prompt
      window.prompt('Copy this email:', text);
    }
  });
}
