import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-example-seminar-3-10.herokuapp.com/api",
});

export const getAllArticles = () => {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const getTopics = () => {
  return api.get("/topics").then((response) => {
    console.log(response.data.topics);
    return response.data.topics;
  });
};

export const getArticlesByTopic = (query) => {
  return api.get(`/articles?topic=${query}`).then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (id) => {
  return api.get(`/articles/${id}`).then((response) => {
    return response.data.article;
  });
};

export const patchVoteById = (id, votes) => {
  console.log(votes)
  return api.patch(`/articles/${id}`, {inc_votes: votes}).then((response) => {
    return response.data.article;
  })
};
