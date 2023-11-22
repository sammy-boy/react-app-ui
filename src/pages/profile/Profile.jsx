import "./profile.css";

import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
    return (
        <>
            <Topbar />

            <div className="profileContainer">
                <Sidebar />
                <div className="profileRight">

                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/3.jpeg" className="profileCoverImg" alt="" />
                            <img src="assets/person/7.jpeg" className="profileUserImg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Sammy James</h4>
                            <span className="profileInfoDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nisi?</span>
                        </div>                            
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>

                </div>
            </div>
        </>
    )
}
