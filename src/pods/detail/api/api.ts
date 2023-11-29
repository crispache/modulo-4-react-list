import { apiService } from "./api.service";
import { MemberDetailEntityApi } from "./api.model";

interface UserDetailResponse {
    data: MemberDetailEntityApi;
    error?: string,
}

export const getUserDetail = async (userName: string): Promise<UserDetailResponse> => {

    try {
        const { data } = await apiService.getMemberDetails({
            username: userName,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

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