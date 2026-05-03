import { error } from '@sveltejs/kit';
import { skills } from '$lib/data/skills';
import type { PageLoad } from './$types';

export const prerender = true;
export const entries = () => skills.map((s) => ({ slug: s.slug }));

export const load: PageLoad = ({ params }) => {
  const skill = skills.find((s) => s.slug === params.slug);
  if (!skill) throw error(404, 'Skill bulunamadı');

  // İlgili skills — aynı kategori
  const related = skills
    .filter((s) => s.slug !== skill.slug && s.category === skill.category)
    .slice(0, 3);

  return { skill, related };
};
