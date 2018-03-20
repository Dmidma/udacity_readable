import React from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import CreatePost from '../components/CreatePost'
import FontIcon from 'material-ui/FontIcon'
import { blue500 } from 'material-ui/styles/colors'


const HeaderActionBarTemplate = (username, handleLogoutOnClik, handleCreatePostOnClick, isOpen, handleCloseModel, openDrawer) => (
    <div>
    <Toolbar className="sticky-toolbar">
        <ToolbarGroup firstChild={true}>
        <FontIcon
            className="material-icons"
            hoverColor={blue500} 
            onClick={openDrawer}
        >
            menu
        </FontIcon>
            <p className="user-section">Welcome</p> <h4 className="user-section bigger">{username}</h4>
        </ToolbarGroup>
        <ToolbarGroup>
            <RaisedButton label="Create Post" primary={true} onClick={handleCreatePostOnClick} />
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
    <Dialog
        className="long-dialog"
        title="Create new Post"
        open={isOpen} 
        onRequestClose={handleCloseModel} > 
        <CreatePost closeModel={handleCloseModel} />
    </Dialog>
    </div>
)


export default HeaderActionBarTemplate
