type CategoryAttributes = {
    Category: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    icon?: {
        data: {
            attributes: {
                url: string
            }
        }[]
    }
}

export type Category = {
    id: number
    attributes: CategoryAttributes
}

type Pagination = {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export type getAllCategoryPopulated = {
    data: Category[]
    meta: {
        pagination: Pagination
    }
}
