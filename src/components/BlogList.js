import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlogListItem from './BlogListItem';
import { fetchTitles, sendUpVote, sendDownVote } from '../actionCreators';

const BlogList = () => {

    const titles = useSelector(store => store.titles);
    const dispatch = useDispatch();
    

    useEffect(() => {
        if (titles.length === 0 ) {
            dispatch(fetchTitles())
        }
    }, [dispatch, titles.length])

    const handleUpVote = (event) => {
        const id = event.target.parentNode.parentNode.attributes.titleid.value;
        dispatch(sendUpVote(id));
    }

    const handleDownVote = (event) => {
        const id = event.target.parentNode.parentNode.attributes.titleid.value;
        dispatch(sendDownVote(id));
    }

    return (
        <div className="BlogList">

            {titles
            ?
                <div>
                    {titles.map((title => {
                    return (
                        <div key={title.id} style={{border: "1px solid grey", margin: "20px"}}>
                            <BlogListItem  id={title.id} title={title.title} description={title.description} votes={title.votes}/>
                            <div className="BlogListItem-votes" titleid={title.id}>
                                <p>{title.votes} votes</p>
                                <button onClick={handleUpVote}><i className="fas fa-thumbs-up"></i></button>
                                <button onClick={handleDownVote}><i className="fas fa-thumbs-down"></i></button>
                            </div>
                        </div>
                    )
                }))}
                </div>
            : 
                <h5>No posts currently :( </h5>           
            }

        </div>
    )
}

export default BlogList;