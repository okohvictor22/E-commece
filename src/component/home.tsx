import { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import {  IProduct} from "@/interface";
    const Products = () => {
        const [products, setProducts] = useState<IProduct[]>([]);
    
        useEffect(() => {
            try {
                fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then(data => {
                        setProducts(data)
                    })
                    console.log(Products)
            } catch (err) {
                console.error(err);
            }
        }, [products])
        
        // const searchInput =document.querySelector("input[name='search-input']");
        // console.log(searchInput)


        // searchInput?.addEventListener('keyup',() => {
        // const searchvalue = searchInput.value.toLowerCase();
        // console.log(searchInput.value);

        // const filteredProducts = Products.filter((Product: { title: string; }) => 
        // Product.title.toLowerCase().includes(searchvalue) 
        // ,products).price.toLowerCase()===searchvalue),

        // console.log(filteredProducts);
        // console.log(products);

        // Products.innerHTML='';

        // if (filteredProducts.length) {
        //     for (let index = 0; index < filteredProducts.length; index++) {
        //         Products.appendChild(createSingleCard(filteredProducts[index])); 
        //     }
            
        // } else{
        //     const paragraph = document.createElement('p');
        //     paragraph.innerText='search not found';
        //     Product.appendChild(paragraph);
        // }

    // const searchInput=document.querySelector('input[name="search-input"]')

    // searchInput?.addEventListener('keyup',()=>{
    //     const searchValue=searchInput.value.toLowerCase
    //     console.log(value);

    //     const filteredProducts=
    // })
        return (
            <main>
                <input type="search" name="search-input" placeholder="Type a name to search" className="searchbox pt-[6px] pb-[6px] pl-[6px] pr-[6px] w-[15em] border-black-900 border-solid rounded-[9px] ml-[3em]"/>
                <div className="studentList"></div>

            <div className="grid grid-cols-2 gap-y-3 gap-x-6 md:grid md:grid-cols-4">
                
                {
                    products.length && products.map(({ image, title, price }, i) => (
                        <Card key={i} className="p-4">
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {price}
                                </Typography>
                            </CardContent>
                            {/* {<CardActions> 
                                <Button size="small">Share</Button> 
                                 <Button size="small">Learn More</Button> 
                            </CardActions> }  */}
                           
                        </Card>
                    ))
                } 
            
           
            </div>
           
           </main>
        );
    };
    
    export default Products;

