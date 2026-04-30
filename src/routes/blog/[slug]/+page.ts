import { error } from '@sveltejs/kit';
import { posts } from '$lib/data/posts';
import type { PageLoad } from './$types';

export const prerender = true;

// generateStaticParams karşılığı: prerender için tüm slug'ları üret
export const entries = () => posts.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) throw error(404, 'Yazı bulunamadı');

  // h2 başlıklarından TOC üret
  const matches = [...post.content.matchAll(/<h2>([^<]+)<\/h2>/g)];
  const toc = matches.map((m, i) => ({ id: `h2-${i}`, text: m[1].trim() }));

  // h2'lere id enjekte et
  let i = 0;
  const contentWithIds = post.content.replace(/<h2>/g, () => `<h2 id="h2-${i++}">`);

  // İlgili yazılar (aynı kategori öncelikli)
  const others = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 2);

  return { post, toc, contentWithIds, others };
};
