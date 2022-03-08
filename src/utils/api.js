import axios from "axios"

const api = axios.create({baseURL:"https://nc-news-example-seminar-3-10.herokuapp.com/api"})

export const getAllArticles = () => {
    return api.get('/articles').then((response) => {
        return response.data.articles
    })

}