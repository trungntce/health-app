/* eslint-disable import/no-anonymous-default-export */
import API from './axiosConfig';

const verifyToken = () => {
    return API.post('/verify-token');
};

const login = (username, password) => {
    return API.post('/login', { username, password });
};

const getAboutProducts = () => {
    return API.get('/about/products');
};
const getAboutProductById = (id) => {
    return API.get(`/about/product/${id}`);
};

const getAboutNewsAll = () => {
    return API.get('/about/news');
};
const getAboutNewsById = (id) => {
    return API.get(`/about/news/${id}`);
};

const getMyPageChart = () => {
    return API.get('/my-page/chart');
};
const getAllMyPageProduct = () => {
    return API.get('/my-page/products');
};
const getMyPageProductById = (id) => {
    return API.get(`/my-page/product/${id}`);
};

const getAllMyRecordProducts = () => {
    return API.get('/my-record/products');
};

const getMyRecordChart = () => {
    return API.get('/my-record/chart');
};
const getMyRecordExercise = () => {
    return API.get('/my-record/exercise');
};
const getMyRecordDiary = () => {
    return API.get('/my-record/diary');
};

export default {
    verifyToken,
    login,
    getAboutProducts,
    getAboutProductById,
    getAboutNewsAll,
    getAboutNewsById,
    getMyPageChart,
    getAllMyPageProduct,
    getMyPageProductById,
    getAllMyRecordProducts,
    getMyRecordChart,
    getMyRecordExercise,
    getMyRecordDiary,
};
