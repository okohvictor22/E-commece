import { useState,useEffect } from "react";
import { IProduct } from "@/interface";

const SignIn=()=>{
    const [products, ] = useState<IProduct[]>([]);
        useEffect(() => {
            try {
                fetch('https://dummyjson.com/users/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      firstName: 'Muhammad',
                      lastName: 'Ovi',
                      age: 250,
                      /* other user data */
                    })
                  })
                  .then(res => res.json())
                  .then(console.log);
 
            } catch (err) {
                console.error(err);
            }
        }, [products])
    


    return(
            <main className=" bg-[purple]">
                <div className="grid grid-cols-[2fr_3fr] mt-[1em] ml-[em] md:grid md:grid-cols-[1fr_9fr] ml-[18em]">
                    <img src="/logo.jpg" alt="" className="h-[6em] rounded-[8px]"/>
                    <p className="text-[black] mt-[1em] font-bold text-[1.25em]">Victor's E-commerce <br />stores</p>
                </div>
                <div>
                <div className="ml-[20em]">
                                <h1 className="text-[2em] ml-[1em] mt-[1em] text-[brown]">
                                    Sign up
                                </h1>
                                <p className="text-[1.25em] ml-[2em] mt-[0.5em]">
                                    Fill the form to register the account
                                </p>
                            </div>
                        
                                    <form>
                                        <div className="ml-[25em]">
                                            <label htmlFor="email" id="test" className="text-[1.5em] mt-[2em]">Email</label>
                                            <br/>
                                            <input type="text" name="email" id="email" placeholder="Please enter your email"/>
                                            <br/>

                                            <label htmlFor="username" className="text-[1.5em] mt-[2em]">User name</label>
                                            <br />
                                            <input type="text" name="username" id="username" placeholder="Please enter User name" />
                                            <br />
                                            <label htmlFor="password" id="web" className="text-[1.5em] mt-[2em]">Password</label>
                                            <br/>
                                            <input type="password" name="password" id="password" placeholder="Please enter password"/>
                                            <br />

                                            <label htmlFor="password" id="web" className="text-[1.5em] mt-[2em]">Re-enter password</label>
                                            <br/>
                                            <input type="password" name="password" id="password" placeholder="Please Re-enter password"/>
                                        </div>
                                    </form>
                                        <a href="Dashboard">
                                        <button className="text-[1.5em] mt-[1em] border bg-[black] text-[white] hover:bg-brown-700 hover:text-[blue] rounded-[14px] pt-[6px] pb-[6px] pl-[6px] pr-[6px] w-[17em] ml-[12em]">
                                                    Sign up        
                                                </button>
                                        </a>
                </div>
            </main>
        )
    }
    export default SignIn;