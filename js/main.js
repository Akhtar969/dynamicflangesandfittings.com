/* Shared site script: icons, product cards, menu, carousel, enquiry form */
(function () {
  var SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' +
    '<symbol id="fl" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="currentColor" opacity=".92"/><circle cx="50" cy="50" r="30" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/><circle cx="50" cy="50" r="14" fill="var(--bg)"/><g fill="var(--bg)"><circle cx="50" cy="12" r="4.5"/><circle cx="50" cy="88" r="4.5"/><circle cx="12" cy="50" r="4.5"/><circle cx="88" cy="50" r="4.5"/><circle cx="23" cy="23" r="4.5"/><circle cx="77" cy="77" r="4.5"/><circle cx="77" cy="23" r="4.5"/><circle cx="23" cy="77" r="4.5"/></g></symbol>' +
    '<symbol id="bl" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="currentColor" opacity=".92"/><circle cx="50" cy="50" r="30" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/><g fill="var(--bg)"><circle cx="50" cy="12" r="4.5"/><circle cx="50" cy="88" r="4.5"/><circle cx="12" cy="50" r="4.5"/><circle cx="88" cy="50" r="4.5"/><circle cx="23" cy="23" r="4.5"/><circle cx="77" cy="77" r="4.5"/><circle cx="77" cy="23" r="4.5"/><circle cx="23" cy="77" r="4.5"/></g></symbol>' +
    '<symbol id="wn" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="currentColor" opacity=".92"/><circle cx="50" cy="50" r="26" fill="#fff" fill-opacity=".25"/><circle cx="50" cy="50" r="14" fill="var(--bg)"/><g fill="var(--bg)"><circle cx="50" cy="11" r="4"/><circle cx="50" cy="89" r="4"/><circle cx="11" cy="50" r="4"/><circle cx="89" cy="50" r="4"/><circle cx="22" cy="22" r="4"/><circle cx="78" cy="78" r="4"/><circle cx="78" cy="22" r="4"/><circle cx="22" cy="78" r="4"/></g></symbol>' +
    '<symbol id="pl" viewBox="0 0 100 100"><rect x="8" y="8" width="84" height="84" rx="14" fill="currentColor" opacity=".92"/><circle cx="50" cy="50" r="18" fill="var(--bg)"/><g fill="var(--bg)"><circle cx="22" cy="22" r="5"/><circle cx="78" cy="22" r="5"/><circle cx="22" cy="78" r="5"/><circle cx="78" cy="78" r="5"/></g></symbol>' +
    '<symbol id="el" viewBox="0 0 100 100"><path d="M18 14h28v34a14 14 0 0 0 14 14h26v28H60A42 42 0 0 1 18 48z" fill="currentColor" opacity=".9"/></symbol>' +
    '<symbol id="te" viewBox="0 0 100 100"><path d="M8 28h84v28H64v36H36V56H8z" fill="currentColor" opacity=".9"/></symbol>' +
    '<symbol id="re" viewBox="0 0 100 100"><path d="M34 8h32v22l18 14v48H16V44l18-14z" fill="currentColor" opacity=".9"/></symbol>' +
    '<symbol id="ca" viewBox="0 0 100 100"><path d="M16 92V46C16 24 32 10 50 10s34 14 34 36v46z" fill="currentColor" opacity=".9"/></symbol>' +
    '<symbol id="pi" viewBox="0 0 100 100"><rect x="6" y="30" width="88" height="22" rx="4" fill="currentColor" opacity=".9"/><rect x="6" y="58" width="88" height="22" rx="4" fill="currentColor" opacity=".7"/></symbol></svg>';
  document.body.insertAdjacentHTML('afterbegin', SPRITE);

  var $ = function (id) { return document.getElementById(id) };

  function catCard(k) {
    var c = C[k];
    return '<a class="cc" href="' + c.page + '"><div class="top"><span class="cnt">' + c.items.length + ' types</span><svg viewBox="0 0 100 100" aria-hidden="true"><use href="#' + c.icon + '"/></svg></div>' +
      '<div class="bd"><h3>' + c.name + '</h3><p>' + c.blurb + '</p><div class="chips">' +
      c.items.map(function (i) { return '<span>' + i[0] + '</span>' }).join('') +
      '</div><div class="go">View ' + c.name + ' <i>→</i></div></div></a>';
  }
  function itemCard(i) {
    return '<div class="pc"><div class="ic"><svg viewBox="0 0 100 100" aria-hidden="true"><use href="#' + i[1] + '"/></svg></div>' +
      '<div class="tag">' + i[2] + '</div><h3>' + i[0] + '</h3><p>' + i[3] + '</p>' +
      '<a class="btn s" href="contact.html?p=' + encodeURIComponent(i[0]) + '">Request Quote</a></div>';
  }

  /* Home + Products: 3 category cards */
  ['home-products', 'all-products'].forEach(function (id) {
    if ($(id) && !$(id).children.length) $(id).innerHTML = KEYS.map(catCard).join('');
  });

  /* Flanges / Fittings / Pipes pages (body has data-cat) */
  var k = document.body.dataset.cat;
  if (k && C[k] && $('cat')) {
    var c = C[k];
    $('cat').innerHTML =
      '<div class="crumb"><a href="index.html">Home</a> › <a href="products.html">Products</a> › ' + c.name + '</div>' +
      '<a class="back" href="products.html">← All products</a>' +
      '<div class="phead"><div class="ic2"><svg viewBox="0 0 100 100" aria-hidden="true"><use href="#' + c.icon + '"/></svg></div><h1>' + c.name + '</h1></div>' +
      '<p class="sub">' + c.intro + '</p><div class="pgrid">' + c.items.map(itemCard).join('') + '</div>' +
      '<p class="note" style="margin-top:28px">Sizes, standards, pressure class and material are confirmed per order. Share your drawing or specification with your enquiry.</p>';
  }

  /* Mobile menu */
  if ($('mb')) $('mb').onclick = function () { $('nav').classList.toggle('open') };

  /* Carousel (home only) */
  var c0 = $('car');
  if (c0) {
    var s = c0.querySelectorAll('.sl'), d = c0.querySelector('.dots'), i = 0, t;
    s.forEach(function (_, n) { var b = document.createElement('button'); b.setAttribute('aria-label', 'Slide ' + (n + 1)); b.onclick = function () { go(n); reset() }; d.appendChild(b) });
    var go = function (n) { i = (n + s.length) % s.length; s.forEach(function (x, q) { x.classList.toggle('on', q === i) }); d.querySelectorAll('button').forEach(function (x, q) { x.classList.toggle('on', q === i) }) };
    var reset = function () { clearInterval(t); if (!matchMedia('(prefers-reduced-motion:reduce)').matches) t = setInterval(function () { go(i + 1) }, 3500) };
    c0.querySelector('.pv').onclick = function () { go(i - 1); reset() };
    c0.querySelector('.nx').onclick = function () { go(i + 1); reset() };
    c0.addEventListener('mouseenter', function () { clearInterval(t) });
    c0.addEventListener('mouseleave', reset);
    go(0); reset();
  }

  /* Enquiry form (contact only) */
  var f = $('f');
  if (f) {
    var sel = $('psel');
    sel.innerHTML = '<option>Not sure / other</option>' + KEYS.map(function (q) {
      return '<optgroup label="' + C[q].name + '">' + C[q].items.map(function (i) { return '<option>' + i[0] + '</option>' }).join('') + '</optgroup>';
    }).join('');
    var p = new URLSearchParams(location.search).get('p');
    if (p) sel.value = p;
    var build = function () {
      var d = new FormData(f);
      return 'Enquiry for Dynamic Flanges and Fittings\nName: ' + d.get('name') + '\nCompany: ' + d.get('company') + '\nPhone: ' + d.get('phone') + '\nEmail: ' + d.get('email') + '\nProduct: ' + d.get('product') + '\nQuantity: ' + d.get('qty') + '\nDetails: ' + d.get('msg');
    };
    var ok = function () {
      var m = $('fmsg');
      if (f.website.value) return false;
      if (!f.checkValidity()) { f.reportValidity(); m.textContent = 'Please fill the required fields correctly.'; return false }
      m.textContent = 'Thank you. Opening your enquiry now.'; return true;
    };
    f.addEventListener('submit', function (e) { e.preventDefault(); if (ok()) window.open('https://wa.me/919892065723?text=' + encodeURIComponent(build()), '_blank', 'noopener') });
    $('mailalt').addEventListener('click', function (e) { e.preventDefault(); if (ok()) location.href = 'mailto:sales@dynamicflangesandfittings.com?subject=' + encodeURIComponent('Flange enquiry') + '&body=' + encodeURIComponent(build()) });
  }
})();
