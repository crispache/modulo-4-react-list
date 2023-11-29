/* import { octokit } from "@/core/api"; */
import { MemberDetailEntityApi } from "./api.model";

interface UserDetailResponse {
    data: MemberDetailEntityApi;
    error?: string,
}

export const getUserDetail = async (userName: string): Promise<UserDetailResponse> => {

    try {
       /*  const { data } = await octokit.request("GET /users/{username}", {
            username: userName,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }); */
        const data  = null

        return { data }

    } catch (err) {
        if (err instanceof Error && 'message' in err) {
            return {
                data: null,
                error: err.message
            }
        } else {
            return {
                data: null,
                error: 'Se ha producido un error al cargar los datos.'
            }
        }
    }
};