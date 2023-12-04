import { CharacterEntity } from "../list.vm";

export interface useListProps {
  data: CharacterEntity[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  errorMessage: string;
}

export const initialValues: useListProps = {
  data: [],
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  errorMessage: "",
};
