// textarea.js
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('focus', function() {
        textarea.style.borderColor = '#d9534f';
    });
    textarea.addEventListener('blur', function() {
        textarea.style.borderColor = '';
    });
});
