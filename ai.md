prompt: como fazer a navbar ficar com um blur quando scrollar para baixo

resultado: {

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-blur');
  } else {
    navbar.classList.remove('navbar-blur');
  }
});

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: transparent; /* Começa 100% transparente */
  transition: all 0.3s ease; /* Suaviza a transição */
}

/* Classe adicionada pelo JavaScript */
.navbar-blur {
  background-color: rgba(255, 255, 255, 0.7); /* Fundo semi-transparente no scroll */
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}

}





prompt: como eu posso fazer para quando clicar em algum dos links do menu, ele fechar

resultado: {

document.querySelectorAll('.menu-item').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});

}