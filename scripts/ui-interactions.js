(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================
     CURSOS DATA — accessible globally in IIFE
     ============================================ */
  var courseImages = [
    'assets/images/courses/fotos-cursos/foto-curso1.webp',
    'assets/images/courses/fotos-cursos/foto-curso2.webp',
    'assets/images/courses/fotos-cursos/foto-curso3.webp',
    'assets/images/courses/fotos-cursos/foto-curso4.webp',
    'assets/images/courses/fotos-cursos/foto-curso5.webp',
    'assets/images/courses/fotos-cursos/foto-curso6.webp',
    'assets/images/courses/fotos-cursos/foto-curso7.webp',
    'assets/images/courses/fotos-cursos/foto-curso8.webp',
    'assets/images/courses/fotos-cursos/foto-curso9.webp',
    'assets/images/courses/fotos-cursos/foto-curso10.webp',
    'assets/images/courses/fotos-cursos/foto-curso11.webp',
    'assets/images/courses/fotos-cursos/foto-curso12.webp',
    'assets/images/courses/fotos-cursos/foto-curso13.webp',
    'assets/images/courses/fotos-cursos/foto-curso14.webp',
    'assets/images/courses/fotos-cursos/foto-curso15.webp',
    'assets/images/courses/fotos-cursos/foto-curso16.webp'
  ];

  function getCategoryLabel(category) {
    var labels = {
      calidad: 'Gestión de la calidad',
      talento: 'Gestión del talento humano',
      planeacion: 'Planeación estratégica',
      digitales: 'Habilidades digitales',
      salud: 'Salud',
      ventas: 'Ventas y comercialización',
      seguridad: 'Seguridad e higiene',
      conocer: 'CONOCER'
    };
    return labels[category] || category;
  }

  function getCredentialLabel(credential) {
    var labels = {
      stps: 'STPS / DC-3',
      conocer: 'CONOCER',
      internacional: 'Certificaciones internacionales'
    };
    return labels[credential] || credential;
  }

  var cursosData = [
    { title: "Control estadístico de procesos", category: "calidad", image: courseImages[0], audience: "Personal de producción y calidad", duration: "12 hrs", shortDesc: "Implementa herramientas de control estadístico para recopilar datos, tomar decisiones y mejorar los procesos de producción." },
    { title: "Elaboración de Documentación y Diagramas de Flujo ISO 9001:2015", category: "calidad", image: courseImages[1], audience: "Responsables de calidad", duration: "8 hrs", shortDesc: "Domina la creación de documentación, procedimientos y diagramas de flujo conforme a la norma ISO 9001:2015." },
    { title: "ISO 9001:2015 Sistemas de gestión de la calidad", category: "calidad", credential: "stps", image: courseImages[2], audience: "Directivos y coordinadores de calidad", duration: "12 hrs", shortDesc: "Comprende, implementa y mantiene un sistema de gestión de la calidad enfocado en la mejora continua." },
    { title: "Las 7 Herramientas de la calidad", category: "calidad", image: courseImages[3], audience: "Analistas y supervisores de calidad", duration: "8 hrs", shortDesc: "Analiza datos y mejora procesos con herramientas prácticas para resolver problemas y tomar decisiones objetivas." },
    { title: "Desarrollo de Habilidades de Supervisión", category: "talento", image: courseImages[4], audience: "Supervisores y líderes de equipo", duration: "12 hrs", shortDesc: "Fortalece el liderazgo, la comunicación, la gestión de equipos y la resolución de conflictos en la supervisión." },
    { title: "Estrés y productividad en el entorno laboral", category: "talento", image: courseImages[5], audience: "Profesionales y líderes de equipo", duration: "8 hrs", shortDesc: "Aplica técnicas de manejo del estrés y organización para optimizar el rendimiento y el bienestar laboral." },
    { title: "Gestión del tiempo", category: "talento", image: courseImages[6], audience: "Profesionales y estudiantes", duration: "4 hrs", shortDesc: "Desarrolla hábitos y estrategias para priorizar tareas, reducir el estrés y aumentar la productividad." },
    { title: "Liderazgo efectivo", category: "talento", image: courseImages[7], audience: "Gerentes y coordinadores", duration: "8 hrs", shortDesc: "Aplica habilidades de comunicación, motivación y toma de decisiones para guiar equipos hacia sus objetivos." },
    { title: "Administración exitosa de proyectos", category: "planeacion", image: courseImages[8], audience: "Gerentes y líderes de proyecto", duration: "12 hrs", shortDesc: "Gestiona proyectos desde la planeación hasta el cierre, controlando alcance, recursos, tiempos y riesgos." },
    { title: "Desarrollo de Habilidades de Comunicación", category: "planeacion", credential: "stps", image: courseImages[9], audience: "Profesionales y equipos de atención", duration: "8 hrs", shortDesc: "Fortalece la comunicación verbal, no verbal, asertiva y digital para construir relaciones profesionales eficaces." },
    { title: "Excel Básico", category: "digitales", image: courseImages[10], audience: "Estudiantes y personal administrativo", duration: "8 hrs", shortDesc: "Aprende a crear hojas de cálculo, usar fórmulas, ordenar datos y generar gráficos para gestionar información." },
    { title: "Nom - Consultorios y Hospitales", category: "salud", image: courseImages[11], audience: "Personal del sector salud", duration: "8 hrs", shortDesc: "Comprende e implementa las NOM aplicables a consultorios y hospitales para asegurar el cumplimiento normativo." },
    { title: "Atención al Cliente y Calidad en el Servicio", category: "ventas", image: courseImages[12], audience: "Personal de ventas y servicio", duration: "8 hrs", shortDesc: "Desarrolla estrategias de servicio, comunicación y manejo de situaciones desafiantes para fortalecer la lealtad del cliente." },
    { title: "Riesgos y Seguridad en el Trabajo", category: "seguridad", credential: "stps", image: courseImages[13], audience: "Personal operativo y supervisores", duration: "8 hrs", shortDesc: "Identifica, evalúa y previene riesgos laborales mediante controles, uso de EPP y una cultura de seguridad." },
    { title: "EC0217.01 Impartición de cursos de formación del capital humano de manera presencial grupal", category: "conocer", credential: "conocer", image: courseImages[14], audience: "Instructores y capacitadores", duration: "16 hrs", shortDesc: "Prepárate para impartir, evaluar y certificar cursos de formación presencial conforme al estándar EC0217.01." },
    { title: "Analyzing Data with Microsoft Power BI (DA-100)", category: "digitales", credential: "internacional", image: courseImages[15], audience: "Profesionales de datos y BI", duration: "16 hrs", shortDesc: "Modela, visualiza y analiza datos con Power BI para crear informes, paneles y soluciones empresariales seguras." },
  ];

  /* ============================================
     NAVBAR SEARCH — autocomplete
     ============================================ */
  function initNavbarSearch() {
    var input = document.getElementById('navbarSearchInput');
    var dropdown = document.getElementById('navbarSearchDropdown');
    if (!input || !dropdown) return;

    var debounceTimer = null;

    function renderDropdown(term) {
      dropdown.innerHTML = '';
      if (!term || term.length < 2) {
        dropdown.classList.remove('active');
        return;
      }

      var results = cursosData.filter(function (c) {
        var t = term.toLowerCase();
        return c.title.toLowerCase().indexOf(t) !== -1 ||
          c.shortDesc.toLowerCase().indexOf(t) !== -1 ||
          c.audience.toLowerCase().indexOf(t) !== -1 ||
          getCategoryLabel(c.category).toLowerCase().indexOf(t) !== -1;
      });

      if (results.length === 0) {
        dropdown.innerHTML = '<div class="navbar-search-empty">No se encontraron cursos</div>';
        dropdown.classList.add('active');
        return;
      }

      results.slice(0, 6).forEach(function (curso) {
        var item = document.createElement('div');
        item.className = 'navbar-search-dropdown-item';
        item.title = curso.title;
        item.innerHTML =
          '<span class="item-category">' + getCategoryLabel(curso.category) + '</span>' +
          '<span class="item-title">' + curso.title + '</span>' +
          '<span class="item-duration"><i class="fas fa-clock"></i> ' + curso.duration + '</span>';
        item.addEventListener('click', function () {
          window.location.href = 'detalle.html';
        });
        dropdown.appendChild(item);
      });

      dropdown.classList.add('active');
    }

    input.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        renderDropdown(input.value.trim());
      }, 150);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
      }
    });

    document.addEventListener('click', function (e) {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }

  /* ============================================
     HAMBURGER MENU
     ============================================ */
  function initHamburger() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');
    var navbarCenter = document.querySelector('.navbar-center');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      if (navbarCenter) navbarCenter.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        if (navbarCenter) navbarCenter.classList.remove('active');
      });
    });
  }

  /* ============================================
     CURSOS — REAL-TIME FILTER
     ============================================ */
  function initCursos() {
    var currentCategory = 'todos';
    var currentCredential = 'todos';
    var currentSearchTerm = '';
    var isFullCatalog = document.body.dataset.catalog === 'full';
    var showAllCourses = isFullCatalog;
    var requestedCategory = new URLSearchParams(window.location.search).get('categoria');
    var requestedCredential = new URLSearchParams(window.location.search).get('respaldo');

    if (requestedCategory && cursosData.some(function (course) { return course.category === requestedCategory; })) {
      currentCategory = requestedCategory;
    }
    if (requestedCredential && cursosData.some(function (course) { return course.credential === requestedCredential; })) {
      currentCredential = requestedCredential;
    }

    function renderCursos() {
      var grid = document.getElementById('cursosGrid');
      if (!grid) return;
      grid.innerHTML = '';

      var byCategory = currentCategory === 'todos'
        ? cursosData
        : cursosData.filter(function (c) { return c.category === currentCategory; });
      var byFilters = currentCredential === 'todos'
        ? byCategory
        : byCategory.filter(function (c) { return c.credential === currentCredential; });

      var filtered = currentSearchTerm
        ? byFilters.filter(function (c) {
            var term = currentSearchTerm;
            return c.title.toLowerCase().indexOf(term) !== -1 ||
              getCategoryLabel(c.category).toLowerCase().indexOf(term) !== -1 ||
              (c.credential && getCredentialLabel(c.credential).toLowerCase().indexOf(term) !== -1) ||
              c.shortDesc.toLowerCase().indexOf(term) !== -1 ||
              c.audience.toLowerCase().indexOf(term) !== -1;
          })
        : byFilters;

      if (filtered.length === 0) {
        grid.innerHTML = '<div class="cursos-empty">No se encontraron cursos con los filtros seleccionados.</div>';
        var emptyShowMore = document.getElementById('cursosShowMore');
        if (emptyShowMore) emptyShowMore.parentElement.hidden = true;
        return;
      }

      var visibleCourses = showAllCourses ? filtered : filtered.slice(0, 9);
      var showMoreContainer = document.querySelector('.cursos-more');
      if (showMoreContainer) {
        showMoreContainer.hidden = isFullCatalog || showAllCourses || filtered.length <= 9;
      }
      visibleCourses.forEach(function (curso) {
        var card = document.createElement('a');
        var isStpsCourse = curso.credential === 'stps';
        var isConocerCourse = curso.category === 'conocer';
        var credentialDetails = isStpsCourse
          ? '<div class="curso-credential-details">' +
              '<p>Capacitación con validez oficial</p>' +
              '<img src="assets/images/certifications/stps-logo.png" alt="Secretaría del Trabajo y Previsión Social" class="curso-credential-logo">' +
            '</div>'
          : isConocerCourse
            ? '<div class="curso-credential-details curso-credential-details-conocer">' +
                '<p>Certificación de competencias laborales</p>' +
                '<img src="assets/images/certifications/conocer-logo.png" alt="Red CONOCER" class="curso-credential-logo curso-credential-logo-conocer">' +
              '</div>'
            : '';
        var courseImage = isConocerCourse
          ? ''
          : '<img src="' + curso.image + '" alt="' + curso.title + '" class="curso-image" loading="lazy">';

        card.className = 'curso-card' + (isStpsCourse ? ' curso-card-stps' : '') + (isConocerCourse ? ' curso-card-conocer' : '');
        card.href = 'detalle.html';
        card.dataset.category = curso.category;
        if (curso.credential) card.dataset.credential = curso.credential;
        if (!prefersReducedMotion) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }

        card.innerHTML =
          courseImage +
          '<div class="curso-content">' +
            '<span class="curso-category">' + getCategoryLabel(curso.category) + '</span>' +
            credentialDetails +
            '<h3 class="curso-title">' + curso.title + '</h3>' +
            '<p class="curso-desc">' + curso.shortDesc + '</p>' +
            '<div class="curso-meta">' +
              '<span><i class="fas fa-clock"></i>' + curso.duration + '</span>' +
              '<span class="curso-audience"><i class="far fa-user-tie"></i>' + curso.audience + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="curso-footer">' +
            '<span class="curso-btn">Ver curso <i class="fas fa-arrow-right"></i></span>' +
          '</div>';

        grid.appendChild(card);

        if (!prefersReducedMotion) {
          requestAnimationFrame(function () {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        }
      });
    }

    var searchInput = document.getElementById('cursosSearchInput');
    var searchBtn = document.getElementById('cursosSearchBtn');
    var chipClear = document.getElementById('chipClear');

    if (currentCategory !== 'todos') {
      var selectedChip = document.querySelector('.chip[data-category="' + currentCategory + '"]');
      if (selectedChip) selectedChip.classList.add('active');
    }
    if (currentCredential !== 'todos') {
      var selectedCredentialChip = document.querySelector('.chip[data-credential="' + currentCredential + '"]');
      if (selectedCredentialChip) selectedCredentialChip.classList.add('active');
    }

    if (searchInput) {
      var inputTimer = null;
      searchInput.addEventListener('input', function () {
        clearTimeout(inputTimer);
        inputTimer = setTimeout(function () {
          currentSearchTerm = searchInput.value.trim().toLowerCase();
          currentCategory = 'todos';
          currentCredential = 'todos';
          showAllCourses = isFullCatalog;
          document.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
          renderCursos();
        }, 100);
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', function () {
        if (searchInput) {
          currentSearchTerm = searchInput.value.trim().toLowerCase();
          currentCategory = 'todos';
          currentCredential = 'todos';
          showAllCourses = isFullCatalog;
          document.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
          renderCursos();
        }
      });
    }

    document.querySelectorAll('.chip[data-category]').forEach(function (chip) {
      chip.addEventListener('click', function () {
        document.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        currentCategory = chip.dataset.category;
        currentCredential = 'todos';
        if (searchInput) searchInput.value = '';
        currentSearchTerm = '';
        showAllCourses = isFullCatalog;
        renderCursos();
      });
    });

    document.querySelectorAll('.chip[data-credential]').forEach(function (chip) {
      chip.addEventListener('click', function () {
        document.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        currentCategory = 'todos';
        currentCredential = chip.dataset.credential;
        if (searchInput) searchInput.value = '';
        currentSearchTerm = '';
        showAllCourses = isFullCatalog;
        renderCursos();
      });
    });

    if (chipClear) {
      chipClear.addEventListener('click', function () {
        document.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
        currentCategory = 'todos';
        currentCredential = 'todos';
        if (searchInput) searchInput.value = '';
        currentSearchTerm = '';
        showAllCourses = isFullCatalog;
        renderCursos();
      });
    }

    renderCursos();
  }

  /* ============================================
     FAQ ACCORDION
     ============================================ */
  function initFaqAccordion() {
    var items = document.querySelectorAll('.faq-item');

    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        items.forEach(function (otherItem) {
          if (otherItem !== item) otherItem.open = false;
        });
      });
    });
  }

  /* ============================================
     RESOURCE MODAL
     ============================================ */
  function initResourceModal() {
    var triggers = document.querySelectorAll('.guia-card-link[data-resource-title]');
    var modal = document.getElementById('resourceModal');
    var title = document.getElementById('resourceModalTitle');
    var content = document.getElementById('resourceModalContent');
    var close = modal && modal.querySelector('.resource-modal-close');
    var trigger = null;

    if (!triggers.length || !modal || !title || !content || !close) return;

    triggers.forEach(function (item) {
      item.addEventListener('click', function () {
        trigger = item;
        title.textContent = item.dataset.resourceTitle;
        content.textContent = item.dataset.resourceContent;
        modal.showModal();
      });
    });

    close.addEventListener('click', function () { modal.close(); });
    modal.addEventListener('click', function (event) {
      if (event.target === modal) modal.close();
    });
    modal.addEventListener('close', function () {
      if (trigger) trigger.focus();
    });
  }

  /* ============================================
     MICRO-INTERACCIONES
     ============================================ */
  function initMicroInteractions() {
    var buttons = document.querySelectorAll(
      '.btn-primary, .btn-secondary, .curso-btn, .cert-card-btn, ' +
      '.guia-card-link, .cursos-search-btn, .footer-card-btn, ' +
      '.parallax-btn-primary, .parallax-btn-secondary, .chip, .chip-clear, ' +
      '.navbar-cotizar, .nav-cotizar'
    );
    buttons.forEach(function (btn) {
      btn.addEventListener('mousedown', function () {
        this.style.transform = 'scale(0.96)';
      });
      btn.addEventListener('mouseup', function () {
        this.style.transform = '';
      });
      btn.addEventListener('mouseleave', function () {
        this.style.transform = '';
      });
    });
  }

  /* ============================================
     INIT ALL
     ============================================ */
  document.addEventListener('DOMContentLoaded', function () {
    initHamburger();
    initCursos();
    initFaqAccordion();
    initResourceModal();
    initNavbarSearch();
    initMicroInteractions();
  });

})();
