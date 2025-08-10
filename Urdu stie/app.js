// app.js - non-translation logic: theme, menus, gallery, auth flow, gating

(function() {
  let currentSlide = 0;
  let slideInterval;
  let isDarkTheme = false;
  let isSideMenuOpen = false;

  function saveTheme() {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }

  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    isDarkTheme = savedTheme === 'dark';
    applyTheme();
  }

  window.toggleTheme = function() {
    isDarkTheme = !isDarkTheme;
    applyTheme();
    saveTheme();
  };

  function applyTheme() {
    const body = document.getElementById('mainBody');
    const themeToggle = document.getElementById('themeToggle');
    if (!body || !themeToggle) return;
    if (isDarkTheme) {
      body.classList.add('dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      body.classList.remove('dark');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  // Side menu
  window.toggleSideMenu = function() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    if (!sideMenu || !overlay) return;
    isSideMenuOpen = !isSideMenuOpen;
    if (isSideMenuOpen) {
      sideMenu.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      sideMenu.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.closeSideMenu = function() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    if (!sideMenu || !overlay) return;
    isSideMenuOpen = false;
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Gallery
  const galleryContent = [
    { text: 'Welcome to Our Gallery', color: '#667eea' },
    { text: 'Innovation at Its Best', color: '#764ba2' },
    { text: 'Excellence in Every Detail', color: '#f093fb' },
    { text: 'Your Success is Our Priority', color: '#4facfe' }
  ];

  function showSlide(index) {
    const slide = document.getElementById('gallerySlide');
    const content = document.getElementById('slideContent');
    if (!slide || !content) return;
    currentSlide = index;
    if (currentSlide >= galleryContent.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = galleryContent.length - 1;
    const slideData = galleryContent[currentSlide];
    content.innerText = slideData.text;
    slide.style.background = `linear-gradient(45deg, ${slideData.color}, ${slideData.color}dd)`;
    updateDots();
  }

  window.changeSlide = function(direction) {
    const body = document.getElementById('mainBody');
    const isRTL = body && body.classList.contains('rtl');
    if (isRTL) direction = -direction;
    showSlide(currentSlide + direction);
    resetSlideInterval();
  };

  function goToSlide(index) { showSlide(index); resetSlideInterval(); }

  function updateDots() {
    const dotsContainer = document.getElementById('carouselDots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    galleryContent.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `dot ${index === currentSlide ? 'active' : ''}`;
      dot.onclick = () => goToSlide(index);
      dotsContainer.appendChild(dot);
    });
  }

  function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
  }

  // Dropdowns (touch and sidebar support)
  function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      if (!link) return;
      link.addEventListener('click', function(e) {
        const inSideMenu = !!dropdown.closest('.side-menu');
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch || inSideMenu) {
          e.preventDefault();
          dropdowns.forEach(other => { if (other !== dropdown) other.classList.remove('active'); });
          dropdown.classList.toggle('active');
        }
      });
    });
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(d => d.classList.remove('active'));
      }
    });
  }

  // Auth placeholders + redirect to success
  function handleLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const remember = formData.get('remember');
    console.log('Login form submitted:', { email, password, remember });
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'success.html';
  }

  function handleSignupSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const agreeTerms = formData.get('agreeTerms');
    if (password !== confirmPassword) { alert('Passwords do not match!'); return; }
    if (!agreeTerms) { alert('Please agree to the Terms of Service and Privacy Policy.'); return; }
    console.log('Signup form submitted:', { firstName, lastName, email });
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'success.html';
  }

  function gateCourses() {
    const body = document.getElementById('mainBody');
    if (!body) return;
    const page = body.getAttribute('data-page');
    if (page === 'courses') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        alert('Please log in to access Courses.');
        window.location.href = 'login.html';
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    initializeDropdowns();
    // Gallery init
    if (document.getElementById('gallerySlide')) { showSlide(0); resetSlideInterval(); }
    // Forms
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLoginSubmit);
    const signupForm = document.getElementById('signupForm');
    if (signupForm) signupForm.addEventListener('submit', handleSignupSubmit);
    // Contact form generic handler (optional)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', function(e){ e.preventDefault(); alert('Thank you!'); });
    // Gate
    gateCourses();
  });
})();


