import { CharacterDetailsEntity } from "../detail.vm";

export interface useDetailProps {
  data: CharacterDetailsEntity;
  isLoading: boolean;
  errorMessage: string;
}

export const initialValues: CharacterDetailsEntity  = {
    name: '',
    image: '',
    gender: 'unknown',
    species: '',
    location: '',
};

export const createDefaultCharacterDetails = (): useDetailProps => {
  return {
    data: initialValues,
    isLoading: false,
    errorMessage: "",
  };
};
