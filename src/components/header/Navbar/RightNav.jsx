import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  gap:2.62rem;

  > li:hover {
    cursor: pointer;
  }

  li {
      padding: 18px 10px;
  }
  
  a {
	text-decoration: none;
	color: var(--sec-color);
	font-weight: 400;
	font-size: 1.125rem;
	line-height: 1.412rem;
}
a:hover {
	color: var(--darkr-color);
	font-weight: 700;
}

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #f3f7ff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  
  }
`;

const RightNav = ({ open }) => {
  return (
    <div>
      <Ul open={open}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Find A Doctor</a></li>
        <li><a href="#">App</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">About Us</a></li>
      </Ul>
    </div>
  );
};

export default RightNav;
