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
