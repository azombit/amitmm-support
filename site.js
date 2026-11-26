const h = document.documentElement, b = document.getElementById('lang');
function set(l) { h.lang = l; h.dir = l === 'he' ? 'rtl' : 'ltr'; b.textContent = l === 'he' ? 'English' : 'עברית'; document.title = h.dataset[l === 'he' ? 'titleHe' : 'titleEn']; try { localStorage.lang = l; } catch (e) {} links(); }
b.onclick = () => set(h.lang === 'he' ? 'en' : 'he');
// Contact links get the message in the page's current language when clicked.
const WA = '972502357515', MAIL = 'amit.malerman@gmail.com';
function links() {
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(h.lang === 'en' ? a.dataset.waEn : a.dataset.wa); });
  document.querySelectorAll('[data-mail]').forEach(a => { a.href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(h.lang === 'en' ? a.dataset.mailEn : a.dataset.mail); });
}
const saved = (() => { try { return localStorage.lang; } catch (e) {} })();
set(saved === 'en' ? 'en' : 'he');
document.getElementById('y').textContent = new Date().getFullYear();
