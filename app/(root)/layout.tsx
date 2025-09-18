import Navbar from "@/components/Navbar"

const layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div>
        <Navbar></Navbar>
        {children}
    </div>
  ) 
}

export default layout