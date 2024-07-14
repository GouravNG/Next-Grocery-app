import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { BannerImageAPIResponse } from '@/types/api/bannerImage.type'
import { APIFetcher } from '@/utils/apiFetcher'
import { IMGFetcher } from '@/utils/imgFetcher'
import Image from 'next/image'

export default async function Sliders() {
    const imgURLs:BannerImageAPIResponse = await APIFetcher('/api/sliders?populate=*')
    return (
        <>
            <Carousel>
                <CarouselContent>
                    {imgURLs.data.map((i) => {
                        const imgsrc = IMGFetcher(i.attributes.bannerImgURL.data[0].attributes.url)
                        return (
                            <CarouselItem key={i.id}>
                                <div className='w-[400px] h-[450px] flex items-center'>
                                    <Image
                                        src={imgsrc}
                                        alt='Banner image'
                                        fill
                                        sizes='(max-width: 1000px) 100vw, 1000px'
                                    />
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}
