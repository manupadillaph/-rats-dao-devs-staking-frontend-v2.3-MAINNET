import { useEffect } from 'react';
import WalletModalBtn from './WalletModalBtn';
//--------------------------------------
export default function Navbar({swCreate}: {swCreate ?: boolean}) {

	return (
		<div className="header">
			<div className="navbar-section navbar-start">
				<ul>
					<li><a href="https://staking.ratsdao.io/">New Staking Portal</a></li>
					<li><a href="/withdraw">Legacy Stake</a></li>
					<li><a href="/admin">Admin Legacy Stake</a></li>
					{/* <li><a href="/create">Create</a></li> */}
					{swCreate === true?
						<li><a href="/settings">Settings</a></li>
						:
						<>	
						</>
					}
					<li><a href="https://staking.ratsdao.io/faq">FAQ</a></li>
				</ul>
			</div>
			<div className="navbar-section navbar-middle">
				<h1><a className="main" href="/">
					RatsDAO Legacy Staking
				</a></h1>
			</div>
			<div className="navbar-section navbar-end">
				<WalletModalBtn />
			</div>
		</div>
	)
}

