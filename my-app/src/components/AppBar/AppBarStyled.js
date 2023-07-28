import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";


export const AppWrap = styled.div`
background-color: orange;
`
export const AppList = styled.ul`
display: flex;
flex-direction: row;
list-style: none;
width: 100%;
height: 30px;
padding: 10px;
margin: 0;
align-items: center;
justify-content: center

`

export const AppItem = styled(NavLink)`
text-decoration: none;
color: black;
font-size: 24px;
&:not(:last-child) {
    margin-right: 10px;
    }
&.active {
    color: teal;
  }
`

export const BtnLoadMore = styled.button`
  width: 100px;
  margin: auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover, :focus {
  background-color: #303f9f;
}`