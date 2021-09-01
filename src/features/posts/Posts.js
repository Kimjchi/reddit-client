import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts, selectPosts, setCurrentPost } from "./postsSlice";
import './Posts.css';

export default function Posts() {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch request to middleware? 
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleClickPost = (post) => {
        dispatch(setCurrentPost(post));
    };

    return (
        <div className='cards-container'>
            {
                // for each posts add a new post element 
                posts.map(post => (
                    <Link key={post.id} to={`/post/${post.subreddit}/${post.id}`} onClick={() => handleClickPost(post)}>
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
                    </Link>
                ))
            }
        </div>
    )
}