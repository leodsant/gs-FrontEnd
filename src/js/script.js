window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-blur');
  } else {
    navbar.classList.remove('navbar-blur');
  }
});
