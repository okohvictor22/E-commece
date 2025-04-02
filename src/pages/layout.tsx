
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full '>  
      {children}

      <footer className=" text-black bg-[lightblue] p-4 mt-auto">
        &copy; {new Date().getFullYear()} Victor's E-commerce Store. All rights reserved.
      </footer>
    </main>
  );
}
