<script lang="ts">
  import { onMount } from 'svelte';

  let {
    activePath = ''
  }: {
    activePath?: string;
  } = $props();

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });

  function toggleMobile() {
    mobileOpen = !mobileOpen;
  }

  function isActive(path: string) {
    return activePath === path ? 'active-link' : '';
  }
</script>

<a href="#ana-icerik" class="skip-link">Ana içeriğe geç</a>

<nav class="site-nav" class:scrolled id="navbar" aria-label="Ana gezinme">
  <a href="/" class="nav-logo">
    M<span>.</span>Yılmaz
    <span class="domain">mustafayilmaz.art</span>
  </a>
  <ul class="nav-links" class:active={mobileOpen} id="navLinks">
    <li><a href="/#hakkimda">Hikayem</a></li>
    <li><a href="/#uzmanlik">Uzmanlık</a></li>
    <li><a href="/egitimler" class={isActive('/egitimler')}>Eğitimler</a></li>
    <li><a href="/ai-danismanligi" class={isActive('/ai-danismanligi')}>AI Danışmanlık</a></li>
    <li><a href="/skills" class={isActive('/skills')}>Skills</a></li>
    <li><a href="/yazilimlar" class={isActive('/yazilimlar')}>Yazılımlar</a></li>
    <li><a href="/vakalar" class={isActive('/vakalar')}>Vakalar</a></li>
    <li><a href="/blog" class={isActive('/blog')}>Blog</a></li>
    <li><a href="/art" class={isActive('/art')}>Art</a></li>
    <li><a href="/sss" class={isActive('/sss')}>SSS</a></li>
    <li><a href="mailto:bilgi@mustafayilmaz.art" class="nav-cta">İletişime Geç</a></li>
  </ul>
  <button
    class="mobile-menu-btn"
    id="menuBtn"
    aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
    aria-expanded={mobileOpen}
    aria-controls="navLinks"
    onclick={toggleMobile}
    type="button"
  >
    <span></span><span></span><span></span>
  </button>
</nav>
