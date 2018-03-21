import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import { blue500 } from 'material-ui/styles/colors'


const UpdatePostBoxTemplate = (handleEdit, handleDelete) => (
    <div className="update-section">
        <FontIcon
            className="material-icons"
            hoverColor={blue500} 
            onClick={handleEdit}
        >
                mode_edit
        </FontIcon>

        <FontIcon
            className="material-icons"
            hoverColor={blue500} 
            onClick={handleDelete}
        >
                delete
        </FontIcon>
    </div>
)


export default UpdatePostBoxTemplate
