import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import './topbar.css'

export default function Topbar() {
	return (
		<div className='topbarContainer'>
			<div className="topbarLeft">
				<span className="logo">AnzarOnline</span>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<Search className='searchIcon' />
					<input type="text" placeholder='Search for friends, posts or videos' className="searchInput" />
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">Homepage</span>
					<span className="topbarLink">Timeline</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Person />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Chat />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBadge">1</span>
					</div>
				</div>
				<img src="/assets/person/1.jpeg" alt="" className='topbarImg' />
			</div>
		</div>
	)
}
