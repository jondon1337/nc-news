import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-example-seminar-3-10.herokuapp.com/api",
});

export const getAllArticles = (sortby, order) => {
  return api.get("/articles", {
    params: {
      sort_by: sortby,
      order: order,
    },
  }).then((response) => {
    return response.data.articles;
  });
};

export const getTopics = () => {
  return api.get("/topics").then((response) => {
    return response.data.topics;
  });
};

export const getArticlesByTopic = (query, sortby, order) => {
  return api.get(`/articles?topic=${query}`, {
    params: {
      sort_by: sortby,
      order: order,
    },
  }).then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (id) => {
  return api.get(`/articles/${id}`).then((response) => {
    return response.data.article;
  });
};

export const patchVoteById = (id, votes) => {
  return api.patch(`/articles/${id}`, {inc_votes: votes}).then((response) => {
    return response.data.article;
  });
};

export const getCommentsById = (id) => {
  
  return api.get(`/articles/${id}/comments`).then((response) => {
    console.log(response.data.comments)
    return response.data.comments;
  });
};
export const patchCommentVoteById = (id, votes) => {
  return api.patch(`/comments/${id}`, {inc_votes: votes}).then((response) => {
    return response.data.comment;
  });
};

export const postComment =(id, comment) => {
  return api.post(`/articles/${id}/comments`, comment).then((response) => {
    return response.data.comment;
  });
};

export const deleteComment = (id) => {
  return api.delete(`comments/${id}`);
};

