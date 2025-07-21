// input.js
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        input.style.borderColor = '#d9534f';
    });
    input.addEventListener('blur', function() {
        input.style.borderColor = '';
    });
});
