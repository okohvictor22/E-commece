
import Searchbox from "./searchbox";
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
        
        const isOnline= window.navigator.onLine;
        

        return (
            
            <main>
              
                <Searchbox/>

            <div className="grid grid-cols-2 gap-y-3 gap-x-6 md:grid md:grid-cols-4">
                
                {
                   !! products.length && products.map(({ image, title, price }, i) => (
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
               
            {
                !isOnline 
            }
           
            </div>
           
           </main>
        );
    };
    
    export default Products;

       