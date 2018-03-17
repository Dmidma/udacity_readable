import React from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';




const HeaderActionBarTemplate = (username, handleLogoutOnClik) => (
    <Toolbar className="sticky-toolbar">
        <ToolbarGroup firstChild={true}>
            <p className="user-section">Welcome</p> <h4 className="user-section bigger">{username}</h4>
        </ToolbarGroup>
        <ToolbarGroup>
            <RaisedButton label="Create Post" primary={true} />
            <ToolbarSeparator />
            <IconMenu
            iconButtonElement={
                <IconButton touch={true}>
                <NavigationExpandMoreIcon />
                </IconButton>
            }
            >
                <MenuItem primaryText="Logout" onClick={handleLogoutOnClik} />
            </IconMenu>
            </ToolbarGroup>
    </Toolbar>
)


export default HeaderActionBarTemplate
