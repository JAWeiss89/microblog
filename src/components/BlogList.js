import React from 'react';

const BlogList = () => {
    // the following blogs is a placeholder until redux is incorporated. 
    const blogs = [
        {title: "Why is the sky blue?",
        description: "An explanation as to why the sky is blue",
        body: "The sky is blue because..."},
        {title: "Did dinosaurs look like birds",
        description: "A deep look into what dinosaurs looked like",
        body: "Feathers dont show up in fossil records..."}
    ]
    return (
        <div className="BlogList">
            {blogs.map((blog) => {
                return (
                <div className="BlogList-blog" style={{border:"1px solid grey", margin:"20px"}}>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                </div>
                )

            })}
        </div>
    )
}

export default BlogList;