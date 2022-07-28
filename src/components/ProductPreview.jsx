import React,{useState} from 'react'
import styled from 'styled-components'

const Root=styled.div`
    width: 100%;
    //background-color: blueviolet;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Mainimage=styled.img`
    height: 450px;
    border-radius: 10px;
`
const ThumbnailContainer=styled.div`
    margin-top: 20px;
    img{
        height: 100px;
        border-radius: 10px;
        margin-right: 20px;
    }
`
const Thumbnail=styled.div`
    display: inline-block;
    cursor: pointer;
    img{
        ${props=>props.active && ({opacity:0.5})}
    }
`
const productImages=[{
    id:1,
    thumbnail:'image-product-1-thumbnail.jpg',
    mainImage:'image-product-1.jpg'
},
{
    id:2,
    thumbnail:'image-product-2-thumbnail.jpg',
    mainImage:'image-product-2.jpg'
},
{
    id:3,
    thumbnail:'image-product-3-thumbnail.jpg',
    mainImage:'image-product-3.jpg'
},
{
    id:4,
    thumbnail:'image-product-4-thumbnail.jpg',
    mainImage:'image-product-4.jpg'
}
]
const ProductPreview = () => {
    const [mainImage,setMainImage]=useState(productImages[0])
  return (
    <Root>
        <div>
            <Mainimage src={`/images/${mainImage.mainImage}`}></Mainimage>
            <ThumbnailContainer>
               {productImages.map((image)=>(
                  <Thumbnail active={image.id===mainImage.id} onClick={()=>{setMainImage(image)}}>
                       <img src={`/images/${image.thumbnail}`}></img>
                  </Thumbnail>
               ))}
            </ThumbnailContainer>
        </div>
    </Root>
  )
}

export default ProductPreview