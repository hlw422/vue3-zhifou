import http from '../utils/http/http.js'

const login = (data) => {
    return http.post("/user/login", data);
};
const getUserList = (data) => {
    return http.post("/user/list", data);
};
const saveUser = (data) => {
    return http.post("/user/save", data);
};
const delUser = (data) => {
    return http.del("/user/delete", data);
};
const getUserDetail = (data) => {
    return http.get("/user/detail", data);
};
const checkyjz = (data) => {
    return http.post("/user/checkyjz", data);
};
export default {
    login, getUserList, saveUser, delUser, getUserDetail,checkyjz
}