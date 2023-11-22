import "./post.css"

import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
    const [likes, setLikes] = useState(post.likes)
    const [isLiked, setIsLiked] = useState(false);

    const LikeHandler = () => {
        setLikes(isLiked ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
    }
    
    const user = Users.filter(u => u.id === post.userId)[0]; //first element
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={user.profilePicture} alt="" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt={post.photo ? 'Post Image' : ''} />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/heart.png" onClick={LikeHandler} alt="" />
                        <img className="likeIcon" src="/assets/like.png" onClick={LikeHandler} alt="" />
                        <span className="postLikeCounter">{likes} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comments === 1 ? `${post.comments} comment` : `${post.comments} comments`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
