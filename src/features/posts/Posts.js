import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";

export default function Posts() {
    const posts = useSelector(selectPosts);

    useEffect(() => {
        // Dispatch request to middleware? 
    }, []);

    return (
        <>
            {
                // for each posts add a new post element 
                'POSTS'
            }
        </>
    )
}