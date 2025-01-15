
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full'>
         <a href="Sign">
         <button className="text-[1.5em] mt-[1em] border bg-[black] text-[white] hover:bg-brown-700 hover:text-[blue] rounded-[14px] p-[4] w-[4em] ml-[1.5em]">
            Sign up        
         </button>
         </a>
         <a href="Products">
         <button className="text-[1.5em] mt-[1em] border bg-[black] text-[white] hover:bg-brown-700 hover:text-[blue] rounded-[14px] p-[4] w-[4em] ml-[1.5em]">
            Products       
         </button>
         </a>
      {children}
    </main>
  );
}
