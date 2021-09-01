import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectPosts } from "./postsSlice";

export default function Posts() {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch request to middleware? 
        dispatch(fetchPosts());
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