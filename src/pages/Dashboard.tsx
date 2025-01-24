import Searchbox from "@/component/Searchbox";


const Dashboard=()=>{

    return(
        <main>
           <Searchbox/>
            <div className="grid grid-cols-[2fr_2fr] mt-[1em] ml-[3em] md:grid md:grid-cols-[1fr_9fr]">
                <img src="/logo.jpg" alt=""  />
                <div>
                    <p className="text-[black] mt-[1em] font-bold text-[1.25em]">Victor's E-commerce <br />store</p>
                </div>
            </div>
                 
                <div className="text-[black] ml-[1em] mt-[1em]">
                    <p>Welcome to Victor's E-commerce store where all appliances you seek are on display for customers. In this website users are allowed to buy, sell and add products to cart with ease.</p>
                </div>

                <div className="grid grid-cols-[1fr_10fr] mt-[3em] ">
                        <img src="/star.png" alt="" className="ml-[1em]"/>
                    <div>
                        <p><span className="font-bold mt-[8em] text-[2em]">Product:</span> <br />To view all products, first of all sign into the store so as to become a user. After doing that you will recieve a token which you are to keep safe because after every two months you would be expected to login again but using the token you recieve. Now on the product page there are items listed out for you the user to choose and make choice on what to buy. </p>
                        <p>To open product page <a href="Products"> product</a></p>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_10fr] mt-[3em] ">
                        <img src="/star.png" alt="" className="ml-[1em]"/>
                    <div>
                        <p><span className="font-bold mt-[8em] text-[2em]">Add to cart:</span> <br />. </p>
                    </div>
                </div>

        </main>
    )
}
export default Dashboard;

