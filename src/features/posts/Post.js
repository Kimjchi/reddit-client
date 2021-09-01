import { useParams } from "react-router";
import Comments from "../comments/Comments";

export default function Post() {
    const { postId, subreddit } = useParams();
    return (
        <>
            Test post {postId}        
            <Comments postId={postId} subreddit={subreddit} />
        </>
    )
}