import React from "react";
import styled from "styled-components";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Categories = () => {
  return (
    <List>
      <NavLink to={"/"}>
        <FaHome />
        <h4>Home</h4>
      </NavLink>
      <NavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0rem;
`;

export default Categories;
