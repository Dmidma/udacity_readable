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
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import { Link } from 'react-router-dom'

const HeaderActionBarTemplate = (
    username, handleLogout, 
    isPostDialogOpen, openPostDialog, closePostDialog,
    isDrawerOpen, openDrawer, closeDrawer,
    categories) => (
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
            <RaisedButton label="Create Post" primary={true} onClick={openPostDialog} />
            <ToolbarSeparator />
            <IconMenu
            iconButtonElement={
                <IconButton touch={true}>
                <NavigationExpandMoreIcon />
                </IconButton>
            }
            >
                <MenuItem primaryText="Logout" onClick={handleLogout} />
            </IconMenu>
        </ToolbarGroup>
    </Toolbar>
    <Dialog
        className="long-dialog"
        title="Create new Post"
        open={isPostDialogOpen} 
        onRequestClose={closePostDialog} > 
        <CreatePost closeModel={closePostDialog} />
    </Dialog>

    <Drawer 
        open={isDrawerOpen} >
        <AppBar 
            title="Categories" 
            iconElementLeft={<IconButton><NavigationClose onClick={closeDrawer} /></IconButton>}
/>
        { 
            categories.map(category => (
                <Link className="category-link" key={category} to={`/c/${category}`}>
                <MenuItem>
                    {category}
                </MenuItem>
                </Link>
            )) 
        }
    </Drawer>
    </div>
)


export default HeaderActionBarTemplate
