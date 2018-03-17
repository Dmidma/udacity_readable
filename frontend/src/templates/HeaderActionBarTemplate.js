import React from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';

const HeaderActionBarTemplate = (handleChange, value, handleLogoutOnClik) => (
    <Toolbar>
        <ToolbarGroup firstChild={true}>
            <DropDownMenu value={value} onChange={handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
            </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
        <ToolbarTitle text="Options" />
        <FontIcon className="muidocs-icon-custom-sort" />
        <ToolbarSeparator />
        <RaisedButton label="Create Post" primary={true} />
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
