import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"; 
import { IProduct } from "@/interface";
type ProcardCardProps = {
    product: IProduct;
    handleAddToCart: (product: IProduct)=> void;
 
}

const ProductCard: React.FC<ProcardCardProps> = ({ product, handleAddToCart }) => {
    const { image, title, price, id, description } = product;
    return (
        <Card key={id} className="p-4 text-[12px] ">
            <CardMedia
                className="bg-[lightblue]"
                component="img"
                alt="green iguana"
                sx={{
                    height: '300px',
                }}
                image={image}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                        fontSize: "1.5em"
                    }}

                    component="div">
                    {title}
                    
                </Typography>
                <div className="description hidden">
                    {description}
                </div>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    $ {price}
                </Typography>
                
            </CardContent>
            {<CardActions>
                <Button className="z-index:1" size="small" onClick={()=> handleAddToCart(product)}>Add to Cart</Button>
            </CardActions>}
        </Card>
    )
} 
export default ProductCard;                                    