import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 30px;

  .logo {
    height: 30px;
    margin-bottom: 15px;
    z-index: 1;
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.3;
  }
  .search {
    background-image: url("./assets/searchicon.svg");
    background-position: 18rem;
    background-repeat: no-repeat;
    padding: 0.5rem 2rem;
    width: 315px;
    color: #fff;
    background-color: #253755;
    border: 0px solid;
    color: #fff;
    border-radius: 10px;
  }
  .search:focus{
    outline: 0;
    background-color: #253755;
  }
  .search::placeholder{
    color: #586E94;
  }
`

function Header({handleSetOutput}) {

  return (
    <Container>
      {/* <img className='bg' alt='fond' src='./assets/backgroundimg.jpg' /> */}
      <img className="logo" alt="logo" src="./assets/logo.svg" />
      <form className="form" onSubmit={(e)=>{
        e.preventDefault()
      }}>
        <input className="search" 
        type="text" 
        placeholder="Rechercher un film" 
        onChange={(e)=> handleSetOutput(e.target.value)}/>
      </form>
    </Container>
  );
}

export default Header;
