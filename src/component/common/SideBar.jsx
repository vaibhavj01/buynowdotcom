import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../store/features/productSlice";

const SideBar = () =>{
    const dispatch = useDispatch();
    const brands = useSelector((state)=>state.product.brands);

    useEffect(()=>{
        dispatch(getAllBrands())
    },[dispatch])


    return(
        <>
            <h6>Filter by Brand</h6>

            <ul className='brand-list'>
                {brands.map((brand, index) =>(
                    <li key={index} className="brand-item">
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            {brand}
                        </label>
                    </li>
                ))}
            </ul>        
        </>
    );
}
export default SideBar;