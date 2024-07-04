import { LayoutDashboard, Search, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <>
      <div className="flex gap-3 p-2 shadow-md ">
        <Image src="/logo.jpg" alt="logo" width={100} height={100} />
        <h2 className="flex gap-3 items-center ">
          <LayoutDashboard /> Category
        </h2>
        <div className="flex items-center  gap-2 border rounded-full px-3">
          <Search />
          <input
            type="text"
            placeholder="Enter your product"
            className="outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="flex gap-2">
            <ShoppingBag />
            {0}
          </h2>
          <Button>Login</Button>
        </div>
      </div>
    </>
  )
}
