import React from 'react';
import styled from 'styled-components'


const Ul = styled.ul`
display: flex;
flex-flow: row nowrap;
list-style:none;
flex: 1;

>li:hover{
    cursor: pointer;
    color: #ff5133;
}

li{
    padding: 18px 10px;
}


@media (max-width: 768px){
    flex-flow: column nowrap;
    background-color: #F3F7FF;
    position: fixed;
    transform: ${({ open }) => open ?  'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width:300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li{
        color:#000000;
    }
}

`;

const RightNav = ({ open }) => {
  return (
    <div>
       <Ul open={open}>
              <li>Home</li>
              <li>Find a Doctor</li>
              <li>Apps</li>
              <li>Testimonials</li>
              <li>About us</li>
       </Ul>
    </div>
  )
}

export default RightNav
