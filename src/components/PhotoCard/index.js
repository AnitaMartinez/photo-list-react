import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  // Lazy load
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0] // la propiedad isIntersecting nos permite saber si el elemento está en el viewport (es decir, si está visible para el usuario)
      console.log('🚀 ~ file: index.js:14 ~ observer ~ isIntersecting', isIntersecting)
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })

    // para inicializar el observer
    observer.observe(ref.current)
  }, [ref])
  // para que esto funcione, el item (el article, en este caso) tiene que tener una altura mínima,
  // porque si no, al principio del render, tienen altura cero y entonces aparecen todos en el viewport aunque más adelante,
  // cuando la imagen se haya rellenado, ya no estén todos en el viewport. Por lo tanto, si no tienen altura mínima,
  // la propiedad isIntersecting es true en todos los elementos, y no queremos eso. Así, desde styles, le vamos a dar al article un min height
  // Así, podemos ver en cada elemento se van renderizando y nos damos cuenta porque se aplica la animación fading según vamos haciendo scroll.
  // (también lo podemos ver con el inspector, porque aunque aparezcan el el dom todos los elementos, desde el inspector podemos ver cómo se van marcando los que se van renderizando)

  return (
    <Article ref={ref}>
      {
        show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button>
              <MdFavoriteBorder size='32px' /> {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
