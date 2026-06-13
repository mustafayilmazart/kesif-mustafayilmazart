<script lang="ts">
  /* Substack inline subscribe — site içinden direkt abonelik */
  let { compact = false }: { compact?: boolean } = $props();

  let email = $state('');
  let honeypot = $state(''); // Bot tuzağı — insan kullanıcı bu alanı görmez/doldurmaz
  let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
  let errorMessage = $state('');

  async function submit(e: Event) {
    e.preventDefault();
    if (!email || status === 'submitting') return;

    // Honeypot doluysa bot — sessizce "başarılı" göster, istek gönderme
    if (honeypot) {
      status = 'success';
      return;
    }

    // Basit email kontrolü
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status = 'error';
      errorMessage = 'Geçerli bir e-posta adresi gir.';
      return;
    }

    status = 'submitting';
    errorMessage = '';

    try {
      // Substack public subscribe API — no-cors: yanıt durumu okunamaz,
      // bu yüzden başarı mesajı "istek iletildi" olarak ifade edilir (yanıltıcı kesinlik yok)
      const formData = new FormData();
      formData.append('email', email);
      formData.append('first_url', 'https://mustafayilmaz.art');
      formData.append('first_referrer', 'mustafayilmaz.art');
      formData.append('current_url', window.location.href);
      formData.append('current_referrer', '');
      formData.append('referral_code', '');
      formData.append('source', 'embed');

      await fetch('https://kesiforg.substack.com/api/v1/free?nojs=true', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      status = 'success';
      email = '';
    } catch {
      // Ağ hatası (offline, DNS, engelleme) — kullanıcıya dürüst alternatif sun
      status = 'error';
      errorMessage = 'Abonelik isteği gönderilemedi. Substack sayfası üzerinden deneyebilirsin.';
    }
  }
</script>

<form class="newsletter-form" class:compact onsubmit={submit}>
  {#if status !== 'success'}
    <div class="nl-fields">
      <label for="nl-email" class="sr-only">E-posta adresin</label>
      <input
        id="nl-email"
        type="email"
        bind:value={email}
        placeholder="e-posta adresin"
        required
        disabled={status === 'submitting'}
        autocomplete="email"
        aria-describedby={status === 'error' ? 'nl-error-msg' : undefined}
      />
      <!-- Honeypot: görsel olarak gizli, botlar doldurur -->
      <input
        type="text"
        name="website"
        bind:value={honeypot}
        class="nl-hp"
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true"
      />
      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Gönderiliyor...' : 'Abone Ol'}
      </button>
    </div>
    {#if status === 'error' && errorMessage}
      <p class="nl-error" id="nl-error-msg" role="alert">
        {errorMessage}
        <a href="https://kesiforg.substack.com/subscribe" target="_blank" rel="noopener noreferrer">Substack'te aç<span class="sr-only"> (yeni sekmede açılır)</span></a>
      </p>
    {:else if !compact}
      <p class="nl-note">Haftalık bir e-posta · İstediğin zaman çık.</p>
    {/if}
  {:else}
    <div class="nl-success" role="status">
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7"/></svg>
      <span>İsteğin iletildi — e-postana Substack onay maili gelecek. Birkaç dakika içinde gelmezse <a href="https://kesiforg.substack.com/subscribe" target="_blank" rel="noopener noreferrer">Substack üzerinden abone ol<span class="sr-only"> (yeni sekmede açılır)</span></a>.</span>
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
  .nl-error { font-size: .82rem; color: var(--color-error); margin: 8px 0 0; text-align: center; }
  .nl-error a { color: var(--color-error); font-weight: 600; }
  .nl-success a { color: inherit; font-weight: 600; }
  /* Honeypot alanı: ekran dışında, klavye/okuyucu erişiminden çıkarılmış */
  .nl-hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
  .nl-success { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 14px 22px; background: var(--color-success-bg); color: var(--color-success); border: 1px solid var(--color-success-border); border-radius: 50px; font-size: .92rem; font-weight: 500; }
  .compact .nl-fields { padding: 4px; }
  .compact .nl-fields input { padding: 8px 14px; font-size: .85rem; }
  .compact .nl-fields button { padding: 8px 16px; font-size: .8rem; }
</style>
