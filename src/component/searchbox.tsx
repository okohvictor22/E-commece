import {useEffect, useState } from "react";
import { IProduct } from "@/interface";

const Searchbox = () =>{
    const [products] = useState<IProduct[]>([]);
    useEffect(() => {
        try {
            fetch('https://dummyjson.com/products?sortBy=title&order=asc')
            .then(res => res.json())
            .then(console.log);

        } catch (err) {
            console.error(err);
        }
    }, [products])

    return(
        <main>
            <input type="search" name="search-input" placeholder="Type a name to search" className="searchbox pt-[6px] pb-[6px] pl-[6px] pr-[6px] w-[15em] border-black-900 border-solid rounded-[9px] ml-[3em] mt-[1em]"/>
            <div className="studentList"></div>
        </main>

    )
}
export default Searchbox ;