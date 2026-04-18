import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/features/categorySlice";



const SearchBar = ({ value, onChange, onCategoryChange }) => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.category.categories)

    const handleCategoryChange = (e)=>{
        onCategoryChange(e.target.value);
    };

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch]);

    return (
        <div className='search-bar input-group input-group-sm'>
            <select onChange={handleCategoryChange} className="form-control-sm">
                <option value="all">All Category</option>
                {categories.map((category) =>(
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
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