import { useState ,useEffect} from "react";
import Bloglist from "./Bloglist";
import useFetch from "./usefetch";

const Home = () => {
const {data:blogs, isPending,error} =useFetch('http://localhost:8000/blogs')
    // const[name,setName]=useState('mario');

    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter(blog=> blog.id!== id)
    //     setBlogs(newBlogs);
    // }
    // handleDelete={handleDelete}, we were first passing this as prop but it deleted the data only at the frontend
// fetch data , for authentication
    

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading..</div>}
             {blogs && <Bloglist blogs={blogs} title='All blogs !' />}
            {/* blogs && <Bloglist blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's blogs"/> */}
            {/* <button onClick={()=>setName('luigi')}>Change name</button>
            <p>{name}</p> */}
        </div>
     );  
}
 
export default Home;