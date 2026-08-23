/* ================================================================
   app.js — Interactive behaviour for the portfolio
   ================================================================ */

(function () {
  'use strict';

  /* ── Helpers ────────────────────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ── Initialise Lucide icons ────────────────────────────────── */
  function initIcons() {
    if (window.lucide) {
      lucide.createIcons();
    } else {
      // Retry once after a short delay if the CDN script hasn't loaded yet
      setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 500);
    }
  }

  /* ── Theme ──────────────────────────────────────────────────── */
  function initTheme() {
    const toggle = $('#theme-toggle');
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', theme);

    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      // Re-create icons so the correct one shows
      if (window.lucide) lucide.createIcons();
    });
  }

  /* ── Mobile Drawer ──────────────────────────────────────────── */
  function initDrawer() {
    const hamburger = $('#nav-hamburger');
    const drawer    = $('#drawer');
    const overlay   = $('#drawer-overlay');
    const closeBtn  = $('#drawer-close');

    function open()  { drawer.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { drawer.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; }

    hamburger.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);

    $$('.drawer__link').forEach(link => link.addEventListener('click', close));
  }

  /* ── Populate Hero ──────────────────────────────────────────── */
  function populateHero() {
    const { name, disciplines, about } = DATA.profile;

    $('#hero-name').textContent = name;
    $('#hero-summary').textContent = about;

    const container = $('#hero-disciplines');
    disciplines.forEach(d => {
      const tag = document.createElement('span');
      tag.className = 'hero__discipline-tag';
      tag.textContent = d;
      container.appendChild(tag);
    });
  }

  /* ── Populate About & Education ─────────────────────────────── */
  function populateAbout() {
    $('#about-text').textContent = DATA.profile.about;

    const edu = DATA.education;
    $('#edu-year').textContent        = edu.year;
    $('#edu-degree').textContent      = edu.degree;
    $('#edu-minor').textContent       = edu.minor;
    $('#edu-institution').textContent = edu.institution;
    $('#edu-period').textContent      = edu.period;
    $('#edu-grade').textContent       = edu.grade;
    $('#edu-scholarship').textContent = edu.scholarship;

    const modulesList = $('#modules-list');
    edu.modules.forEach(m => {
      const li = document.createElement('li');
      li.className = 'about__module-tag';
      li.textContent = m;
      modulesList.appendChild(li);
    });
  }

  /* ── Populate Experience ────────────────────────────────────── */
  function populateExperience() {
    const timeline = $('#experience-timeline');

    DATA.experience.forEach(exp => {
      const card = document.createElement('div');
      card.className = 'exp-card reveal';

      const locationLine = exp.division
        ? `${exp.company} · ${exp.division} · ${exp.location}`
        : `${exp.company} · ${exp.location}`;

      card.innerHTML = `
        <div class="exp-card__header">
          <h3 class="exp-card__title">${exp.title}</h3>
          <span class="exp-card__period">${exp.period}</span>
        </div>
        <p class="exp-card__company">${locationLine}</p>
        <div class="exp-card__highlights">
          ${exp.highlights.map(h => `<p class="exp-card__highlight">${h}</p>`).join('')}
        </div>
      `;

      timeline.appendChild(card);
    });
  }

  /* ── Populate Projects ──────────────────────────────────────── */
  let activeFilter = 'All';

  function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.dataset.category = project.category;
    card.dataset.id = project.id;

    // Limit displayed tags to keep the card compact
    const tagsHTML = project.technologies
      .slice(0, 5)
      .map(t => `<span class="project-card__tag">${t}</span>`)
      .join('');

    const extraCount = project.technologies.length - 5;
    const extraTag = extraCount > 0
      ? `<span class="project-card__tag">+${extraCount}</span>`
      : '';

    card.innerHTML = `
      <span class="project-card__category">${project.category}</span>
      <h3 class="project-card__title">${project.title}</h3>
      <span class="project-card__period">${project.period}</span>
      <p class="project-card__summary">${project.summary}</p>
      <div class="project-card__tags">${tagsHTML}${extraTag}</div>
      <div class="project-card__actions">
        ${project.driveDocs ? `<a href="${project.driveDocs}" class="project-card__action" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"><i data-lucide="folder-open" class="icon icon--xs"></i>Drive</a>` : ''}
        ${project.github ? `<a href="${project.github}" class="project-card__action" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"><i data-lucide="github" class="icon icon--xs"></i>GitHub</a>` : ''}
      </div>
    `;

    card.addEventListener('click', () => openModal(project));

    return card;
  }

  function renderProjects(searchTerm = '') {
    const grid = $('#projects-grid');
    const emptyMsg = $('#projects-empty');
    grid.innerHTML = '';

    const term = searchTerm.toLowerCase().trim();

    const filtered = DATA.projects.filter(p => {
      const matchesCategory = activeFilter === 'All' || p.category === activeFilter;
      const matchesSearch = !term ||
        p.title.toLowerCase().includes(term) ||
        p.summary.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.technologies.some(t => t.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      emptyMsg.hidden = false;
    } else {
      emptyMsg.hidden = true;
      filtered.forEach(p => grid.appendChild(createProjectCard(p)));
    }

    // Re-create Lucide icons for newly injected HTML
    if (window.lucide) lucide.createIcons();

    // Trigger reveal animation on new cards
    requestAnimationFrame(() => {
      $$('.project-card.reveal', grid).forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 60);
      });
    });
  }

  function initProjectFilters() {
    const container = $('#project-filters');
    DATA.categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = cat;
        renderProjects($('#project-search').value);
      });
      container.appendChild(btn);
    });
  }

  function initProjectSearch() {
    const input = $('#project-search');
    let debounce;
    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => renderProjects(input.value), 200);
    });
  }

  /* ── Modal ──────────────────────────────────────────────────── */
  function openModal(project) {
    const overlay = $('#modal-overlay');

    $('#modal-category').textContent = project.category;
    $('#modal-title').textContent    = project.title;
    $('#modal-period').textContent   = project.period;
    $('#modal-summary').textContent  = project.summary;

    const highlights = $('#modal-highlights');
    highlights.innerHTML = '';
    project.highlights.forEach(h => {
      const li = document.createElement('li');
      li.className = 'modal__highlight';
      li.textContent = h;
      highlights.appendChild(li);
    });

    const tags = $('#modal-tags');
    tags.innerHTML = '';
    project.technologies.forEach(t => {
      const span = document.createElement('span');
      span.className = 'modal__tag';
      span.textContent = t;
      tags.appendChild(span);
    });

    const actions = $('#modal-actions');
    actions.innerHTML = '';
    if (project.driveDocs) {
      actions.innerHTML += `<a href="${project.driveDocs}" class="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer"><i data-lucide="folder-open" class="icon icon--sm"></i>Project Files</a>`;
    }
    if (project.github) {
      actions.innerHTML += `<a href="${project.github}" class="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer"><i data-lucide="github" class="icon icon--sm"></i>GitHub</a>`;
    }

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    // Force reflow for animation
    void overlay.offsetWidth;
    overlay.classList.add('open');

    if (window.lucide) lucide.createIcons();
  }

  function closeModal() {
    const overlay = $('#modal-overlay');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { overlay.hidden = true; }, 200);
  }

  function initModal() {
    $('#modal-close').addEventListener('click', closeModal);
    $('#modal-overlay').addEventListener('click', e => {
      if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ── Populate Skills ────────────────────────────────────────── */
  function populateSkills() {
    const grid = $('#skills-grid');

    Object.entries(DATA.skills).forEach(([groupName, skills]) => {
      const group = document.createElement('div');
      group.className = 'skill-group reveal';
      group.innerHTML = `
        <h3 class="skill-group__title">${groupName}</h3>
        <div class="skill-group__tags">
          ${skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      `;
      grid.appendChild(group);
    });
  }

  /* ── Populate Contact ───────────────────────────────────────── */
  function populateContact() {
    const { email, phone, location, github, linkedin, driveFolder } = DATA.profile;

    $('#contact-email').textContent  = email;
    $('#contact-phone').textContent  = phone;
    $('#contact-location').textContent = location;

    $('#contact-phone-card').href = `tel:${phone.replace(/\s/g, '')}`;

    $('#contact-github').href   = github;
    $('#contact-linkedin').href = linkedin;
    $('#contact-drive').href    = driveFolder;

    // Footer
    $('#footer-year').textContent    = new Date().getFullYear();
    $('#footer-github').href        = github;
    $('#footer-linkedin').href      = linkedin;
  }

  /* ── Copy Email ─────────────────────────────────────────────── */
  function initCopyEmail() {
    const btn   = $('#copy-email-btn');
    const toast = $('#toast');

    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(DATA.profile.email);
      } catch {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = DATA.profile.email;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }

      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    });
  }

  /* ── Active Nav Link ────────────────────────────────────────── */
  function initActiveNav() {
    const sections = $$('section[id]');
    const navLinks = $$('.nav__link');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(s => observer.observe(s));
  }

  /* ── Scroll Reveal ──────────────────────────────────────────── */
  function initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    // Observe all current and future .reveal elements
    function observe() {
      $$('.reveal:not(.visible)').forEach(el => observer.observe(el));
    }

    observe();
    // Re-observe after projects render
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
  }

  /* ── Nav Background on Scroll ───────────────────────────────── */
  function initNavScroll() {
    const nav = $('#nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('nav--scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ── Boot ────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    populateHero();
    populateAbout();
    populateExperience();
    initProjectFilters();
    renderProjects();
    initProjectSearch();
    populateSkills();
    populateContact();
    initModal();
    initCopyEmail();
    initDrawer();
    initActiveNav();
    initNavScroll();
    initReveal();
    initIcons();
  });

})();
