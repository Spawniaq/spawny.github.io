// Add smooth scrolling to all links
$('a').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      
      const hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });
  
  // Add responsive behavior to the navigation menu
  const nav = document.querySelector('nav');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelector('.menu-links');
  
  menu.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menuLinks.classList.contains('active')) {
      menuLinks.classList.remove('active');
    }
  });
  