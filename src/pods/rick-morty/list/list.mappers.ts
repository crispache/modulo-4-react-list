import { CharacterApi } from "./api/api.model";
import * as vm from "./list.vm";


export const mapCharactersToVM = ( data: CharacterApi[]): vm.CharacterEntity[] => {
   return data.map(mapCharacterToVM);
}


export const mapCharacterToVM = (data: CharacterApi): vm.CharacterEntity => ({
    id: data.id,
    name: data.name,
    image: data.image,
    gender: data.gender,
    species: data.species,
})
