import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>


            <a>
                <img src= "/images/home-icon.svg"/>
                <span><Link to="/">HOME</Link></span>
            </a>

            <a>
                <img src= "/images/search-icon.svg"/>
                <span>SEARCH</span>
            </a>

            <a>
                <img src= "/images/watchlist-icon.svg"/>
                <span><Link to="/detail">DETAILS</Link></span>
            </a>

            <a>
                <img src= "/images/original-icon.svg"/>
                <span>ORIGINALS</span>
            </a>

            <a>
                <img src= "/images/movie-icon.svg"/>
                <span>MOVIES</span>
            </a>

            <a>
                <img src= "/images/series-icon.svg"/>
                <span>SERIES</span>
            </a>

            <TrailerButton>
            {/* <img src='/images/play-icon-white.png'/> */}
                <span><Link to="/login">LOGIN</Link></span>

            </TrailerButton>

        </NavMenu>
        <UserImg src='/images/profile.jpg'/>

    </Nav>
  )
}

export default Header   

const Nav = styled.nav`

    height: 70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x:hidden;
    

`
const Logo = styled.img`
    width:80px;


`
const PlayButton = styled.button`
    cursor:pointer;
    border-radius: 4px;
    font-size:15px;
    padding:0px 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:40px;
    background: rgb (249,249, 249);
    border:none;
    letter-spacing:1.8px;

    &:hover{
        background: rgb(198, 198, 198);
    }


`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color:rgb(249, 249, 249);
    text-transform:uppercase;
    margin-left:550px;


`


const NavMenu = styled.div`
    display:flex;  
    flex:1;
    margin-left:35px;
    a{
        display: flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        text-decoration:none;
        color:white;
        font-size: 15px;

        img{
            height:20px;
        }
    
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;
    
            &:after{
                content: "";
                height:2px;
                background: white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94 ) 0s;
                transform: scaleX(0);
            }
        }
    
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }

   
   
`
const UserImg = styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;


`