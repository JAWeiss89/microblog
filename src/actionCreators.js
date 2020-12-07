import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api'

export function fetchTitles() {
    return async function (dispatch) {
        try {
            const {data} = await axios.get(`${API_URL}/posts/`);
            dispatch(gotTitles(data))
        } catch(err) {
            dispatch(gotError())
        }
    }
}

export function fetchPost(postId) {
    return async function (dispatch) {
        try {
            const {data} = await axios.get(`${API_URL}/posts/${postId}/`);
            const foundPost = {};
            foundPost[data.id] = data;
            dispatch(gotPost(foundPost))
        } catch(err) {
            dispatch(gotError());
        }
    }
}

export function addPost(post) {
    return async function (dispatch) {
        try {
            const {data} = await axios.post(`${API_URL}/posts/`, post)
            data.comments = [];
            dispatch(addedPost(data));
            const newTitle = {title: data.title, description: data.description, id: data.id, votes: data.votes};
            dispatch(addedTitle(newTitle));
        } catch(e) {
            dispatch(gotError());
        }
    }
}

export function deletePost(postId) {
    return async function (dispatch) {
        try {
            await axios.delete(`${API_URL}/posts/${postId}`);
            dispatch(deletedPost(postId));
            dispatch(deletedTitle(postId));
        } catch(e) {
            dispatch(gotError());
        }
    }
}

export function addComment(postId, comment) {
    return async function (dispatch) {
        try {
            const {data} = await axios.post(`${API_URL}/posts/${postId}/comments`, comment);
            dispatch(addedComment(postId, data));
        } catch(e) {
            dispatch(gotError());
        }
    }
}

export function deleteComment(postId, commentId) {
    return async function (dispatch) {
        try {
            await axios.delete(`${API_URL}/posts/${postId}/comments/${commentId}`);
            dispatch(deletedComment(postId, commentId));
        } catch(e) {
            dispatch(gotError());
        }
    }
}

export function sendUpVote(postId) {
    return async function (dispatch) {
        try {
            await axios.post(`${API_URL}/posts/${postId}/vote/up`);
            dispatch(upVoted(postId));
        } catch(e) {
            dispatch(gotError());
        }
    }
}

export function sendDownVote(postId) {
    return async function (dispatch) {
        try {
            await axios.post(`${API_URL}/posts/${postId}/vote/down`);
            dispatch(downVoted(postId))
        } catch(e) {
            dispatch(gotError());
        }
    }
}

function gotTitles(titles) {
    return {
        type: 'FETCH_TITLES',
        titles
    }
}

function gotPost(post) {
    return {
        type: 'FETCH_POST',
        post
    }
}

function addedPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

function addedTitle(title) {
    return {
        type: 'ADD_TITLE',
        title
    }
}

function deletedPost(postId) {
    return {
        type: 'DELETE_POST',
        postId
    }
}

function deletedTitle(postId) {
    return {
        type: 'DELETE_TITLE',
        postId
    }
}

function addedComment(postId, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        comment
    }
}

function deletedComment(postId, commentId) {
    return {
        type: 'DELETE_COMMENT',
        postId,
        commentId
    }
}

function upVoted(postId) {
    return {
        type: 'UPVOTE_POST',
        postId
    }
}

function downVoted(postId) {
    return {
        type: 'DOWNVOTE_POST',
        postId
    }
}

function gotError() {
    return {
      type: 'ERROR'
    }
  }
  
  