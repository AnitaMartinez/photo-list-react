import React, { useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLazyLoad } from '../../hooks/useLazyLoad'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const { show } = useLazyLoad(ref)
  const keyItemLocalStorage = `like-${id}`
  const [like, setLike] = useState(() => {
    // hacemos el try catch por si hay algún error al pedir el localStorage, por ejemplo, si hay navegación privada
    try {
      const like = window.localStorage.getItem(keyItemLocalStorage)
      return like
    } catch (error) {
      return false
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(keyItemLocalStorage, value)
      setLike(value)
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = () => {
    setLocalStorage(!like)
  }

  const Icon = like ? MdFavorite : MdFavoriteBorder

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
            <Button onClick={handleClick}>
              <Icon size='32px' /> {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
