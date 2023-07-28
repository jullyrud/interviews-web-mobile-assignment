import { Outlet } from "react-router-dom";
import { AppWrap, AppList, AppItem, BtnLoadMore } from "./AppBarStyled"


export function AppBar({onLoadMoreBtnClick}) {
    
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
            <Outlet />
            <BtnLoadMore onClick={onLoadMoreBtnClick}>load more</BtnLoadMore>
        </>
    
        
    )
}