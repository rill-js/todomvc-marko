/**
 * Middleware which will tell the browser to preload files
 * we know are going to be needed to render.
 */
export default async function preloadMiddleware ({ res }, next) {
  await next()
  const type = res.get('Content-Type')
  // If we are sending out a react component then we need the main JS and CSS.
  if (type && type.startsWith('text/html')) {
    res.append('Link', '</index.css>; rel=preload; as=style;')
    res.append('Link', '</polyfill.js>; rel=preload; as=script;')
    res.append('Link', '</index.js>; rel=preload; as=script;')
  }
}
