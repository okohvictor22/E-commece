import { useState,useEffect } from "react";
import { IProduct } from "@/interface";

const SignIn=()=>{
    const [ ] = useState<IProduct[]>([]);
        useEffect(() => {
            try {
                fetch('https://dummyjson.com/users/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      
                      age: 250,
                      
                      /* other user data */
                    })
                  })
                  .then(res => res.json())
                  .then(console.log);
            } catch (err) {
                console.error(err);
            }
        }, [])
        const Property={firstName: 'Muhammad',
                        lastName: 'Ovi',
                        password:"*******",}
                        
                        console.log(Property);
    


    return(
            <main className="bg-[lightblue]">
                <div className="grid grid-cols-[1fr_3fr] gap-4 mt-[1em] ml-[22em]">
                    <img src="/IMG-20241115-WA0014.jpg" alt=""/>
                    <p className="text-[black] mt-[1em] font-bold text-[2em]">Victor's E-commerce <br />stores</p>
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
                            <input type="text" name="email" id="email" placeholder="Please enter your email" className="mb-[0.5em]"/>
                            <br/>

                            <label htmlFor="username" className="text-[1.5em] mt-[2em]">User name</label>
                            <br />
                            <input type="text" name="username" id="username" placeholder="Please enter User name" className="mb-[0.5em]"/>
                            <br />
                            <label htmlFor="password" id="web" className="text-[1.5em] mt-[2em]">Password</label>
                            <br/>
                            <input type="password" name="password" id="pass" placeholder="Please enter password" className="mb-[0.5em]"/>
                            <br />

                            <label htmlFor="password" id="web" className="text-[1.5em] mt-[2em]">Re-enter password</label>
                            <br/>
                            <input type="password" name="password" id="password" placeholder="Please Re-enter password"/>
                        </div>
                    </form>
                        <a href="products">
                        <button className="text-[1.5em] mt-[1em] border bg-[black] text-[white] hover:bg-brown-700 hover:text-[blue] hover:bg-[grey] rounded-[14px] pt-[6px] pb-[6px] pl-[6px] pr-[6px] w-[17em] ml-[12em]">
                                    Sign up        
                                </button>
                        </a>
                </div>
                <p className="ml-[1em] font-bold mt-[0.5em]">for more enquiries call:08039899182</p>
            </main>
        )
    }
    export default SignIn;