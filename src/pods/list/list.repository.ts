
import * as api from './api'
import { mapMembersToVM } from './list.mappers'


// TODO: REVISAR - PROVISIONAL
export const getMembers = async() => {
    const { data, error, pages} =  await api.getMembers();
    return mapMembersToVM(data);
}