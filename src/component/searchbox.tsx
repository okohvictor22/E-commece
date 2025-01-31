import ProductData from "@/productData";

const Searchbox = () =>{
    const SearchEngine = document.querySelector('#searchBox') as HTMLInputElement;
    console.log(SearchEngine)

    SearchEngine.addEventListener('keyup',() => {
        let searchvalue = SearchEngine.value.toLowerCase();

        const products: ({ title: string; })[]=ProductData();

        const filteredCards: { title: string; }[] = products.filter((ProductData: { title:string; }) => 
            ProductData.title.toLowerCase().includes(searchvalue) ||
        console.log(filteredCards));

    return(
        <div><input type="search" name="searchbox" placeholder="Type a name to search" className="searchbox pt-[6px] pb-[6px] pl-[6px] pr-[6px] w-[15em] border-black-900 border-solid rounded-[9px] ml-[3em] mt-[1em]"/></div>
            
    )
    }
)
}
   export default Searchbox;