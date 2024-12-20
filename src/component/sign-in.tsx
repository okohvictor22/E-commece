const Sign=()=>{


    return(
            <main>
                <div className="grid grid-cols-[2fr_3fr] mt-[1em] ml-[3em] md:grid md:grid-cols-[1fr_9fr]">
                    <img src="/logo.jpg" alt="" className="h-[6em] rounded-[8px]"/>
                    <p className="text-[black] mt-[1em] font-bold text-[1.25em]">Victor's E-commerce <br />stores</p>
                </div>
                <div>
                    <h1 className="text-[2em] ml-[1em] mt-[1em] text-[brown]">
                        Sign up
                    </h1>
                    <p className="text-[1.25em] ml-[2em] mt-[0.5em]">
                        Fill the form to register the account
                    </p>
                </div>
                <form>
                    <div className="ml-[6em]">
                        <label htmlFor="email" id="test" className="text-[1.5em] mt-[2em]">Email</label>
                        <br/>
                        <input type="text" name="email" id="email" placeholder="Please enter your email"/>
                        <br/>
            
                        <label htmlFor="password" id="web" className="text-[1.5em] mt-[2em]">Password</label>
                        <br/>
                        <input type="password" name="password" id="password" placeholder="Please enter password"/>
                    </div>
                </form>
                        <a href="home.tsx">
                            <button className="text-[1.5em] mt-[1em] border bg-[black] text-[white] hover:bg-brown-700 hover:text-[blue] rounded-[14px] pt-[6px] pb-[6px] pl-[6px] pr-[6px] w-[17em] ml-[1.5em]">
                                Sign up        
                            </button>
                        </a>
            </main>
        )
    }
    export default Sign;