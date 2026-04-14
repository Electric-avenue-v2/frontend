export const unSlugify = (slug: string) =>
	slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
