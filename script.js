document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222'; 
        } else {
            navbar.style.backgroundColor = '#333'; 
        }
    });

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
