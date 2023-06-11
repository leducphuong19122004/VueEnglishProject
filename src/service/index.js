import axiosInstance from './axios.config';

export let userLogin = async (dataForm) =>{
    const {data} = await axiosInstance.post('/login', dataForm);
    return data.status;
}

