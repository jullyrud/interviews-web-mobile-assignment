import { Outlet } from "react-router-dom";

import { AppWrap, AppList, AppItem } from "./AppBarStyled"


export function AppBar( ) {
    
    return (
        <>
          <AppWrap>
                <AppList>
                    
                <AppItem to="/">Home</AppItem>
                <AppItem to="/comments">Comments</AppItem>
                <AppItem to="/albums">Albums</AppItem>
                <AppItem to="/photos">Photos</AppItem>
                 <AppItem to="/users">Users</AppItem>
                
            </AppList> 
            
        </AppWrap>
        <Outlet /></>
    
        
    )
}