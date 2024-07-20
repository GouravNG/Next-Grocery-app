type PopularItemsResponce = {
    data: DataItem[]
}

type DataItem = {
    id: number
    attributes: Attributes
}

type Attributes = {
    groceryName: string
    price: number
    description: string
    MRP: number
    slug: string
    quantity: number
    createdAt: string
    updatedAt: string
    image: Image
    categories: Categories
}

type Image = {
    data: ImageDataInfo
}

type ImageDataInfo = {
    id: number
    attributes: ImageAttributes
}

type ImageAttributes = {
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: ImageFormats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: any | null
    createdAt: string
    updatedAt: string
}

type ImageFormats = {
    small: ImageFormatDetails
    medium: ImageFormatDetails
    thumbnail: ImageFormatDetails
}

type ImageFormatDetails = {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: string | null
    size: number
    width: number
    height: number
    sizeInBytes: number
}

type Categories = {
    data: CategoryData[]
}

type CategoryData = {
    id: number
    attributes: CategoryAttributes
}

type CategoryAttributes = {
    Category: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}
