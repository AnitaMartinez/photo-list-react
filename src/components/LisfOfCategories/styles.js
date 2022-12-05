
import styled from 'styled-components'
import { fadeInAndOut } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    opacity: ${({ visible }) => visible ? 1 : 0};
    visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
    transition: visibility .2s linear, opacity .2s linear;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
