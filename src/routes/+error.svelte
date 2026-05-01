<script lang="ts">
  import { page } from '$app/stores';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>{$page.status} · mustafayilmaz.art</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<Nav />

<section class="error-page">
  <div class="error-inner">
    <div class="error-code">{$page.status}</div>
    <h1>
      {#if $page.status === 404}
        Aradığın sayfa <em>burada değil.</em>
      {:else}
        Bir <em>aksaklık</em> oldu.
      {/if}
    </h1>
    <p>
      {#if $page.status === 404}
        Belki bağlantı eskimiştir veya sayfa taşınmış olabilir. Aşağıdan yola devam edebilirsin.
      {:else}
        {$page.error?.message ?? 'Beklenmedik bir hata.'}
      {/if}
    </p>
    <div class="error-links">
      <a href="/" class="btn-primary">Anasayfa</a>
      <a href="/blog" class="btn-secondary">Blog</a>
      <a href="/yazilimlar" class="btn-secondary">Yazılımlar</a>
    </div>
  </div>
</section>

<Footer />

<style>
  .error-page {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 140px 40px 80px;
    background: linear-gradient(135deg, var(--warm-white), var(--warm-gray));
  }
  .error-inner {
    max-width: 540px;
    text-align: center;
  }
  .error-code {
    font-family: 'Playfair Display', serif;
    font-size: clamp(5rem, 16vw, 9rem);
    font-weight: 800;
    color: var(--teal);
    line-height: 1;
    opacity: 0.18;
    letter-spacing: -4px;
    margin-bottom: -20px;
  }
  .error-inner h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    color: var(--charcoal);
    margin: 0 0 18px;
    line-height: 1.25;
  }
  .error-inner h1 em {
    color: var(--teal);
    font-style: italic;
  }
  .error-inner p {
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 32px;
  }
  .error-links {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
