  // ===== THEME =====
  const themeBtn = document.getElementById('btn-theme');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;
  let theme = localStorage.getItem('theme') || 'dark';
  applyTheme(theme);

  function applyTheme(t) {
      html.setAttribute('data-theme', t);
      themeIcon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  themeBtn.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
      applyTheme(theme);
  });

  // ===== MOBILE MENU =====
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  burger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  document.querySelectorAll('.mm-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // ===== WHATSAPP FORM =====
  function enviarWhats(e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const msg = document.getElementById('mensagem').value;
      const texto = encodeURIComponent(`Olá, me chamo ${nome}. ${msg}`);
      window.open(`https://wa.me/5511989581698?text=${texto}`, '_blank');
  }

  // ===== SCROLL REVEAL =====
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
          if (e.isIntersecting) {
              e.target.classList.add('visible');
          }
      });
  }, {
      threshold: 0.1
  });
  reveals.forEach(el => observer.observe(el));

  // ===== SKILL BARS =====
  const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
          if (e.isIntersecting) {
              e.target.querySelectorAll('.skill-bar-fill').forEach(bar => bar.classList.add('animated'));
          }
      });
  }, {
      threshold: 0.2
  });
  document.querySelectorAll('#sobre').forEach(s => barObserver.observe(s));

  // ===== NAV ACTIVE =====
  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
          if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
      });
  });