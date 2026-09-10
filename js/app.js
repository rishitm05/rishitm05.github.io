/* ==========================================================================
   app.js — Interactive behaviour for Rishit Madireddy's Portfolio
   Robust modal, clipboard, and image fallback handler
   ========================================================================== */

(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ── 1. Check Project Images ──────────────────────────────────── */
  function checkProjectImages() {
    if (window.DATA && DATA.projects) {
      DATA.projects.forEach(proj => {
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
      });
    }
  }

  /* ── 2. Project Modal ───────────────────────────────────────── */
  window.openModalById = function(projectId) {
    if (!window.DATA || !DATA.projects) return;
    const project = DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const overlay = $('#project-modal-overlay');

    $('#modal-project-category').textContent = project.category;
    $('#modal-project-title').textContent = project.title;
    
    const subtitleEl = $('#modal-project-subtitle');
    if (project.subtitle) {
      subtitleEl.textContent = project.subtitle;
      subtitleEl.style.display = 'block';
    } else {
      subtitleEl.style.display = 'none';
    }

    $('#modal-project-desc').textContent = project.shortDesc;

    const bulletsList = $('#modal-project-bullets');
    bulletsList.innerHTML = project.bullets
      .map(b => `<li class="exp-bullet">${b}</li>`)
      .join('');

    const skillsContainer = $('#modal-project-skills');
    skillsContainer.innerHTML = project.skills
      .map(s => `<span class="pill-chip pill-chip--blue">${s}</span>`)
      .join('');

    const ghLink = $('#modal-project-github-link');
    if (ghLink) {
      ghLink.href = project.githubUrl || 'https://github.com/rishitm05';
    }

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    void overlay.offsetWidth;
    overlay.classList.add('open');
  };

  function closeModal() {
    const overlay = $('#project-modal-overlay');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      overlay.hidden = true;
    }, 200);
  }

  function initModal() {
    const closeBtn = $('#modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    const overlay = $('#project-modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ── 3. Active Nav Observer ─────────────────────────────────── */
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

  /* ── 4. Copy Email ──────────────────────────────────────────── */
  function initCopyEmail() {
    const btn = $('#copy-email-btn');
    const toast = $('#copy-toast');
    if (!btn || !toast) return;

    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = window.DATA ? DATA.profile.email : 'rmadireddy05@gmail.com';
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
    checkProjectImages();
    initModal();
    initNavObserver();
    initCopyEmail();

    const yearEl = $('#footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

})();
