import { apiService } from "./api.service";
import { CharacterDetailsApi } from "./api.model";

interface CharacterDetailsResponse {
    data: CharacterDetailsApi;
    error?: string,
}

export const getCharacterDetails = async (id: number): Promise<CharacterDetailsResponse> => {

    try {
        const data = await apiService.getCharacterDetails(id);
        return {
            data,
        }

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