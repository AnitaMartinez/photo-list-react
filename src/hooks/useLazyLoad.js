import { useEffect, useState } from 'react'

export const useLazyLoad = (ref) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // import dinámico para usar el polyfill del api intersection observer solo en los navegadores que así lo requieran
    Promise.resolve(
      typeof window.IntersectionObserver !== undefined
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0] // la propiedad isIntersecting nos permite saber si el elemento está en el viewport (es decir, si está visible para el usuario)
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      // para inicializar el observer
      observer.observe(ref.current)
    })
  }, [ref])

  return { show }
}

// para que esto funcione, el item (el article, en este caso) tiene que tener una altura mínima,
// porque si no, al principio del render, tienen altura cero y entonces aparecen todos en el viewport aunque más adelante,
// cuando la imagen se haya rellenado, ya no estén todos en el viewport. Por lo tanto, si no tienen altura mínima,
// la propiedad isIntersecting es true en todos los elementos, y no queremos eso. Así, desde styles, le vamos a dar al article un min height
// Así, podemos ver en cada elemento se van renderizando y nos damos cuenta porque se aplica la animación fading según vamos haciendo scroll.
// (también lo podemos ver con el inspector, porque aunque aparezcan el el dom todos los elementos, desde el inspector podemos ver cómo se van marcando los que se van renderizando)
