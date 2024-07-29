import { APIFetcher } from '@/utils/apiFetcher'
import { IMGFetcher } from '@/utils/imgFetcher'
import Image from 'next/image'
import React from 'react'
import PDPHover from './PDPhover.component'

async function PopularItems() {
    const popularItemsData: PopularItemsResponce = await APIFetcher('/api/popular-items?populate=*')
    return (
        <>
            <h2 className='text-green-800 font-bold text-2xl mt-8'>Popular Products</h2>
            <div className='flex justify-center items-center flex-wrap gap-4 p-5'>
                {popularItemsData.data.map((i) => {
                    const imgSrc = IMGFetcher(i.attributes.image.data.attributes.url)
                    return (
                        <div
                            key={i.id}
                            className='flex flex-col justify-between items-center p-3 m-2 bg-green-100 rounded-md shadow-md hover:shadow-lg transition-shadow'
                            style={{ width: '150px', height: '250px' }}
                        >
                            <div>
                                <Image src={imgSrc} height={200} width={200} alt='icon' />
                            </div>

                            <div className='flex flex-col p-1 items-center'>
                                <div className='flex flex-col'>
                                    <p className='text-lg font-semibold'>{i.attributes.groceryName}</p>
                                    <p className='text-gray-500 text-sm'>
                                        MRP: <s>{i.attributes.MRP} ₹</s>
                                    </p>
                                    <p className='text-green-600 font-bold text-sm'>
                                        Our price: {i.attributes.price} ₹
                                    </p>
                                </div>
                                <PDPHover productData={i} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PopularItems
