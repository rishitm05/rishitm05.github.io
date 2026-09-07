/* ==========================================================================
   app.js — Interactive behaviour for Rishit Madireddy's Portfolio
   Swiss Editorial Design & Dynamic Content Hydration
   ========================================================================== */

(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ── 1. Populate Profile & About Section ─────────────────────── */
  function populateProfile() {
    if (!window.DATA) return;
    const { profile, education } = DATA;

    // Hero
    $('#hero-name').textContent = profile.name;
    $('#hero-tagline').textContent = profile.tagline;

    // About
    $('#about-lead').textContent = profile.aboutLead;
    $('#about-body').textContent = profile.aboutBody;

    // Education
    $('#edu-degree').textContent = `${education.degree}, ${education.minor}`;
    $('#edu-institution').textContent = education.institution;
    $('#edu-period').textContent = education.period;
    $('#edu-grade').innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${education.grade}`;
    $('#edu-scholarship').innerHTML = `<i class="fa-solid fa-award"></i> ${education.scholarship}`;

    // Modules
    const modulesContainer = $('#modules-list');
    modulesContainer.innerHTML = '';
    education.modules.forEach(mod => {
      const pill = document.createElement('span');
      pill.className = 'module-pill';
      pill.textContent = mod;
      modulesContainer.appendChild(pill);
    });

    // Check if user has uploaded a profile photo
    const profileImgPath = 'images/profile/profile.jpg';
    const imgCheck = new Image();
    imgCheck.src = profileImgPath;
    imgCheck.onload = function() {
      const container = $('#profile-container');
      const placeholder = $('#profile-placeholder');
      if (placeholder) placeholder.remove();

      const img = document.createElement('img');
      img.src = profileImgPath;
      img.alt = `${profile.name} - Profile`;
      container.insertBefore(img, container.firstChild);
    };
  }

  /* ── 2. Populate Experience Section ─────────────────────────── */
  function populateExperience() {
    if (!window.DATA) return;
    const container = $('#experience-container');
    container.innerHTML = '';

    DATA.experience.forEach((exp, idx) => {
      const card = document.createElement('div');
      card.className = `exp-card reveal delay-${(idx % 3) + 1}`;

      const bulletsHTML = exp.bullets
        .map(b => `<li class="exp-bullet">${b}</li>`)
        .join('');

      const skillsHTML = exp.skills
        .map(s => `<span class="pill-chip">${s}</span>`)
        .join('');

      card.innerHTML = `
        <div>
          <div class="exp-card-header">
            <div>
              <h4 class="item-h3">${exp.title}</h4>
              <p class="exp-card-company">${exp.company}</p>
            </div>
            <div class="exp-card-meta">
              <span class="mono-label" style="color: var(--accent);">${exp.period}</span>
              <span class="mono-label" style="font-size: 10.5px;">${exp.location}</span>
            </div>
          </div>
          <ul class="exp-bullets">
            ${bulletsHTML}
          </ul>
        </div>
        <div class="exp-skills-row">
          <span class="mono-label" style="font-size: 10px; margin-right: 4px; color: var(--faint);">KEY TOOLS:</span>
          ${skillsHTML}
        </div>
      `;

      container.appendChild(card);
    });
  }

  /* ── 3. Populate Projects Section (Amit's Card Style) ────────── */
  function populateProjects() {
    if (!window.DATA) return;
    const container = $('#projects-container');
    container.innerHTML = '';

    DATA.projects.forEach((proj, idx) => {
      const card = document.createElement('article');
      card.className = `project-card reveal delay-${(idx % 3) + 1}`;
      card.dataset.id = proj.id;

      // Project Image or Technical Placeholder
      const imageContainer = `
        <div class="project-card-img-wrap" id="img-wrap-${proj.id}">
          <div class="project-placeholder">
            <i class="${proj.iconClass}"></i>
            <span>${proj.category.toUpperCase()}</span>
          </div>
        </div>
      `;

      // Top Bullets preview
      const bulletsHTML = proj.bullets
        .slice(0, 2)
        .map(b => `<li>${b}</li>`)
        .join('');

      // Skills Bar
      const skillsHTML = proj.skills
        .slice(0, 4)
        .map(s => `<span class="pill-chip">${s}</span>`)
        .join('');

      card.innerHTML = `
        ${imageContainer}
        <div class="project-card-body">
          <div>
            <div class="project-card-header">
              <span class="mono-accent" style="font-size: 10.5px;">${proj.category}</span>
              <h3 class="project-card-title">${proj.title}</h3>
              <span class="project-card-date">${proj.date}</span>
            </div>
            <p class="project-card-desc">${proj.shortDesc}</p>
            <ul class="project-card-bullets">
              ${bulletsHTML}
            </ul>
          </div>
          <div style="margin-top: 10px;">
            <span class="mono-label" style="font-size: 10.5px; color: var(--accent); font-weight: 700;">
              CLICK FOR FULL TECHNICAL DETAILS &rarr;
            </span>
          </div>
        </div>
        <div class="project-card-skills-bar ${proj.barClass}">
          ${skillsHTML}
        </div>
      `;

      // Check if image exists on disk/server
      if (proj.image) {
        const testImg = new Image();
        testImg.src = proj.image;
        testImg.onload = function() {
          const wrap = $(`#img-wrap-${proj.id}`);
          if (wrap) {
            wrap.innerHTML = `<img src="${proj.image}" alt="${proj.title}">`;
          }
        };
      }

      // Click to open modal
      card.addEventListener('click', () => openModal(proj));

      container.appendChild(card);
    });
  }

  /* ── 4. Populate Skills Section (4-column Grid) ──────────────── */
  function populateSkills() {
    if (!window.DATA) return;
    const container = $('#skills-container');
    container.innerHTML = '';

    DATA.skillsCategories.forEach((cat, idx) => {
      const box = document.createElement('div');
      box.className = `skills-box reveal delay-${(idx % 3) + 1}`;

      const chipsHTML = cat.skills
        .map(skill => `<span class="pill-chip">${skill}</span>`)
        .join('');

      box.innerHTML = `
        <h3 class="skills-box-title">${cat.category}</h3>
        <div class="skills-box-chips">
          ${chipsHTML}
        </div>
      `;

      container.appendChild(box);
    });
  }

  /* ── 5. Modal System ────────────────────────────────────────── */
  function openModal(project) {
    const overlay = $('#project-modal-overlay');

    $('#modal-project-category').textContent = project.category;
    $('#modal-project-title').textContent = project.title;
    $('#modal-project-date').textContent = project.date;
    $('#modal-project-desc').textContent = project.shortDesc;

    const bulletsList = $('#modal-project-bullets');
    bulletsList.innerHTML = project.bullets
      .map(b => `<li class="exp-bullet">${b}</li>`)
      .join('');

    const skillsContainer = $('#modal-project-skills');
    skillsContainer.innerHTML = project.skills
      .map(s => `<span class="pill-chip" style="background: rgba(23, 21, 15, 0.05); font-weight: 600;">${s}</span>`)
      .join('');

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    void overlay.offsetWidth; // Trigger reflow
    overlay.classList.add('open');
  }

  function closeModal() {
    const overlay = $('#project-modal-overlay');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      overlay.hidden = true;
    }, 200);
  }

  function initModal() {
    $('#modal-close-btn').addEventListener('click', closeModal);
    $('#project-modal-overlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ── 6. Scroll Reveal Observer ──────────────────────────────── */
  function initScrollReveal() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    $$('.reveal').forEach(el => observer.observe(el));

    // Fallback: force active after 1.5s in case user is already scrolled
    setTimeout(() => {
      $$('.reveal:not(.active)').forEach(el => el.classList.add('active'));
    }, 1500);
  }

  /* ── 7. Active Nav Highlighting ─────────────────────────────── */
  function initNavObserver() {
    const sections = $$('section[id]');
    const navLinks = $$('.jump-pill');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(s => observer.observe(s));
  }

  /* ── 8. Copy Email to Clipboard ─────────────────────────────── */
  function initCopyEmail() {
    const btn = $('#copy-email-btn');
    const toast = $('#copy-toast');
    if (!btn || !toast) return;

    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = DATA.profile.email;
      try {
        await navigator.clipboard.writeText(email);
      } catch (err) {
        const ta = document.createElement('textarea');
        ta.value = email;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }

      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2400);
    });
  }

  /* ── Bootstrapping ──────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    populateProfile();
    populateExperience();
    populateProjects();
    populateSkills();
    initModal();
    initScrollReveal();
    initNavObserver();
    initCopyEmail();

    // Footer Year
    const yearEl = $('#footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

})();
