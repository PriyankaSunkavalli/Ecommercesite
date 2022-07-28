import React, {useState,useEffect} from 'react';
import styled from 'styled-components';

const Nav=styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 50px 0px;
    a{
        padding-bottom: 54px;
        position: relative;
        margin-left: 20px;
        text-decoration: none;
        color: black;
        &:hover{
            &::after{
                position: absolute;
                content: '';
                height: 4px;
                width: 100%;
                background-color:orange;
                bottom: 0;
                left: 0;
            }
        }

    }
`
const Nav1=styled.div`
    
`
const Nav2=styled.div`
    display: flex;
    align-items: center;
    img{
        margin-left: 20px;
    }
`
const Avatar=styled.img`
    height: 30px;
    width: 30px;
`

const Navbar = (props) => {
    const [totalCount,setTotalCount]=useState(0)
    useEffect(()=>{
        setTotalCount(0)
        props.cartValue.forEach((item)=>{
            setTotalCount(count=>count+item.quantity)
            console.log(item)
        })
    },[props.cartValue])
    console.log(props.cartValue,'cartValue')
  return (
    <Nav>
      <Nav1>
          <img src='/images/logo.svg'></img>
          <a href=''>Collections</a>
          <a href=''>Men</a>
          <a href=''>Women</a>
          <a href=''>About</a>
          <a href=''>Contact</a>

      </Nav1>
      <Nav2>
         <div> <img src='/images/icon-cart.svg'></img>
            <span>{totalCount}</span>
         </div>
            <Avatar src='/images/image-avatar.png'></Avatar>
      </Nav2>
    </Nav>
  );
}

export default Navbar;
