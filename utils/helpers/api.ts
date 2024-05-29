import { routes } from '@utils/constants';
import { axios } from '@utils/plugins';

export const login = async (data: ILoginDataAPI) => {
    try {
        return await axios.post<ILoginAPIRes>(`${routes.API.LOGIN.href}`, data);
    } catch (err) {
        throw err;
    }
};
