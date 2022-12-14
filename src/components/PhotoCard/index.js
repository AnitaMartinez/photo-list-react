import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { show, ref } = useNearScreen()
  const keyItemLocalStorage = `like-${id}`
  const [like, setLike] = useLocalStorage(keyItemLocalStorage, false)

  return (
    <Article ref={ref}>
      {
        show && (
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !like && toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                    setLike(!like)
                  }
                  return (
                    <FavButton
                      like={like}
                      likes={likes}
                      onClick={handleFavClick}
                    />
                  )
                }
              }
            </ToggleLikeMutation>
          </>
        )
      }
    </Article>
  )
}
