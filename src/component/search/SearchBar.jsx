import React from "react";



const SearchBar = ({value, onChange}) => {
    return (
        <div className='search-bar input-group input-group-sm'>
            <select className="form-control-sm">
                <option value="all">All Category</option>
                <option value="all">Tabs</option>
                <option value="all">Gadget</option>
            </select>
            <input 
            type='text' 
            value={value}
            onChange={onChange}
            className='form-control' 
            placeholder='search product(e.g. watch...)' 
            />
            <button className="search-button">Clear Filter</button>
        </div>
    );
}
export default SearchBar