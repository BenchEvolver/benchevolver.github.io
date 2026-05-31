// Copy BibTeX to clipboard
function copyBib() {
  const txt = document.getElementById('bibtex').textContent.replace(/^Copy/, '').trim();
  navigator.clipboard.writeText(txt).then(() => {
    const btn = document.querySelector('.copy-btn');
    const old = btn.textContent;
    btn.textContent = 'Copied';
    setTimeout(() => { btn.textContent = old; }, 1500);
  });
}
window.copyBib = copyBib;
