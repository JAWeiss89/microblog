const DEFAULT_STATE = {
    titles: [],
    posts: {},
    error: false
}

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "FETCH_TITLES": {
            console.log("Root reducer is fetching titles");
            return {...state, titles: action.titles};
        }

        case "FETCH_POST": {
            console.log("Root reducer is fetching post")            
            return {...state, posts: {...state.posts, ...action.post}}
        }

        case "ADD_POST": {
            const postsCopy = {...state.posts};
            console.log("Root reducer is adding post");
            postsCopy[action.post.id] = action.post;
            return {...state, posts: postsCopy}
        }

        case "ADD_TITLE": {
            console.log("Root reducer is adding title");
            console.log(`Title being added is : ${action.title}`)
            const titlesCopy = [...state.titles];
            const updatedTitles = [...titlesCopy, action.title]
            return {...state, titles: updatedTitles};
        }
        
        case "DELETE_POST": {
            const postsCopy = {...state.posts};
            delete postsCopy[action.postId]
            return {
                ...state,
                posts: postsCopy
            }
        }

        case "DELETE_TITLE": {
            const titlesCopy = [...state.titles];
            const foundTitle = titlesCopy.find(title => title.id == action.postId);
            const index = titlesCopy.indexOf(foundTitle);
            titlesCopy.splice(index, 1);
            return {...state, titles: titlesCopy}
        }

        case "ADD_COMMENT": {
            const postsCopy = {...state.posts};
            const comments = postsCopy[action.postId].comments;
            comments.push(action.comment);
            return {...state, posts: postsCopy};
        }

        case "DELETE_COMMENT": {
            const postsCopy = {...state.posts};
            const comments = postsCopy[action.postId].comments;
            const comment = comments.find((comment) => comment.id===action.commentId);
            const indexOfComment = comments.indexOf(comment);
            comments.splice(indexOfComment, 1);
            return {...state, posts: postsCopy};
        }

        case "UPVOTE_POST": {
            const titlesCopy = [...state.titles];
            const foundTitle = titlesCopy.find((title) => title.id == action.postId);
            foundTitle.votes++;
            return {...state, titles: titlesCopy}
        }

        case "DOWNVOTE_POST": {
            const titlesCopy = [...state.titles];
            const foundTitle = titlesCopy.find((title) => title.id == action.postId);
            foundTitle.votes--;
            return {...state, titles: titlesCopy}
        }


        case "ERROR" : {
            return {...state, error: true};
        }
        default:
            return state;
    }
}

export default rootReducer;