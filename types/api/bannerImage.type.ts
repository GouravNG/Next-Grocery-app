type BannerImageAttributes = {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
  };
  
  type BannerImageData = {
    id: number;
    attributes: BannerImageAttributes;
  };
  
  type BannerAttributes = {
    sliderName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    bannerImgURL: {
      data: BannerImageData[];
    };
  };
  
  type BannerData = {
    id: number;
    attributes: BannerAttributes;
  };
  
  type MetaPagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
  
  export type BannerImageAPIResponse = {
    data: BannerData[];
    meta: {
      pagination: MetaPagination;
    };
  };
  