// Renders one full page per language from content.js. Vite calls this through
// the plugin in vite.config.js for index.html (EN) and ar/index.html (AR).
import { content, SITE_URL, TRACK_URL, SUPPORT_EMAIL, SUPPORT_PHONE } from './content.js'
import { legal, EFFECTIVE, DELETE_SUBJECT } from './legal.js'

export const LEGAL_PAGES = ['privacy', 'terms', 'delete']
const docOf = (lang, page) => legal[lang][page]
const urlOf = (lang, page) => content[lang].path + (page === 'home' ? '' : `${docOf(lang, page).slug}/`)

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

// Screenshot paths. App and tracking shots exist per language; the portal is English-only.
const shotSrc = (shot, lang) => {
  if (shot.startsWith('app/')) return `/img/${shot}-${lang}.webp`
  if (shot.startsWith('tracking')) return `/img/shots/${shot}-${lang}.webp`
  return `/img/shots/${shot}.webp`
}
const SIZES = { phone: [720, 1280], browser: [1600, 1000] }

const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  code: '<rect x="3" y="6" width="18" height="12" rx="3"/><path d="M7 12h.01M10.5 12h.01M14 12h.01M17.5 12h.01"/>',
  boxes: '<path d="M3 8l5-3 5 3v6l-5 3-5-3z"/><path d="M11 13l5-3 5 3v6l-5 3-5-3z"/>',
  live: '<circle cx="12" cy="11" r="3"/><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/>',
  driver: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
  missed: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  kingdom: '<path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/><circle cx="12" cy="12" r="9"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  menu: '<path d="M4 8h16M4 16h16"/>',
}
const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`

const truck = `<svg class="truck" viewBox="0 0 48 28" aria-hidden="true"><path d="M2 4h26v16H2z" fill="currentColor"/><path d="M28 9h10l7 7v4H28z" fill="currentColor"/><path d="M31 11h6l4 4H31z" fill="var(--yellow)"/><circle cx="11" cy="22" r="4" fill="var(--ink)" stroke="var(--paper)" stroke-width="2"/><circle cx="37" cy="22" r="4" fill="var(--ink)" stroke="var(--paper)" stroke-width="2"/></svg>`

const logo = (label) => `<span class="logo" role="img" aria-label="${esc(label)}"></span>`

const frame = (kind, src, alt, { eager = false, cls = '' } = {}) => {
  const [w, h] = SIZES[kind]
  const img = `<img src="${src}" alt="${esc(alt)}" width="${w}" height="${h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`
  if (kind === 'phone') return `<figure class="phone ${cls}"><div class="phone__screen">${img}</div></figure>`
  return `<figure class="browser ${cls}"><div class="browser__bar" aria-hidden="true"><i></i><i></i><i></i><span>portal.shaheene.com</span></div><div class="browser__screen">${img}</div></figure>`
}

const trackForm = (t, id) => `
  <form class="track" action="${TRACK_URL}" method="get" data-track>
    <label class="track__label" for="${id}">${esc(t.track.label)}</label>
    <div class="track__row">
      <input class="track__input" id="${id}" name="ref" inputmode="numeric" autocomplete="off" placeholder="${esc(t.track.placeholder)}" required maxlength="40" dir="ltr">
      <button class="track__btn" type="submit" data-magnetic><span>${esc(t.track.button)}</span>${icon('arrow', 'icon icon--flip')}</button>
    </div>
    <p class="track__hint">${esc(t.track.hint)}</p>
  </form>`

