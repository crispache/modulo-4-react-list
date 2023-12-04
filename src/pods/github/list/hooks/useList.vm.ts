import { MemberEntity } from "../list.vm";


export interface useListProps {
    data: MemberEntity[];
    currentPage: number;
    totalPages: number;
    isLoading: boolean;
    errorMessage: string;
}