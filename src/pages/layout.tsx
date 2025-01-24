
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full '>
         <a href="SignIn">
         <button className="text-[1.5em] mt-[1em] border bg-[black] text-[white] hover:bg-brown-700 hover:text-[blue] rounded-[14px] w-[4em] ml-[1.5em] p-4">
           Login      
         </button>
         </a>
         <a href="Products">
         <button className="text-[1.5em] mt-[1em] border bg-[black] text-[white] hover:bg-brown-700 hover:text-[blue] rounded-[14px]  w-[6em] ml-[1.5em] p-4">
            Products       
         </button>
         </a>
         <a href="Cart">
         <button className="text-[1.5em] mt-[1em] border bg-[black] text-[white] hover:bg-brown-700 hover:text-[blue] rounded-[14px]  w-[4em] ml-[1.5em] p-4">
            Cart      
         </button>
         </a>
         
      {children}
    </main>
  );
}
