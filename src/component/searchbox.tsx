

const Searchbox = () =>{
    const search =document.querySelector("input[name='search-input']")
    console.log(search)

    return(
        <main>
            <input type="search" name="search-input" placeholder="Type a name to search" className="searchbox pt-[6px] pb-[6px] pl-[6px] pr-[6px] w-[15em] border-black-900 border-solid rounded-[9px] ml-[3em] mt-[1em]"/>
        </main>

    )
}
export default Searchbox ;