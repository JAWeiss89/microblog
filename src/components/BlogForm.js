import React from 'react';

const BlogForm = ( {formData, handleChange} ) => {
    return (
        <div className="BlogForm">
            <form>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" onChange={handleChange} value={formData.title}/>
                <label htmlFor="description">Description: </label>
                <input type="text" id="description" name="description" onChange={handleChange} value={formData.description}/>
                <label htmlFor="body">Body: </label>
                <textarea type="textbox" id="body" name="body" onChange={handleChange} value={formData.body}/>
            </form>
        </div>
    )
}

export default BlogForm;