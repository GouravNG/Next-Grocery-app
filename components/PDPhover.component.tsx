'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { Button } from './ui/button'
import Image from 'next/image'
import { IMGFetcher } from '@/utils/imgFetcher'
import { CircleX, ShoppingBasket } from 'lucide-react'
import QuantityControl from './QuantityControl.component'
import { useEffect, useState } from 'react'

const PDPHover: React.FC<> = ({ productData }) => {
    const initialPrice = productData.attributes.price || 0
    const initialQuantity = 1

    const [price, setPrice] = useState<number>(initialPrice)
    const [quantity, setQuantity] = useState<number>(initialQuantity)

    useEffect(() => {
        return () => {
            setPrice(initialPrice)
            setQuantity(initialQuantity)
        }
    }, [initialPrice, initialQuantity])

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className='bg-green-500 text-white hover:bg-green-600 mt-auto'>Add to cart</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className='hidden'></AlertDialogTitle>
                        <div className='flex flex-col'>
                            <div className='flex gap-10 '>
                                <Image
                                    src={IMGFetcher(productData.attributes.image.data.attributes.url)}
                                    alt='Product image'
                                    height={300}
                                    width={300}
                                    className='bg-slate-300 p-3 m-4 rounded-2xl'
                                />
                                <div className='flex flex-col gap-4 p-2 '>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='font-extrabold text-5xl '>
                                            {productData.attributes.groceryName}
                                        </h1>
                                        <AlertDialogCancel className='flex border-none '>
                                            <CircleX />
                                        </AlertDialogCancel>
                                    </div>
                                    <p className='font-extrabold text-slate-800'>
                                        {productData.attributes.description}
                                    </p>
                                    <div className='flex gap-3 items-baseline'>
                                        <h2 className='font-extrabold text-2xl text-slate-600'>
                                            $
                                            <s className='line-through text-2xl font-bold'>
                                                {productData.attributes.MRP}
                                            </s>
                                        </h2>
                                        <h2 className='font-extrabold text-3xl'>${productData.attributes.price}</h2>
                                    </div>
                                    <p className='font-semibold'>Quantity: {productData.attributes.quantity} Kg</p>
                                    <div className='flex gap-3 items-center'>
                                        <QuantityControl
                                            setPrice={setPrice}
                                            setQuantity={setQuantity}
                                            quantity={quantity}
                                            unitPrice={productData.attributes.price}
                                        />
                                        <h1 className='font-extrabold text-3xl'> = $ {price}</h1>
                                    </div>
                                    <Button className='bg-green-500 hover:bg-green-600'>
                                        <ShoppingBasket /> Add to cart
                                    </Button>
                                    <p>
                                        <span className='font-bold'>Category</span>:
                                        {productData.attributes.categories.data[0].attributes.Category}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <AlertDialogDescription></AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction className='hidden'> </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default PDPHover
