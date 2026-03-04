const isIOS = /iPhone|iPad/.test(navigator.userAgent);
const hapticEl = document.createElement('input');
if (isIOS) {
    hapticEl.type = 'checkbox';
    hapticEl.setAttribute('switch', '');
    hapticEl.style.display = 'none';
    document.body.appendChild(hapticEl);
}
document.addEventListener('click', e => {
    if (e.target.closest('button, a')) {
        isIOS ? hapticEl.click() : navigator.vibrate?.(15);
    }
}, { passive: true });
