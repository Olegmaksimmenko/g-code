import { IBanner } from "./IBanner";

class BannerService {
    constructor(
    ) { }

    requestBanners = async (): Promise<{ banners: IBanner[] | null, error: string | null }> => {
        try {
            const response = await fetch('https://example_url/files/banners.json');
            const banners = await response.json();
            return { banners: banners?.data, error: null };
        } catch (error) {
            console.warn('BannerService -> requestBanners: ', error);
            return { banners: null, error: 'requestError' };
        }
    }

}

export const bannerService = new BannerService();