// Legal page body: header band, document tabs, contents list and the text.
function legalPage(lang, page) {
  const L = legal[lang]
  const doc = L[page]
  const tabs = LEGAL_PAGES.map(
    (p) => `<a href="${urlOf(lang, p)}"${p === page ? ' aria-current="page"' : ''}>${esc(L.nav[p])}</a>`,
  ).join('')
  const isDelete = page === 'delete'
  return `
<header class="legal-hero" id="top" data-hero>
  <div class="wrap">
    <p class="eyebrow" data-hero-fade>${esc(L.nav.legal)}</p>
    <h1 class="legal-hero__title">${esc(doc.title)}</h1>
    <p class="legal-hero__lede" data-hero-fade>${esc(doc.lede)}</p>
    ${
      isDelete
        ? `<div class="legal-hero__delete" data-hero-fade>
      <p class="badge">${esc(doc.promise)}</p>
      <p class="legal-hero__app">${esc(doc.app)}</p>
      <a class="btn" href="mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(DELETE_SUBJECT)}" data-magnetic>${esc(doc.cta)}</a>
    </div>`
        : ''
    }
    <p class="legal-hero__meta" data-hero-fade>${esc(L.nav.updated)}: ${esc(EFFECTIVE[lang])}</p>
    <nav class="legal-tabs" aria-label="${esc(L.nav.legal)}">${tabs}</nav>
  </div>
</header>
<div class="wrap legal">
  <nav class="toc" aria-labelledby="toc-title">
    <p class="toc__title" id="toc-title">${esc(L.nav.contents)}</p>
    <ol>${doc.sections.map((s, i) => `<li><a href="#${s.id}"><span class="mono">${String(i + 1).padStart(2, '0')}</span>${esc(s.h)}</a></li>`).join('')}</ol>
  </nav>
  <article class="prose">
    ${doc.sections.map((s, i) => `<section id="${s.id}" data-toc-section><h2><span class="mono">${String(i + 1).padStart(2, '0')}</span>${esc(s.h)}</h2>${s.body}</section>`).join('\n    ')}
  </article>
</div>`
}

