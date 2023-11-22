import "./rightbar.css"

import Online from "../online/Online"
import { Users } from "../../dummyData"

export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" class="birthdayImg" alt="" />
                    <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a borthday today. </span>
                </div>
                <img src="/assets/ad.png" class="rightbarAd" alt="" />
                <h4 className="rightbarTitle">Online</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowings">
                        {Array.from({ length: 6 }, (_, i) => (
                            <div className="rightbarFollowing" key={i}>
                                <img src={`assets/person/${i + 1}.jpeg`} alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">John Carter</span>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                { profile ? <ProfileRightbar /> : <HomeRightbar/> }
            </div>
        </div>
    )
}
