import { octokit } from "@/core/api";
import { getTotalPagesApiGithub } from "../helpers";
import { MemberEntityApi } from "./api.model";

interface UsersListResponse {
    data: MemberEntityApi[];
    pages?: number,
    error?: string,
}

const ITEMS_PER_PAGE = 8;


export const getMembers = async (organizationName: string, currentPage: number): Promise<UsersListResponse> => {

    try {
        const { data, headers } = await octokit.request("GET /orgs/{org}/members", {
            org: organizationName,
            page: currentPage,
            per_page: ITEMS_PER_PAGE,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });

        // TODO: Cambiar
         let totalPages = 0;
         if(currentPage === 1) {
             if(headers.link && headers.link?.split(',')[1]) {
                 const lastUrl = headers.link?.split(',')[1]
                 totalPages = getTotalPagesApiGithub(lastUrl);
             }
             return { data, pages: totalPages}
         } else {
           return {data}
       } 

    } catch (err) {
        if (err instanceof Error && 'message' in err) {
            return {
                data: [],
                pages: 0,
                error: err.message
            }
        } else {
            return {
                data: [],
                pages: 0,
                error: 'Se ha producido un error al cargar los datos.'
            }
        }
    }
};