import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const SortBoxTemplate = (handleSortChanging, sortValue) => (
    <SelectField
        className="sort-box"
        floatingLabelText="Sort by:"
        value={sortValue}
        onChange={handleSortChanging}
    >
        <MenuItem value={1} primaryText="best" />
        <MenuItem value={2} primaryText="worst" />
        <MenuItem value={3} primaryText="new" />
        <MenuItem value={4} primaryText="old" />
    </SelectField>
)


export default SortBoxTemplate
