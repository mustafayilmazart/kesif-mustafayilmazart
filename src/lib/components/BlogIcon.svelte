<script lang="ts">
  /* Blog yazılarına içerik-bazlı özel SVG ikonları */
  let { slug, size = 64 }: { slug: string; size?: number } = $props();
</script>

{#if slug === 'michelangelo-etkisi-iliskilerde'}
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 50 L14 22 L36 16 L36 50 Z" />
    <path d="M22 32 Q24 28 28 28 Q30 30 28 33 L28 38 Q26 40 23 39" stroke-width="1.2" />
    <path d="M44 18 L52 26 L48 30 L40 22 Z" />
    <path d="M40 22 L36 26" stroke-width="2" />
    <circle cx="50" cy="14" r="1.5" fill="currentColor" />
    <path d="M48 12 L52 16 M52 12 L48 16" stroke-width="1" />
  </svg>
{:else if slug === 'hirsli-insan-sessiz-sabotaji'}
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 18 L20 50 L44 50 L48 18 Z" />
    <ellipse cx="32" cy="18" rx="16" ry="3" />
    <path d="M32 24 L34 28 L38 28 L35 31 L36 35 L32 33 L28 35 L29 31 L26 28 L30 28 Z" fill="currentColor" fill-opacity="0.15" />
    <circle cx="32" cy="50" r="1.5" fill="currentColor" />
    <path d="M32 53 L31 56 M32 56 L33 58" stroke-width="1.2" />
    <ellipse cx="30" cy="60" rx="1" ry="2" fill="currentColor" fill-opacity="0.4" />
    <ellipse cx="34" cy="58" rx="1" ry="2" fill="currentColor" fill-opacity="0.4" />
  </svg>
{:else if slug === 'davranissal-bagimlilik-cagi'}
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="22" y="14" width="20" height="36" rx="3" />
    <circle cx="32" cy="46" r="1" fill="currentColor" />
    <circle cx="38" cy="20" r="3" fill="currentColor" />
    <ellipse cx="14" cy="32" rx="4" ry="6" stroke-width="1.8" />
    <ellipse cx="50" cy="32" rx="4" ry="6" stroke-width="1.8" />
    <path d="M44 18 Q52 12 56 16" stroke-width="1.2" />
    <circle cx="56" cy="16" r="2" fill="currentColor" fill-opacity="0.3" />
  </svg>
{:else if slug === 'ai-caginda-niyet-mimarisi'}
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="44" cy="32" r="14" />
    <circle cx="44" cy="32" r="8" />
    <circle cx="44" cy="32" r="3" fill="currentColor" />
    <path d="M8 32 L40 32" stroke-width="2" />
    <path d="M34 26 L40 32 L34 38" stroke-width="2" />
    <rect x="10" y="46" width="6" height="6" stroke-width="1.2" />
    <rect x="20" y="46" width="6" height="6" stroke-width="1.2" />
    <rect x="30" y="46" width="6" height="6" stroke-width="1.2" />
  </svg>
{:else if slug === 'bagimliligi-anlamak'}
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32 50 C28 46 14 38 14 26 C14 20 18 16 24 16 C28 16 30 18 32 22 C34 18 36 16 40 16 C46 16 50 20 50 26 C50 38 36 46 32 50 Z" />
    <circle cx="32" cy="30" r="3" fill="white" />
    <circle cx="32" cy="30" r="3" />
    <path d="M8 36 L14 32" stroke-width="2" />
    <path d="M56 36 L50 32" stroke-width="2" />
    <path d="M22 8 L24 12 Q22 14 20 12 Z" fill="currentColor" fill-opacity="0.4" stroke="none" />
    <path d="M42 6 L44 10 Q42 12 40 10 Z" fill="currentColor" fill-opacity="0.4" stroke="none" />
  </svg>
{:else if slug === 'vibe-coding-ai-cagi'}
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 18 L8 32 L18 46" stroke-width="2" />
    <path d="M46 18 L56 32 L46 46" stroke-width="2" />
    <path d="M22 32 Q26 26 30 32 T38 32 T46 32" stroke-width="1.5" />
    <path d="M22 38 Q26 32 30 38 T38 38 T46 38" stroke-width="1" stroke-opacity="0.5" />
    <path d="M36 14 L28 50" stroke-width="1.5" stroke-opacity="0.6" />
    <circle cx="50" cy="14" r="1.5" fill="currentColor" />
  </svg>
{:else if slug === 'icsel-sessizligin-sesi'}
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 16 H52 A4 4 0 0 1 56 20 V40 A4 4 0 0 1 52 44 H30 L20 54 V44 H12 A4 4 0 0 1 8 40 V20 A4 4 0 0 1 12 16 Z" />
    <line x1="20" y1="32" x2="44" y2="32" stroke-width="2" />
    <circle cx="32" cy="30" r="20" stroke-width="0.5" stroke-opacity="0.3" stroke-dasharray="2 3" />
  </svg>
{:else}
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 18 L14 50 L50 50 L50 28 L40 18 Z" />
    <path d="M40 18 L40 28 L50 28" />
    <line x1="20" y1="34" x2="44" y2="34" />
    <line x1="20" y1="40" x2="44" y2="40" />
    <line x1="20" y1="46" x2="36" y2="46" />
  </svg>
{/if}
