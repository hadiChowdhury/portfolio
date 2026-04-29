/* ============================================
   script.js — Portfolio Interactions
   ============================================ */

/* ----- NAVBAR SCROLL ----- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ----- HAMBURGER MENU ----- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ----- ACTIVE NAV LINK on SCROLL ----- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}
window.addEventListener('scroll', setActiveLink);

/* ----- TYPING EFFECT ----- */
const roles = [
  'SQA Engineer',
  'Test Automation Specialist',
  'Bug Hunter 🐛',
  'Python Enthusiast',
  'Quality Advocate',
];
let roleIndex = 0, charIndex = 0, deleting = false;
const roleText = document.getElementById('roleText');

function typeRole() {
  if (!roleText) return;
  const current = roles[roleIndex];

  if (!deleting) {
    roleText.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeRole, 2200);
      return;
    }
    setTimeout(typeRole, 80);
  } else {
    roleText.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 400);
      return;
    }
    setTimeout(typeRole, 45);
  }
}

setTimeout(typeRole, 800);

/* ----- HERO LAYOUT ----- */
// Wrap hero content and avatar in a proper flex wrapper
const hero = document.getElementById('home');
if (hero) {
  const heroBg = hero.querySelector('.hero-bg');
  const heroContent = hero.querySelector('.hero-content');
  const heroAvatar = hero.querySelector('.hero-avatar');
  const scrollDown = hero.querySelector('.scroll-down');

  if (heroContent && heroAvatar) {
    const wrapper = document.createElement('div');
    wrapper.className = 'hero-wrapper';
    hero.insertBefore(wrapper, heroContent);
    wrapper.appendChild(heroContent);
    wrapper.appendChild(heroAvatar);
  }
}

/* ----- INTERSECTION OBSERVER (reveal on scroll) ----- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .fade-in').forEach(el => observer.observe(el));

/* Fire hero reveals immediately */
setTimeout(() => {
  document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));
}, 100);

/* ----- LANGUAGE BAR ANIMATION ----- */
const langObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.lang-fill').forEach(fill => {
        fill.classList.add('animated');
      });
    }
  });
}, { threshold: 0.5 });

const langSection = document.querySelector('.lang-section');
if (langSection) langObserver.observe(langSection);

/* ----- FOOTER YEAR ----- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ----- CONTACT FORM (Formspree) ----- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-primary');
    const btnText = document.getElementById('btnText');
    const btnLoading = document.getElementById('btnLoading');

    // ⚠️ REPLACE the URL below with your Formspree endpoint:
    // 1. Go to https://formspree.io
    // 2. Create a free account & new form
    // 3. Copy your endpoint like: https://formspree.io/f/xyzabcde
    const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

    if (FORMSPREE_URL.includes('YOUR_FORM_ID')) {
      alert('📋 To enable the contact form:\n1. Sign up at formspree.io (free)\n2. Create a new form\n3. Replace YOUR_FORM_ID in script.js with your form ID');
      return;
    }

    btn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        contactForm.innerHTML = `
          <div style="text-align:center; padding: 40px 20px;">
            <div style="font-size:48px; margin-bottom:16px;">✅</div>
            <h3 style="font-size:20px; margin-bottom:8px; color:#fff;">Message Sent!</h3>
            <p style="color:var(--muted);">Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        `;
      } else {
        throw new Error('Form error');
      }
    } catch {
      btn.disabled = false;
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
      alert('Something went wrong. Please try emailing me directly at ahc.abdulhadichowdhury@gmail.com');
    }
  });
}

/* ----- SMOOTH ANCHOR OFFSET (account for sticky nav) ----- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});
