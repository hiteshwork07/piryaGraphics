import axios from "axios";
import appConfig from "../config";

export const createInquiry = async (payload) => {
    let result = {};
    try {
        const res = await axios.post(`${appConfig.appUrl}/inquiry`,payload);
        if(res.data.success) {
            result = res.data || {};
            return {success: true, data: result};
        } else {
            return {success: false, data: {}};
        }
    } catch (err) {
        console.log("error in getting info : ", err);
        return {
            success: false,
            message: (err) || "something went wrong"
        };
    }
};