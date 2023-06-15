import styled from 'styled-components';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

export const ShoppingIconSVG = styled(ShoppingIcon)`
    width: 30px;
    height: 30px;
    `

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  `


export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
    `
