
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 629, hash: 'e098fa570ad60d545ede892a391d442bbb7ae9c011c13683a18b96eb3647f5dc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: 'ca82f5edc63097660559d799002c2f3b093a3bbcee5b765d0fc9454f7eb8afc3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4JM5V77O.css': {size: 421, hash: '55xpptNMi6Q', text: () => import('./assets-chunks/styles-4JM5V77O_css.mjs').then(m => m.default)}
  },
};
