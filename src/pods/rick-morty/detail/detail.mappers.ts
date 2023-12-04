import { CharacterDetailsApi } from "./api";
import * as vm from "./detail.vm";


export const mapCharacterDetailsToVM = (data: CharacterDetailsApi): vm.CharacterDetailsEntity => ({
    name: data.name,
    image: data.image,
    gender: data.gender,
    species: data.species,
    location: data.location.name,
})
