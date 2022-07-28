import React from 'react'
import styled from 'styled-components'
import ProductPreview from './ProductPreview'
import ProductDetails from './ProductDetails'

const Root=styled.div`
    display: flex;
    margin-top: 50px;
    
`
const LeftContainer=styled.div`
flex: 1;
    
`
const RightContainer=styled.div`
    flex: 1;
`

const HomeBody = (props) => {
  return (
    <Root>
        <LeftContainer>
          <ProductPreview/>
        </LeftContainer>
        <RightContainer>
          <ProductDetails setCartValue={props.setCartValue} cartValue={props.cartValue}/>
        </RightContainer>
    </Root>
  )
}

export default HomeBody