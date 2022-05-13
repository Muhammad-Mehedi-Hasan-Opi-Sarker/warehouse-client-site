import { useEffect, useState } from "react";

const useMyItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://stark-shore-64587.herokuapp.com/product').then(res => res.json()).then(data => setProducts(data));

    }, [])
    return [products, setProducts];
}
export default useMyItems;