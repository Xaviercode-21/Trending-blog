import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {

    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('Xavier');
    const[isPending,setIsPending]=useState(false);
    const navigate=useNavigate();

    const hanldeSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};

        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)

        }).then(()=>{
            console.log("Blog added successfully");
            setIsPending(false);
            //history.go(-2); goes two steps back from where you are currently
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={hanldeSubmit}>
                <label>Blog Title</label>
                <input 
                type="text"
                 required
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog Body</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Author</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)} >
                    <option value="Xavier">Xavier</option>
                    
                    <option value="Undisclosed">UnKnown</option>
                </select>
                {!isPending &&<button>Add Blog</button>}
                {isPending &&<button disabled>Adding Blog...</button>}
            </form>
         
        </div>
     );
}
 
export default Create;