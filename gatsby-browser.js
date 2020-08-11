import './src/index.css'
import './src/tachyons.css'
import './src/App.css'

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!('IntersectionObserver' in window)) {
    // eslint-disable-next-line no-unused-expressions
    import('intersection-observer')
    console.log('# IntersectionObserver is polyfilled!')
  }
}
