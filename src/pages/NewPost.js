import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import BlogForm from '../components/BlogForm';

const NewPost = () => {
    const history = useHistory();
    const initialState = {
        title: "",
        description: "",
        body: ""
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
            {/* <form>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" onChange={handleChange} value={formData.title}/>
                <label htmlFor="description">Description: </label>
                <input type="text" id="description" name="description" onChange={handleChange} value={formData.description}/>
                <label htmlFor="body">Body: </label>
                <textarea type="textbox" id="body" name="body" onChange={handleChange} value={formData.body}/>
            </form> */}
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )

}

export default NewPost;