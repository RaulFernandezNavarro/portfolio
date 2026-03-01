/**
 * populate.js — Spectral template
 * Reads window.PROFILE (from data.js) and fills in all portfolio content.
 */
document.addEventListener('DOMContentLoaded', function () {
  var p = PROFILE;

  // ── Page metadata ──────────────────────────────────────────────────────────
  document.title = p.name + ' | Portfolio';
  document.querySelector('#header h1 a').textContent = p.name.split(' ')[0];

  // ── Banner ─────────────────────────────────────────────────────────────────
  document.getElementById('banner-name').textContent = p.name;
  document.getElementById('banner-subtitle').innerHTML =
    p.title + '<br/><small>' + p.location + '</small>';

  // ── About (#one) ───────────────────────────────────────────────────────────
  document.getElementById('about-text').textContent = p.about;

  // ── Projects (#two) ────────────────────────────────────────────────────────
  var styleNames = ['style1', 'style2', 'style3', 'style1', 'style2'];
  document.getElementById('projects-container').innerHTML = p.projects.map(function (proj, i) {
    var techHtml = proj.tech.map(function (t) {
      return '<span class="skill-pill">' + t + '</span>';
    }).join('');

    var linkHtml = proj.link && proj.link !== '#'
      ? '<a href="' + proj.link + '" class="button small" target="_blank" rel="noopener">View Project</a>'
      : '<span class="button small disabled">Internal</span>';

    return (
      '<div class="project-card">' +
        '<div class="proj-icon-wrap ' + (styleNames[i] || 'style1') + '">' +
          '<span class="icon solid ' + proj.icon + '"></span>' +
        '</div>' +
        '<div class="proj-category">' + proj.category + '</div>' +
        '<h3>' + proj.title + '</h3>' +
        '<p>' + proj.description + '</p>' +
        '<div class="skill-pills">' + techHtml + '</div>' +
        '<div class="proj-link">' + linkHtml + '</div>' +
      '</div>'
    );
  }).join('');

  // ── Skills (#three) ────────────────────────────────────────────────────────
  document.getElementById('skills-container').innerHTML = p.skills.map(function (s) {
    return (
      '<li class="icon solid ' + s.icon + '">' +
        '<h3>' + s.label + '</h3>' +
        '<p>' + s.description + '</p>' +
      '</li>'
    );
  }).join('');

  // ── Experience (#four) ─────────────────────────────────────────────────────
  document.getElementById('experience-container').innerHTML = p.experience.map(function (exp) {
    var rolesHtml = exp.roles.map(function (r) {
      return (
        '<li>' +
          '<strong>' + r.title + '</strong>' +
          ' <span class="exp-period">' + r.period + '</span>' +
        '</li>'
      );
    }).join('');

    var skillsHtml = exp.roles[0].skills
      ? exp.roles[0].skills.map(function (s) { return '<span class="skill-pill">' + s + '</span>'; }).join('')
      : '';

    return (
      '<section class="spotlight">' +
        '<div class="exp-icon-col">' +
          '<span class="icon solid ' + exp.icon + ' exp-icon"></span>' +
        '</div>' +
        '<div class="content">' +
          '<h2>' + exp.company + '<br/><small>' + exp.location + ' &mdash; ' + exp.duration + '</small></h2>' +
          '<ul class="exp-roles">' + rolesHtml + '</ul>' +
          '<p>' + exp.roles[0].description + '</p>' +
          '<div class="skill-pills">' + skillsHtml + '</div>' +
        '</div>' +
      '</section>'
    );
  }).join('');

  // ── Education (#cta) ──────────────────────────────────────────────────────
  document.getElementById('education-list').innerHTML = p.education.slice(0, 3).map(function (e) {
    return (
      '<div class="edu-entry">' +
        '<strong>' + e.degree + '</strong>' +
        '<span>' + e.school + '</span>' +
        '<em>' + e.period + (e.note ? ' · ' + e.note : '') + '</em>' +
      '</div>'
    );
  }).join('');

  // ── Footer links ──────────────────────────────────────────────────────────
  var liEl   = document.getElementById('footer-linkedin');
  var ghEl   = document.getElementById('footer-github');
  var emEl   = document.getElementById('footer-email');
  var ctaBtn = document.getElementById('cta-linkedin');

  if (liEl   && p.linkedin !== '#') liEl.href   = p.linkedin;
  if (ghEl   && p.github   !== '#') ghEl.href   = p.github;
  if (emEl   && p.email    !== '#') emEl.href   = p.email;
  if (ctaBtn && p.linkedin !== '#') ctaBtn.href = p.linkedin;
});
