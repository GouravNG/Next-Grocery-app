import { Search, ShoppingBag } from 'lucide-react'
import { Button } from './ui/button'
import Categories from './Category'

export default function Header() {
    return (
        <>
            <div className='flex gap-3 p-2 shadow-md justify-between'>
                <div className='flex items-center gap-3'>
                    <h1 className='text-lg font-bold p-2'>GROCERY</h1>
                    <Categories />
                    <div className='flex items-center  gap-2 border rounded-full p-3  '>
                        <Search />
                        <input type='text' placeholder='Enter your product' className='outline-none' />
                    </div>
                </div>
                <div className='flex items-center gap-4 p-2 px-4'>
                    <h2 className='flex gap-2'>
                        <ShoppingBag />
                        {0}
                    </h2>
                    <Button>Login</Button>
                </div>
            </div>
        </>
    )
}
