import React from 'react';
import {useParams} from 'react-router-dom';

const PostView = () => {
    const {postId} = useParams();
    return (
        <div className="PostView">
            <h2>This is the Post view page where details are shown.</h2>
            <p>This is post {postId}</p>
        </div>
    )

}

export default PostView;