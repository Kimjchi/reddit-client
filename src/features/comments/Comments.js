import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, selectComments } from "./commentsSlice";


export default function Comments({ postId, subreddit }) {
    const comments = useSelector(selectComments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments({postId, subreddit}));
    }, []);

    return (
        <>

        </>
    )
}