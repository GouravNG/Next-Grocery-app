import { getAllCategoryPopulated } from '@/types/api/category.type'
import { APIFetcher } from '@/utils/apiFetcher'
import Image from 'next/image'
import { IMGFetcher } from '@/utils/imgFetcher'

async function FeaturedCategories() {
    const CategoryData: getAllCategoryPopulated = await APIFetcher('/api/categories?populate=*')
    return (
        <>
            <div className='flex flex-col gap-10'>
                <h2 className='text-green-800 font-bold text-2xl'>Shop By Category</h2>
                <div className='flex justify-around px-10'>
                    {CategoryData.data.map((i) => {
                        const imgURL = IMGFetcher(i?.attributes?.icon?.data[0].attributes?.url)
                        return (
                            <div
                                key={i.id}
                                className='flex flex-col items-center bg-green-300 p-5 border rounded-2xl w-36 h-36 justify-center hover:bg-green-400 hover:scale-110 transition-all hover:font-bold'
                            >
                                <Image
                                    src={imgURL}
                                    height={40}
                                    width={40}
                                    alt='category icon'
                                    className='hover:scale-125 transition-all'
                                />
                                <h2 className='mt-2'>{i.attributes.Category}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default FeaturedCategories
