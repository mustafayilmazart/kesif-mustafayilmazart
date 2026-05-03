<script lang="ts">
  /* Substack inline subscribe — site içinden direkt abonelik */
  let { compact = false }: { compact?: boolean } = $props();

  let email = $state('');
  let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
  let errorMessage = $state('');

  async function submit(e: Event) {
    e.preventDefault();
    if (!email || status === 'submitting') return;

    // Basit email kontrolü
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status = 'error';
      errorMessage = 'Geçerli bir e-posta adresi gir.';
      return;
    }

    status = 'submitting';
    errorMessage = '';

    try {
      // Substack public subscribe API (CORS açık)
      const formData = new FormData();
      formData.append('email', email);
      formData.append('first_url', 'https://mustafayilmaz.art');
      formData.append('first_referrer', 'mustafayilmaz.art');
      formData.append('current_url', window.location.href);
      formData.append('current_referrer', '');
      formData.append('referral_code', '');
      formData.append('source', 'embed');

      const res = await fetch('https://kesiforg.substack.com/api/v1/free?nojs=true', {
        method: 'POST',
        mode: 'no-cors', // CORS yok — opaque response, başarı varsayımı
        body: formData
      });

      // no-cors mode'da response status okunamaz; ulaşımın başarılı olduğunu kabul et
      status = 'success';
      email = '';
    } catch (err) {
      status = 'error';
      errorMessage = 'Abonelik gönderilemedi. Lütfen Substack sayfası üzerinden dene.';
    }
  }
</script>

<form class="newsletter-form" class:compact onsubmit={submit}>
  {#if status !== 'success'}
    <div class="nl-fields">
      <input
        type="email"
        bind:value={email}
        placeholder="e-posta adresin"
        required
        disabled={status === 'submitting'}
        autocomplete="email"
      />
      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Gönderiliyor...' : 'Abone Ol'}
      </button>
    </div>
    {#if status === 'error' && errorMessage}
      <p class="nl-error">{errorMessage}</p>
    {:else if !compact}
      <p class="nl-note">Haftalık bir e-posta · İstediğin zaman çık.</p>
    {/if}
  {:else}
    <div class="nl-success">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>
      <span>Aboneliğin alındı. Substack'te onay e-postası bekle.</span>
    </div>
  {/if}
</form>

<style>
  .newsletter-form { width: 100%; max-width: 480px; }
  .nl-fields { display: flex; gap: 8px; background: #fff; border: 1px solid var(--border); border-radius: 50px; padding: 6px; transition: border-color .2s; }
  .nl-fields:focus-within { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(33,146,149,.15); }
  .nl-fields input { flex: 1; border: 0; outline: 0; background: transparent; padding: 10px 16px; font-size: .92rem; font-family: inherit; color: var(--charcoal); }
  .nl-fields button { background: var(--teal); color: #fff; border: 0; border-radius: 50px; padding: 10px 22px; font-weight: 600; font-size: .88rem; cursor: pointer; transition: all .2s; font-family: inherit; }
  .nl-fields button:hover:not(:disabled) { background: var(--teal-dark); }
  .nl-fields button:disabled { opacity: .6; cursor: not-allowed; }
  .nl-note { font-size: .76rem; color: var(--text-muted); margin: 8px 0 0; text-align: center; }
  .nl-error { font-size: .82rem; color: #dc2626; margin: 8px 0 0; text-align: center; }
  .nl-success { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 14px 22px; background: rgba(22,163,74,.08); color: #16a34a; border: 1px solid rgba(22,163,74,.2); border-radius: 50px; font-size: .92rem; font-weight: 500; }
  .compact .nl-fields { padding: 4px; }
  .compact .nl-fields input { padding: 8px 14px; font-size: .85rem; }
  .compact .nl-fields button { padding: 8px 16px; font-size: .8rem; }
</style>
