export interface CharacterApi {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    origin: {
        name: string,
        url: string,
    };
    location: {
        name: string,
        url: string,
    };
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
}