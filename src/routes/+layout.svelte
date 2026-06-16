<script lang="ts">
  // Self-host fontlar (Google Fonts CDN kaldırıldı — KVKK + performans)
  import '@fontsource/dm-sans/400.css';
  import '@fontsource/dm-sans/500.css';
  import '@fontsource/dm-sans/600.css';
  import '@fontsource/dm-sans/700.css';
  import '@fontsource/playfair-display/400.css';
  import '@fontsource/playfair-display/600.css';
  import '@fontsource/playfair-display/700.css';
  import '@fontsource/playfair-display/800.css';
  import '@fontsource/playfair-display/400-italic.css';
  import '@fontsource/playfair-display/600-italic.css';
  import '@fontsource/playfair-display/700-italic.css';
  import '@fontsource/jetbrains-mono/400.css';
  import '@fontsource/jetbrains-mono/500.css';

  import '../app.css';
  import '../aid-styles.css';
  import '../art-styles.css';
  import '../apps-styles.css';

  let { children } = $props();
</script>

{@render children()}
