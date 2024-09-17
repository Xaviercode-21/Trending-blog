import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

   const{data:blogs,isLoading,error}=useFetch('http://localhost:8000/blogs');

    //const [name,setName]=useState('Julian');
    //const [age,setAge]=useState(25);
    /*<h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>

    const handleClick=()=>{
       // console.log('Hello user');
       setName('Xavier');
       setAge(21);
    }*/
   
   /*const handleDelete=(id)=>{
    const newblog=blogs.filter(blog=>blog.id !==id);
    setBlogs(newblog);
   }*/

  
    return ( 
        <div className="Home">
         {error && <div>{error}</div>}
         {isLoading && <div>Loading...</div>}
          { blogs && <BlogList blogs={blogs} title="All Blogs!"// handleDelete={handleDelete}
          />}
        </div>
     );
}
 
export default Home;