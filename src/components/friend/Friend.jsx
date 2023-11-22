import "./friend.css"

export default function Friend({ user }) {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} className="sidebarFriendImg" alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
