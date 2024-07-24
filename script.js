document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
});

window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
        footer.style.bottom = '0';
    } else {
        footer.style.bottom = '-100px';
    }
});

document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-button').addEventListener('click', function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});