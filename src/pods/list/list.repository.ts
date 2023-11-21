
import * as api from './api'
import { mapMembersToVM } from './list.mappers'


// TODO: REVISAR - PROVISIONAL
export const getMembers = async() => {
    const { data, error, pages} = await api.getMembers('lemoncode', 1);
    return mapMembersToVM(data);
}