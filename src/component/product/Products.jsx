import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import SearchBar from "../search/SearchBar";
import { getAllProducts } from "../../store/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Paginator from "../common/Paginator";
import { setTotalItems} from "../../store/features/paginationSlice";
import SideBar from "../common/SideBar";

const Products = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { searchQuery, selectedCategory } = useSelector((state) => state.search);
    const { itemsPerPage, currentPage } = useSelector((state) => state.pagination);
    
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);

    useEffect(() => {
        const results = products.filter((product) => {
            const matchesQuery = product.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            const matchesCategory =
                selectedCategory === "all" ||
                product.category.name
                    .toLowerCase()
                    .includes(selectedCategory.toLowerCase());

            return matchesQuery && matchesCategory;
        });
        setFilteredProducts(results);
    }, [searchQuery, selectedCategory, products]);


    useEffect(()=>{
        dispatch(setTotalItems(filteredProducts.length));
    },[filteredProducts, dispatch]);

    
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );


    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="col-md-6 mt-2">
                    <div className="search-bar input-group">
                        <SearchBar />
                    </div>
                </div>

            </div>
            <div className="d-flex">
                <aside className="sidebar" style={{ width: "250px", padding: "1rem" }}>
                    <SideBar/>
                </aside>
                <section style={{ flex: 1 }}>
                    <ProductCart products={currentProducts} />

                    <div className="pagination">
                        <Paginator/>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Products;