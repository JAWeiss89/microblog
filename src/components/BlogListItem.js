import React from 'react';
import { Link } from 'react-router-dom';


const BlogListItem = ({id, title, description, votes=0}) => {

    return (
        <Link to={`/posts/${id}`} >
        <div postid={id} className="BlogListItem" >
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </Link>
    )
}

export default BlogListItem;