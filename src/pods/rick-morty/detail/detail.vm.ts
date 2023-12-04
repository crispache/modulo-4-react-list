

export interface CharacterDetailsEntity {
    name: string;
    image: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    species: string;
    location: string;
}