import React,{useState} from 'react'
import styled from 'styled-components'

const Root=styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const OfferPercent=styled.p`
    background-color: rgba(255, 125, 26, 0.2);
    color: orange;
    padding: 5px;
    border-radius: 10px;
    margin-left: 15px;
`
const Price=styled.div`
    display: flex;
    align-items: center;
`
const OriginalAmount=styled.span`
    color: lightgray;
`
const Counter=styled.div`
    width: 150px;
    background-color: #c1c5c9;
    padding: 15px 1px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 20px;
    p{
        margin: 0;
    }
    button{
        border: none;
        background-color: transparent;
        font-size: 25px;
        color: orange;
    }
`
const Cart=styled.button`
    background-color: orange;
    color: white;
    border: none;
    padding: 20px 100px;
    border-radius: 10px;
    &:hover{
        transform: translateY(-5px);
    box-shadow: 3px 20px 40px rgb(255 125 26 / 30%);
    opacity: 0.5;
    }
    
`

const ProductDetails = (props) => {
    const [count,setCount]=useState(0)

    const addToCart=()=>{
        const productPresent=props.cartValue.filter((item)=>item.id==='shoe')
        console.log(productPresent)
        if(productPresent.length===0){
            props.setCartValue([...props.cartValue,{id:'shoe',quantity:count}])
        }
        else{
            const updatedCart=props.cartValue.map((item)=>{
                if(item.id==='shoe'){
                    return {...item,quantity:count}
                }
                else{
                    return item
                }
            })
            props.setCartValue(updatedCart)
        }
    }
  return (
    <Root>
        <div>
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div>
            <Price>
            <h1>$125.00</h1>
            <OfferPercent>50%</OfferPercent>
            </Price>
            <OriginalAmount><del>$250.00</del></OriginalAmount>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
            <Counter>
                <button onClick={()=>{
                    if(count>=1){
                        setCount(count-1)
                    }
                }}>-</button>
                <p>{count}</p>
                <button onClick={()=>setCount(count+1)}>+</button>
            </Counter>
            <Cart onClick={()=>{
                if(count===0){
                    alert("You can't Buy 0 Products")
                }
                else{
                   addToCart()
                }
            }}>
                <img src='/images/icon-cart.svg'></img>
                Add to Cart</Cart>
        </div>
        </div>
    </Root>
  )
}

export default ProductDetails
