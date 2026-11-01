import './styles.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const $ = (s, r = document) => r.querySelector(s)
const $$ = (s, r = document) => [...r.querySelectorAll(s)]
const rtl = document.documentElement.dir === 'rtl'
const dirX = rtl ? -1 : 1 // flips horizontal motion for Arabic
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches

// ---------- Smooth scroll ----------
let lenis = null
if (!reduce) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
}

const navH = () => $('[data-nav]').offsetHeight

function scrollToHash(hash) {
  const target = hash === '#top' ? 0 : $(hash)
  if (target === null) return
  if (lenis) lenis.scrollTo(target, { offset: target === 0 ? 0 : -navH() + 1, duration: 1.4 })
  else if (target === 0) window.scrollTo({ top: 0 })
  else target.scrollIntoView()
}

// ---------- Mobile menu ----------
const sheet = $('[data-sheet]')
const menuBtn = $('[data-menu]')
function setMenu(open) {
  sheet.hidden = !open
  menuBtn.setAttribute('aria-expanded', String(open))
  document.body.style.overflow = open ? 'hidden' : ''
  if (lenis) open ? lenis.stop() : lenis.start()
  if (open) $('a', sheet).focus()
}
menuBtn.addEventListener('click', () => setMenu(sheet.hidden))
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !sheet.hidden) {
    setMenu(false)
    menuBtn.focus()
  }
})

// In-page links go through Lenis so the offset matches the fixed nav.
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]')
  if (!a) return
  const hash = a.getAttribute('href')
  if (hash.length < 2) return
  e.preventDefault()
  if (!sheet.hidden) setMenu(false)
  scrollToHash(hash)
  if (hash === '#track') setTimeout(() => $('#ref-cta')?.focus({ preventScroll: true }), reduce ? 0 : 1200)
})

// ---------- Nav state ----------
const page = document.body.dataset.page
const nav = $('[data-nav]')
const hero = $('[data-hero]')
ScrollTrigger.create({
  start: 0,
  end: 'max',
  onUpdate(self) {
    const y = self.scroll()
    nav.classList.toggle('is-solid', y > hero.offsetHeight - navH())
    nav.classList.toggle('is-hidden', self.direction === 1 && y > 600 && sheet.hidden)
  },
})
nav.addEventListener('focusin', () => nav.classList.remove('is-hidden'))

