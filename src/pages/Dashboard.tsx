import Dropdown from "@/component/Dropdown";
const Dashboard=()=>{

    return(
        <main className="bg-[lightblue]">
           <Dropdown/>
            <div className="grid grid-cols-[1fr_3fr] gap-4 mt-[1em] ml-[22em]">
                <img src="/IMG-20241115-WA0014.jpg" alt=""  />
                <div>
                    <p className="text-[black] mt-[1em] font-bold text-[2em]">Victor's E-commerce <br />store</p>
                </div>
            </div>
                 
                <div className="text-[black] ml-[1em] mt-[1em] font-bold tex-[1.5em]">
                    <p>Welcome to Victor's E-commerce store where all appliances you seek are on display for customers. In this website users are allowed to buy, sell and add products to cart with ease.</p>
                </div>

                <div className="grid grid-cols-[1fr_10fr] mt-[3em] ">
                        <img src="/star.png" alt="" className="ml-[1em]"/>
                    <div>
                        <p><span className="font-bold mt-[8em] text-[2em]">Product:</span> <br />To view all products, first of all sign into the store so as to become a user. After doing that you will recieve a token which you are to keep safe because after every two months you would be expected to login again but using the token you recieve. Now on the product page there are items listed out for you the user to choose and make choice on what to buy. </p>
                        
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_10fr] mt-[3em] ">
                        <img src="/star.png" alt="" className="ml-[1em]"/>
                    <div>
                    <p><span className="font-bold mt-[5em] mb-[5em] text-[2em]">Add to cart:</span> <br />This feature is added to this website so as to give customers the leisure to save the desired product which he or she has chosen so as to come back to it at any time. </p>
                    </div>
                </div>
                <p className="ml-[1em] font-bold mt-[0.5em]">for more enquiries call:08039899182</p>
                <p className="ml-[1em] mt-[1em]">Go back to <a href="SignIn" className="text-[blue]">Login</a></p>

                    
        </main>
    )
}
export default Dashboard;

