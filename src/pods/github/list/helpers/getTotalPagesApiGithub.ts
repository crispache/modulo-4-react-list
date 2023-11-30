
export const getTotalPagesApiGithub = (cadena: string | undefined): number => {

    if (!cadena) return 0;

    const contentUrl = cadena?.split('?')[1];
    const linkHeader = contentUrl.split('&page=')[0]
    const page = linkHeader?.split('&');
    const totalPages =  page[0]?.split('=')[1] 


    return parseInt(totalPages);
}