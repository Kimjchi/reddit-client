import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Comments from "../comments/Comments";
import { selectCurrentPost } from "./postsSlice";

export default function Post() {
    const { postId, subreddit } = useParams();
    const post = useSelector(selectCurrentPost);
    return (
        <>
        <div className="cards-container">
            <div className="card">
                {post.is_video && post.thumbnail !== 'nsfw' && (
                    <video controls autoPlay loop muted>
                        <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                {post.post_hint !== 'link' && post.is_video !== true && post.thumbnail !== 'self' && post.thumbnail !== 'default' && post.thumbnail !== 'nsfw' && <img src={post.url_overridden_by_dest} alt="Avatar" style={{width: '100%'}} />}
                <div className="container">
                    <h4><b>{post.title}</b></h4>
                </div>
            </div>
            <Comments postId={postId} subreddit={subreddit} />
        </div>    
        </>
    )
}