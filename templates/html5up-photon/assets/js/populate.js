/**
 * populate.js — Photon template
 * Reads window.PROFILE (from data.js) and fills in all portfolio content.
 */
document.addEventListener('DOMContentLoaded', function () {
  var p = PROFILE;

  // ── Page metadata ──────────────────────────────────────────────────────────
  document.title = p.name + ' | Portfolio';

  // ── Hero ──────────────────────────────────────────────────────────────────
  document.getElementById('hero-name').innerHTML =
    'Hi, I\'m <strong>' + p.name.split(' ')[0] + '</strong>.';
  document.getElementById('hero-subtitle').textContent = p.title;
  document.getElementById('hero-tagline').textContent  = p.tagline;

  // ── About (#one) ──────────────────────────────────────────────────────────
  document.getElementById('about-text').textContent = p.about;

  document.getElementById('languages-list').innerHTML = p.languages.map(function (l) {
    return '<span class="lang-badge"><strong>' + l.name + '</strong> ' + l.level + '</span>';
  }).join('');

  // ── Skills (#two) ─────────────────────────────────────────────────────────
  document.getElementById('skills-icons').innerHTML = p.skills.map(function (s, i) {
    return '<li><span class="icon solid style' + ((i % 6) + 1) + ' major ' + s.icon + '"></span></li>';
  }).join('');

  document.getElementById('skills-text').innerHTML = p.skills.map(function (s) {
    return '<div class="skill-item"><strong>' + s.label + '</strong><p>' + s.description + '</p></div>';
  }).join('');

  // ── Projects (#three) ─────────────────────────────────────────────────────
  var styleNames = ['style1', 'style2', 'style3', 'style4', 'style5', 'style6'];
  document.getElementById('projects-grid').innerHTML = p.projects.map(function (proj, i) {
    var techHtml = proj.tech.map(function (t) {
      return '<span class="skill-tag">' + t + '</span>';
    }).join('');

    var linkHtml = proj.link && proj.link !== '#'
      ? '<a href="' + proj.link + '" class="button" target="_blank" rel="noopener">View Project</a>'
      : '<span class="button disabled">Internal Project</span>';

    return (
      '<div class="col-4 col-12-medium proj-card">' +
        '<span class="icon solid ' + styleNames[i % 6] + ' major ' + proj.icon + '"></span>' +
        '<div class="proj-category">' + proj.category + '</div>' +
        '<h3>' + proj.title + '</h3>' +
        '<p>' + proj.description + '</p>' +
        '<div class="skill-tags">' + techHtml + '</div>' +
        '<ul class="actions special" style="margin-top:1em;">' +
          '<li>' + linkHtml + '</li>' +
        '</ul>' +
      '</div>'
    );
  }).join('');

  // ── Experience (#four) ────────────────────────────────────────────────────
  document.getElementById('experience-cards').innerHTML = p.experience.map(function (exp) {
    var rolesHtml = exp.roles.map(function (r) {
      return (
        '<div class="exp-role">' +
          '<strong>' + r.title + '</strong>' +
          '<span class="exp-period">' + r.period + '</span>' +
        '</div>'
      );
    }).join('');

    var skillsHtml = exp.roles[0].skills
      ? exp.roles[0].skills.map(function (s) { return '<span class="skill-tag">' + s + '</span>'; }).join('')
      : '';

    return (
      '<div class="col-6 col-12-medium">' +
        '<h3>' + exp.company + '</h3>' +
        '<p class="exp-location">' + exp.location + ' &mdash; ' + exp.duration + '</p>' +
        '<div class="exp-roles">' + rolesHtml + '</div>' +
        '<p class="exp-desc">' + exp.roles[0].description + '</p>' +
        '<div class="skill-tags">' + skillsHtml + '</div>' +
      '</div>'
    );
  }).join('');

  // ── Education & Certs (#five) ─────────────────────────────────────────────
  document.getElementById('education-list').innerHTML = p.education.map(function (e) {
    return (
      '<div class="edu-row">' +
        '<div class="edu-left">' +
          '<strong>' + e.degree + '</strong>' +
          '<span>' + e.school + '</span>' +
        '</div>' +
        '<div class="edu-right">' +
          '<span class="edu-period">' + e.period + '</span>' +
          (e.note ? '<span class="edu-note">' + e.note + '</span>' : '') +
        '</div>' +
      '</div>'
    );
  }).join('');

  document.getElementById('certs-list').innerHTML = p.certifications.map(function (c) {
    return (
      '<div class="cert-row">' +
        '<strong>' + c.name + '</strong>' +
        '<span>' + c.issuer + ' &mdash; ' + c.date + '</span>' +
      '</div>'
    );
  }).join('');

  // ── Links ─────────────────────────────────────────────────────────────────
  var ctaBtn   = document.getElementById('cta-linkedin');
  var liFooter = document.getElementById('footer-linkedin');
  var ghFooter = document.getElementById('footer-github');
  var emFooter = document.getElementById('footer-email');

  if (ctaBtn   && p.linkedin !== '#') ctaBtn.href   = p.linkedin;
  if (liFooter && p.linkedin !== '#') liFooter.href = p.linkedin;
  if (ghFooter && p.github   !== '#') ghFooter.href = p.github;
  if (emFooter && p.email    !== '#') emFooter.href = p.email;
});
