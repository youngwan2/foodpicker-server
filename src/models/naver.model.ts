import axios from "axios";



const { NAVER_CLIENT_ID,
    NAVER_CLIENT_SECRET } = process.env

export class NaverModel {

    static async getDataFromNaverApi(search: string | any) {
        try {
            const response = await axios.get('https://openapi.naver.com/v1/search/encyc.json', {
                params: {
                    query: search
                },
                headers: {
                    'X-Naver-Client-Id': NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
                }
            });
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
}