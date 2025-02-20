import ProductData from "@/productData";

const Searchbox = () =>{
    const SearchEngine = document.getElementById('SearchEngine') as HTMLInputElement;
   
    // console.log(SearchEngine)

    if (SearchEngine) {
        SearchEngine.addEventListener('keyup', () => {
          let searchvalue = SearchEngine.value.toLowerCase();
          const products = ProductData();
          const filteredCards = products.filter((product) => product.title.toLowerCase().includes(searchvalue));
          console.log(filteredCards);
        });
      } else {
        // console.log(SearchEngine);
      }
    
    
    return(
        <div><input type="search" name="searchbox" placeholder="Type a name to search" className="searchbox pt-[6px] pb-[6px] pl-[6px] pr-[6px] w-[15em] border-black-900 border-solid rounded-[9px] ml-[3em] mt-[1em] mb-[1em]"/></div>
            
    );
};
   export default Searchbox; 