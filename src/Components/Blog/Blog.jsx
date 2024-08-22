import React, { useState } from 'react'

const Blog = () => {
    const [newBlog, setNewBlog,] = useState("")
    const [blogs, setBlog] = useState([])

    const handleChange = (e) => {
        setNewBlog(e.target.value)
    }
    const handleSubmit = () => {
        setBlogs((prev) => {
            return [...prev, newBlog];
        });
    }



    return (
        <>

            <div>Blog</div>

            <input onChange={(e) => handleChange(e)} placeHolder="whats your mind say today"></input>
            <button onClick={() => handleSubmit()}>submit</button>

            <div>
                {blogs.length
                    ?
                    (blogs.map((item) => {
                        return (
                            <div style={{}}>
                                <p>{item}</p>
                            </div>
                        )
                    })):(null)}
            </div>



        </>
    )
}

export default Blog