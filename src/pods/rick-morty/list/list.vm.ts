export interface CharacterEntity {
    id: number;
    name: string;
    image: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    species: string;
}