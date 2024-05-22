export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/about_f290662e.mjs').then(n => n.c);

export { page };
