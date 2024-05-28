
class ConnectionLinksService {
    constructor(
    ) { }

    requestConnectionLinks = async (): Promise<{ links: { [key: string]: string } | null, error: string | null }> => {
        try {
            const response = await fetch('https://example_url/files/connectionLinks.json');
            const links = await response.json();
            return { links, error: null };
        } catch (error) {
            console.warn('BannerService -> requestBanners: ', error);
            return { links: null, error: 'requestError' };
        }
    }

}

export const connectionLinksService = new ConnectionLinksService();