// ---------- Track forms ----------
// Native GET to tracking.shaheene.com/?ref=…; we only tidy the value first.
$$('[data-track]').forEach((form) => {
  form.addEventListener('submit', () => {
    const input = $('input', form)
    input.value = input.value.replace(/[#\s]/g, '')
  })
})

if (page === 'home') {
  route()
  if (reduce) gsap.set('[data-route-progress]', { scaleY: 1 })
  else motion()
} else {
  legalPage()
}

// ---------- Route: active stop drives the sticky stage ----------
function route() {
  const stops = $$('[data-stop]')
  const frames = $$('[data-frame]')
  const count = $('[data-route-count]')
  const setStop = (i) => {
    stops.forEach((s, k) => {
      s.classList.toggle('is-active', k === i)
      s.classList.toggle('is-past', k < i)
    })
    frames.forEach((f, k) => f.classList.toggle('is-active', k === i))
    count.textContent = String(i + 1).padStart(2, '0')
  }
  setStop(0)
  stops.forEach((stop, i) => {
    ScrollTrigger.create({
      trigger: stop,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => self.isActive && setStop(i),
    })
  })
}

// ---------- Legal pages: contents list follows the reader ----------
function legalPage() {
  const links = new Map($$('.toc a').map((a) => [a.getAttribute('href').slice(1), a]))
  $$('[data-toc-section]').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 35%',
      end: 'bottom 35%',
      onToggle: (self) => links.get(section.id)?.toggleAttribute('aria-current', self.isActive),
    })
  })
  if (reduce) return
  gsap
    .timeline({ defaults: { ease: 'power4.out' } })
    .from('.legal-hero__title', { y: 40, opacity: 0, duration: 1 })
    .from('[data-hero-fade]', { y: 20, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.1)
    .from('.legal-tabs, .toc, .prose', { y: 30, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.25)
}

function motion() {
  // ---------- Hero intro: the order moves one stop along ----------
  const steps = $$('[data-ticket-step]')
  steps.slice(1).forEach((s) => s.classList.remove('is-done'))
  const road = $('.ticket__road')
  const intro = gsap.timeline({ defaults: { ease: 'power4.out' } })
  intro
    .from('.hero__title .line > span', { yPercent: 108, duration: 1.3, stagger: 0.12 })
    .from('.hero__mark', { xPercent: -28 * dirX, opacity: 0, duration: 1.8 }, 0)
    .from('[data-hero-fade]', { y: 24, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.35)
    .from('[data-ticket]', { y: 80, rotate: 7 * dirX, opacity: 0, duration: 1.3 }, 0.45)
    .from('[data-ticket-fill]', { width: '0%', duration: 1.6, ease: 'power2.inOut' }, 0.9)
    .from('[data-ticket-truck]', { x: () => -road.offsetWidth * 0.78 * dirX, duration: 1.6, ease: 'power2.inOut' }, 0.9)
  steps.slice(1, 4).forEach((s, k) => intro.add(() => s.classList.add('is-done'), 1.2 + k * 0.4))

  // Hero drifts as you leave it.
  gsap.to('.hero__mark', { yPercent: -18, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
  gsap.to('[data-ticket]', { y: -90, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })

  // ---------- Generic reveals ----------
  $$('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    })
  })

  // ---------- Route line ----------
  gsap.to('[data-route-progress]', {
    scaleY: 1,
    ease: 'none',
    scrollTrigger: { trigger: '[data-route]', start: 'top 55%', end: 'bottom bottom', scrub: true },
  })
  $$('.stop__shot').forEach((el) => {
    gsap.from(el, { y: 40, opacity: 0, duration: 0.9, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
  })

  // ---------- Bento ----------
  const tiles = $$('[data-tile]')
  gsap.set(tiles, { y: 40, opacity: 0 })
  ScrollTrigger.batch(tiles, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.07 }),
  })
  // The code is "typed in", one digit at a time.
  gsap.from('[data-otp]', {
    scale: 0.6,
    opacity: 0,
    duration: 0.5,
    ease: 'back.out(2)',
    stagger: 0.16,
    scrollTrigger: { trigger: '.otp', start: 'top 85%', once: true },
  })

  // ---------- Ops: the portal tilts flat as it arrives ----------
  gsap.fromTo(
    '.ops__main',
    { rotateX: 26, scale: 0.86, y: 40 },
    { rotateX: 0, scale: 1, y: 0, ease: 'none', scrollTrigger: { trigger: '.ops__stage', start: 'top 95%', end: 'top 20%', scrub: true } },
  )

  // ---------- Drivers: horizontal pass on wide screens ----------
  const mm = gsap.matchMedia()
  mm.add('(min-width: 901px)', () => {
    const track = $('[data-drivers-track]')
    const distance = () => Math.max(0, track.scrollWidth - document.documentElement.clientWidth)
    const tween = gsap.to(track, {
      x: () => -distance() * dirX,
      ease: 'none',
      scrollTrigger: {
        trigger: '[data-drivers]',
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })
    $$('.drivers__item .phone').forEach((phone) => {
      gsap.from(phone, {
        rotate: 8 * dirX,
        y: 60,
        ease: 'none',
        scrollTrigger: { trigger: phone, containerAnimation: tween, start: 'left 100%', end: 'left 55%', scrub: true, horizontal: true },
      })
    })
  })

  // ---------- Magnetic buttons ----------
  if (finePointer) {
    $$('[data-magnetic]').forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect()
        xTo((e.clientX - r.left - r.width / 2) * 0.22)
        yTo((e.clientY - r.top - r.height / 2) * 0.3)
      })
      el.addEventListener('pointerleave', () => {
        xTo(0)
        yTo(0)
      })
    })
  }
}

// Fonts change line lengths, so measure again once they are in.
document.fonts?.ready.then(() => ScrollTrigger.refresh())
