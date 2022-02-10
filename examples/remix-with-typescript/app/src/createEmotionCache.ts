import createCache from '@emotion/cache';

export default function createEmotionCache() {
  return createCache({
    key: 'css',
    // prepend true to move added styles to top of head
    prepend: true,
  });
}
