import { apiService } from "./api.service";
import { CharacterApi } from "./api.model";

interface UsersListResponse {
    data: CharacterApi[];
    pages?: number,
    error?: string,
}


export const getCharacters = async (currentPage: number): Promise<UsersListResponse> => {

    try {
        const { info, results } = await apiService.getCharacters({
            page: currentPage,
        });

        return {
            data: results,
            pages: info.count
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