export function render(lang, page = 'home') {
  const t = content[lang]
  const other = content[lang === 'en' ? 'ar' : 'en']
  const year = new Date().getFullYear()
  const n = (i) => String(i + 1).padStart(2, '0')
  const home = page === 'home'
  const base = home ? '' : t.path // in-page links point back to the home page from legal pages
  const doc = home ? null : docOf(lang, page)
  const title = home ? t.meta.title : `${doc.title} · ${lang === 'ar' ? 'شاهين' : 'Shaheen'}`
  const description = home ? t.meta.description : doc.lede
  const url = (l) => `${SITE_URL}${urlOf(l, page)}`
  const otherHref = urlOf(other.lang, page)
  const L = legal[lang].nav

  return `<!doctype html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#ffcc02">
<link rel="canonical" href="${url(lang)}">
<link rel="alternate" hreflang="en" href="${url('en')}">
<link rel="alternate" hreflang="ar" href="${url('ar')}">
<link rel="alternate" hreflang="x-default" href="${url('en')}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Shaheen">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url(lang)}">
<meta property="og:image" content="${SITE_URL}/img/og-${lang}.jpg">
<meta property="og:locale" content="${lang === 'ar' ? 'ar_SA' : 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/img/logo-mark.png" as="image">
<script>document.documentElement.classList.add('js')</script>
<script type="module" src="/src/main.js"></script>
</head>
<body data-page="${page}">
<a class="skip" href="#main">${esc(t.skip)}</a>

<header class="nav" data-nav>
  <a class="nav__brand" href="${t.path}" aria-label="Shaheen">${logo('Shaheen')}</a>
  <nav class="nav__links" aria-label="Primary">
    <a href="${base}#route">${esc(t.nav.route)}</a>
    <a href="${base}#promise">${esc(t.nav.promise)}</a>
    <a href="${base}#drivers">${esc(t.nav.drivers)}</a>
    <a href="${base}#faq">${esc(t.nav.faq)}</a>
  </nav>
  <div class="nav__end">
    <a class="nav__lang" href="${otherHref}" hreflang="${other.lang}" lang="${other.lang}" aria-label="${esc(t.nav.switchName)}">${esc(t.nav.switchLabel)}</a>
    <a class="nav__cta" href="${base}#track" data-magnetic>${esc(t.nav.cta)}</a>
    <button class="nav__menu" type="button" aria-expanded="false" aria-controls="sheet" data-menu>${icon('menu')}<span class="sr">${esc(t.nav.menu)}</span></button>
  </div>
</header>

<div class="sheet" id="sheet" hidden data-sheet>
  <nav aria-label="Primary">
    <a href="${base}#route">${esc(t.nav.route)}</a>
    <a href="${base}#promise">${esc(t.nav.promise)}</a>
    <a href="${base}#drivers">${esc(t.nav.drivers)}</a>
    <a href="${base}#faq">${esc(t.nav.faq)}</a>
    <a href="${base}#track">${esc(t.nav.cta)}</a>
    <a href="${otherHref}" hreflang="${other.lang}" lang="${other.lang}">${esc(t.nav.switchLabel)}</a>
  </nav>
</div>

<main id="main">
${
  !home
    ? legalPage(lang, page)
    : `
<section class="hero" id="top" aria-labelledby="hero-title" data-hero>
  <div class="hero__mark" aria-hidden="true"><span class="logo"></span></div>
  <div class="hero__grid wrap">
    <p class="eyebrow hero__eyebrow" data-hero-fade>${esc(t.hero.eyebrow)}</p>
    <h1 class="hero__title" id="hero-title">${t.hero.title.map((l) => `<span class="line"><span>${esc(l)}</span></span>`).join('')}</h1>
    <div class="hero__copy" data-hero-fade>
      <p class="hero__lede">${esc(t.hero.lede)}</p>
      ${trackForm(t, 'ref-hero')}
    </div>
    <aside class="ticket" aria-label="${esc(t.hero.ticket.label)} ${t.hero.ticket.number}" data-ticket>
      <div class="ticket__head">
        <span class="ticket__label">${esc(t.hero.ticket.label)}</span>
        <span class="ticket__no" dir="ltr">#${t.hero.ticket.number}</span>
      </div>
      <p class="ticket__status"><span class="pulse" aria-hidden="true"></span>${esc(t.hero.ticket.status)}</p>
      <p class="ticket__meta">${esc(t.hero.ticket.city)} · ${esc(t.hero.ticket.packages)}</p>
      <div class="ticket__road" aria-hidden="true">
        <span class="ticket__fill" data-ticket-fill></span>
        <span class="ticket__truck" data-ticket-truck>${truck}</span>
      </div>
      <ol class="ticket__steps">
        ${t.hero.ticket.steps.map((s, i) => `<li data-ticket-step="${i}"${i < 4 ? ' class="is-done"' : ''}>${esc(s)}</li>`).join('')}
      </ol>
      <ul class="ticket__facts">
        <li>${icon('driver')}${esc(t.hero.ticket.driver)}</li>
        <li>${icon('code')}${esc(t.hero.ticket.code)}</li>
      </ul>
    </aside>
  </div>
</section>

<div class="marquee" aria-hidden="true">
  <div class="marquee__track" data-marquee>
    ${Array.from({ length: 2 }, () => `<span class="marquee__set">${t.marquee.map((m) => `<span>${esc(m)}</span><i>●</i>`).join('')}</span>`).join('')}
  </div>
</div>

<section class="route" id="route" aria-labelledby="route-title">
  <div class="wrap">
    <header class="section-head">
      <p class="eyebrow" data-reveal>${esc(t.route.eyebrow)}</p>
      <h2 id="route-title" data-reveal>${esc(t.route.title)}</h2>
      <p class="section-head__lede" data-reveal>${esc(t.route.lede)}</p>
    </header>
    <div class="route__body">
      <div class="route__line" data-route>
      <span class="route__rail" aria-hidden="true"><span class="route__progress" data-route-progress></span></span>
      <ol class="route__stops">
        ${t.route.steps
          .map(
            (s, i) => `
        <li class="stop" data-stop="${i}">
          <span class="stop__dot" aria-hidden="true"></span>
          <p class="stop__tag"><span class="mono">${n(i)}</span>${esc(s.tag)}</p>
          <h3 class="stop__title">${esc(s.title)}</h3>
          <p class="stop__body">${esc(s.body)}</p>
          <div class="stop__shot">${frame(s.kind, shotSrc(s.shot, lang), s.alt)}</div>
        </li>`,
          )
          .join('')}
      </ol>
      </div>
      <div class="route__stage" aria-hidden="true">
        <div class="route__frames">
          ${t.route.steps
            .map((s, i) => `<div class="route__frame route__frame--${s.kind}${i === 0 ? ' is-active' : ''}" data-frame="${i}">${frame(s.kind, shotSrc(s.shot, lang), '')}</div>`)
            .join('')}
        </div>
        <p class="route__count mono"><span data-route-count>01</span> / ${n(t.route.steps.length - 1)}</p>
      </div>
    </div>
  </div>
</section>

<section class="promise" id="promise" aria-labelledby="promise-title">
  <div class="wrap">
    <header class="section-head section-head--split">
      <p class="eyebrow" data-reveal>${esc(t.promise.eyebrow)}</p>
      <h2 id="promise-title" data-reveal>${esc(t.promise.title)}</h2>
    </header>
    <ul class="bento">
      ${t.promise.items
        .map(
          (p) => `
      <li class="tile tile--${p.key}" data-tile>
        ${icon(p.key, 'icon tile__icon')}
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.body)}</p>
        ${p.key === 'code' ? `<div class="otp" aria-hidden="true">${[4, 8, 2, 7].map((d) => `<span data-otp>${d}</span>`).join('')}</div>` : ''}
      </li>`,
        )
        .join('')}
    </ul>
  </div>
</section>

<section class="ops" id="ops" aria-labelledby="ops-title">
  <div class="wrap">
    <header class="ops__head">
      <p class="eyebrow" data-reveal>${esc(t.ops.eyebrow)}</p>
      <h2 id="ops-title" data-reveal>${esc(t.ops.title)}</h2>
      <p data-reveal>${esc(t.ops.body)}</p>
      <ul class="chips" data-reveal>${t.ops.chips.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
    </header>
    <div class="ops__stage" data-ops-stage>
      ${frame('browser', shotSrc('portal-dashboard', lang), t.ops.alts.dashboard, { cls: 'ops__main' })}
    </div>
    <div class="ops__row">
      <div data-reveal>${frame('browser', shotSrc('portal-naqel', lang), t.ops.alts.naqel)}<p class="caption">${esc(t.ops.captions.naqel)}</p></div>
      <div data-reveal>${frame('browser', shotSrc('portal-drivers', lang), t.ops.alts.drivers)}<p class="caption">${esc(t.ops.captions.drivers)}</p></div>
    </div>
  </div>
</section>

<section class="drivers" id="drivers" aria-labelledby="drivers-title" data-drivers>
  <div class="drivers__pin">
    <div class="drivers__track" data-drivers-track>
      <header class="drivers__intro">
        <p class="eyebrow">${esc(t.drivers.eyebrow)}</p>
        <h2 id="drivers-title">${esc(t.drivers.title)}</h2>
        <p>${esc(t.drivers.body)}</p>
      </header>
      ${t.drivers.screens
        .map(
          (s, i) => `
      <div class="drivers__item">
        ${frame('phone', shotSrc(s.shot, lang), s.caption)}
        <p class="caption"><span class="mono">${n(i)}</span>${esc(s.caption)}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>

<section class="cta" id="track" aria-labelledby="cta-title">
  <div class="wrap cta__grid">
    <h2 id="cta-title" class="cta__title" data-reveal>${esc(t.cta.title)}</h2>
    <div class="cta__form" data-reveal>
      <p>${esc(t.cta.body)}</p>
      ${trackForm(t, 'ref-cta')}
    </div>
  </div>
</section>

<section class="faq" id="faq" aria-labelledby="faq-title">
  <div class="wrap faq__grid">
    <header class="faq__head">
      <p class="eyebrow" data-reveal>${esc(t.faq.eyebrow)}</p>
      <h2 id="faq-title" data-reveal>${esc(t.faq.title)}</h2>
    </header>
    <div class="faq__list">
      ${t.faq.items
        .map(
          (f) => `
      <details class="qa" data-reveal>
        <summary><span>${esc(f.q)}</span>${icon('plus', 'icon qa__icon')}</summary>
        <div class="qa__a"><p>${esc(f.a)}</p></div>
      </details>`,
        )
        .join('')}
    </div>
  </div>
</section>
`
}
</main>

<footer class="footer">
  <div class="wrap">
    <div class="footer__big" aria-hidden="true"><span class="logo"></span></div>
    <div class="footer__grid">
      <p class="footer__about">${esc(t.footer.about)}</p>
      <ul class="footer__links">
        <li><a href="${TRACK_URL}">${esc(t.footer.track)}</a></li>
        <li><a href="${otherHref}" hreflang="${other.lang}" lang="${other.lang}">${esc(t.nav.switchLabel)}</a></li>
      </ul>
      <ul class="footer__links">
        <li class="footer__label">${esc(t.footer.legal)}</li>
        ${LEGAL_PAGES.map((p) => `<li><a href="${urlOf(lang, p)}">${esc(L[p])}</a></li>`).join('')}
      </ul>
      <ul class="footer__links">
        <li class="footer__label">${esc(t.footer.contact)}</li>
        <li><a href="mailto:${SUPPORT_EMAIL}" dir="ltr">${SUPPORT_EMAIL}</a></li>
        <li><a href="tel:${SUPPORT_PHONE}" dir="ltr">${SUPPORT_PHONE}</a></li>
      </ul>
    </div>
    <div class="footer__base">
      <p>© ${year} ${esc(t.footer.rights)}</p>
      <a href="#top">${esc(t.footer.top)} ↑</a>
    </div>
  </div>
</footer>
</body>
</html>`
}
