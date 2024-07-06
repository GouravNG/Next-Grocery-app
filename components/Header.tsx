import { LayoutDashboard, Search, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <>
      <div className="flex gap-3 p-2 shadow-md justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="logo" width={100} height={100} />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <h2 className="flex gap-3 items-center p-3 px-4 rounded-full bg-orange-300">
                <LayoutDashboard /> Category
              </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center  gap-2 border rounded-full p-3  ">
            <Search />
            <input
              type="text"
              placeholder="Enter your product"
              className="outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 p-2 px-4">
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
