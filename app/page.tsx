import FeaturedCategories from '@/components/FeaturedCategories.component'
import Sliders from '@/components/Sliders.component'

export default function Home() {
    return (
        <>
            <div className='p-10 flex flex-col items-center justify-center '>
                <Sliders />
            </div>
            <div className='px-10 py-3'>
                <FeaturedCategories />
            </div>
        </>
    )
}
