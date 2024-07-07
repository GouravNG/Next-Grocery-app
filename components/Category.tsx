'use client'
import { LayoutDashboard } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Category, getAllCategoryPopulated } from '@/types/api/category.type'
import { APIFetcher } from '@/utils/apiFetcher'
import { IMGFetcher } from '@/utils/imgFetcher'

export default function Categories() {
    const [categ, setCateg] = useState<Category[]>([])
    useEffect(() => {
        async function dataFetch() {
            const apiData: getAllCategoryPopulated = await APIFetcher('/api/categories?populate=*')
            setCateg(apiData.data)
        }
        dataFetch()
    }, [])
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <h2 className='flex gap-3 items-center p-3 px-4 rounded-full bg-orange-300'>
                        <LayoutDashboard /> Category
                    </h2>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {categ.map((i, k) => {
                        // const imgURL = 'http://localhost:1337' + i?.attributes?.icon?.data[0]?.attributes?.url
                        const imgURL = IMGFetcher(i?.attributes?.icon?.data[0]?.attributes?.url)
                        return (
                            <DropdownMenuItem key={k} className='gap-3 p-2'>
                                <Image src={imgURL} alt='Category logo' height={30} width={30} />
                                {i?.attributes?.Category}
                            </DropdownMenuItem>
                        )
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
