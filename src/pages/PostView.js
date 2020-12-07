import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {deletePost, fetchPost, addComment, deleteComment} from '../actionCreators';

const PostView = () => {
    const dispatch = useDispatch();
    const {postId} = useParams();
    const history = useHistory();
    
    const posts = useSelector(store => store.posts);
    const post = posts[postId];
    console.log({posts})

    const [commentField, setCommentField] = useState("");

    useEffect(() => {
        if (!post) {
            dispatch(fetchPost(postId));
        }
    }, [dispatch, postId, post])
    

    const handleEdit = () => {
        console.log("clicked Edit btn")
    }
    const handleDelete = () => {
        console.log({postId})
        dispatch(deletePost(postId));
        history.push("/");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const comment = {text: commentField};
        dispatch(addComment(postId, comment));
        setCommentField("");
    }

    const handleChange = (event) => {
        setCommentField(event.target.value);
    }

    const handleCommentDelete = (event) => {
        const commentId = event.target.parentNode.attributes.commentid.value;
        dispatch(deleteComment(postId, commentId));
    }
    
    return (
        <>
            {!post
            ? 
                <h2>Page is loading. Relax. </h2>
            :
                <div className="PostView" postid={post.id}>
                    <h2 className="PostView-title">{post.title}</h2><span>ID: {postId}</span>
                    <p className="PostView-description">{post.description}</p>
                    <p className="PostView-body">{post.body}</p>
                    <button onClick={handleEdit} className="PostView-edit">Edit</button>
                    <button onClick={handleDelete} className="PostView-delete">Delete</button>
                    <hr />
                    <h3>Comments</h3>
                    {post.comments.length > 0
                    ?
                    <div className="PostView-commments">

                        {post.comments.map((comment) => {
                            return (
                                <p key={comment.id} commentid={comment.id}>{comment.text}<button onClick={handleCommentDelete}>Delete</button></p>
                            )
                        })}
                    </div>
                    :
                    <div className="PostView-nocomments">
                        <p>The aren't any comments yet. :(</p>
                    </div>
                    }
                    <form  onSubmit={handleSubmit}>
                        <input type="text" id="new-comment" placeholder="New Comment" onChange={handleChange} value={commentField}/>
                        <button>Add</button>
                    </form>
                </div>

            }
        </>
    )

}

export default PostView;