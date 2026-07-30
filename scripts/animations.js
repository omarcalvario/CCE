(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function prefersReducedMotionCheck() {
    return prefersReducedMotion;
  }

  /* ============================================
     HERO STAGGER — reemplaza nth-child delays
     ============================================ */
  function initHeroStagger() {
    const heroContent = document.querySelector('.hero .content');
    if (!heroContent) return;
    const children = heroContent.children;
    if (prefersReducedMotionCheck()) {
      Array.from(children).forEach(function (el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.animation = 'none';
      });
      return;
    }
    Array.from(children).forEach(function (el, i) {
      el.style.animationDelay = (0.2 + i * 0.25) + 's';
    });
  }

  /* ============================================
     EJE CARDS — IntersectionObserver
     ============================================ */
  function initEjeCards() {
    const cards = document.querySelectorAll('.eje-card');
    if (prefersReducedMotionCheck()) {
      cards.forEach(function (card) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) rotateX(0)';
        card.style.animation = 'none';
      });
      return;
    }
    var ejeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          ejeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(function (card) {
      card.style.animationPlayState = 'paused';
      ejeObserver.observe(card);
    });
  }

  /* ============================================
     EJES PARTICLES
     ============================================ */
  function initEjeParticles() {
    var container = document.getElementById('ejesParticles');
    if (!container) return;
    if (prefersReducedMotionCheck()) return;
    var colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#ef4444', '#10b981', '#3b82f6'];
    for (var i = 0; i < 20; i++) {
      var p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDuration = (Math.random() * 10 + 15) + 's';
      p.style.animationDelay = (Math.random() * 5) + 's';
      p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
      p.style.setProperty('--particle-color', colors[Math.floor(Math.random() * colors.length)]);
      container.appendChild(p);
    }
  }

  /* ============================================
     PARALLAX SECTION
     ============================================ */
  function initParallax() {
    var section = document.getElementById('parallaxSection');
    if (!section) return;
    var video = document.getElementById('parallaxVideo');
    var content = document.getElementById('parallaxContent');
    var badge = document.getElementById('parallaxBadge');
    var title = document.getElementById('parallaxTitle');
    var subtitle = document.getElementById('parallaxSubtitle');
    var cta = document.getElementById('parallaxCta');
    var PARALLAX_SPEED = prefersReducedMotionCheck() ? 0 : 0.35;

    var videoObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          video.play().catch(function () {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.25 });
    videoObs.observe(section);

    var ticking = false;
    function updateParallax() {
      var rect = section.getBoundingClientRect();
      var sectionH = rect.height;
      var vpHeight = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vpHeight) {
        ticking = false;
        return;
      }
      var progress = (vpHeight - rect.top) / (vpHeight + sectionH);
      if (PARALLAX_SPEED > 0) {
        var offset = (progress - 0.5) * sectionH * PARALLAX_SPEED;
        content.style.transform = 'translate3d(0, ' + offset + 'px, 0)';
        var videoScale = 1 + progress * 0.05;
        video.style.transform = 'translate(-50%, -50%) scale(' + videoScale + ')';
      }
      if (rect.top < vpHeight * 0.75) {
        badge.classList.add('visible');
        title.classList.add('visible');
        subtitle.classList.add('visible');
        cta.classList.add('visible');
      }
      ticking = false;
    }

    if (!prefersReducedMotionCheck()) {
      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }, { passive: true });
    }

    if (prefersReducedMotionCheck()) {
      badge.classList.add('visible');
      title.classList.add('visible');
      subtitle.classList.add('visible');
      cta.classList.add('visible');
    }

    var lazyVideoObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          video.preload = 'auto';
          lazyVideoObs.unobserve(section);
        }
      });
    }, { rootMargin: '200px' });
    lazyVideoObs.observe(section);

    if (window.innerWidth <= 768 && prefersReducedMotionCheck()) {
      content.style.transform = 'none';
    }
  }

  /* ============================================
     SCROLL ANIMATIONS FOR SECTIONS
     ============================================ */
  function initSectionScroll() {
    var sections = document.querySelectorAll('.certificaciones, .guias, .faq, .cotizador, .ubicacion, .footer, .curso-hero, .curso-descripcion, .curso-perfil, .curso-aplicacion, .curso-temario, .curso-requisitos, .curso-relacionados');
    if (prefersReducedMotionCheck()) {
      sections.forEach(function (s) {
        s.classList.add('visible');
        s.style.opacity = '1';
        s.style.transform = 'none';
      });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(function (s) {
      s.classList.add('fade-section');
      obs.observe(s);
    });
  }

  /* ============================================
     INIT ALL
     ============================================ */
  document.addEventListener('DOMContentLoaded', function () {
    initHeroStagger();
    initEjeCards();
    initEjeParticles();
    initParallax();
    initSectionScroll();
  });
})();
