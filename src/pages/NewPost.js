import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import BlogForm from '../components/BlogForm';
import {addPost} from '../actionCreators'

const NewPost = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const initialState = {
        title: "",
        description: "",
        body: "",
        comments: []
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData( formData => ({
            ...formData, [name]: value
        }))
    }

    const handleSave = (event) => {
        console.log(formData);
        const post = formData;
        console.log({post})
        dispatch(addPost(post));
        history.push("/")
    }
    const handleCancel = (event) => {
        console.log("Clicked cancel")
        history.push("/");

    }
    return (
        <div className="NewPost">
            <h2>New Post</h2>
            <BlogForm handleChange={handleChange} formData={formData}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default NewPost;