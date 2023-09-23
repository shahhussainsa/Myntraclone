const hover-element = document.getElementById('hover-element');

showhover-element.addEventListener('hover', () => {
    // Fetch external HTML content and insert it into the popup
    fetch('loginfd/login.html')
        .then(response => response.text())
        .then(data => {
            hover-element.innerHTML = data;
            hover-element.style.display = 'block';
        });
});

closehover-element.addEventListener('click', () => {
    hover-element.style.display = 'none';
});
