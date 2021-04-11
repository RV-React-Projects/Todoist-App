import React, { useState } from 'react';
import {
	// FcNext,
	FcExpand,
	FcCalendar,
	// FcFullTrash,
	// FcPlus,
	// FcOk,
	FcPlanner,
	// FcApproval,
	// FcAlarmClock,
	// FcAbout,
	FcInvite
} from 'react-icons/fc';
import { useSelectedProjectsValue } from '../../Context';
import { AddProjects } from '../AddProjects';
import { Projects } from '../Projects';

const SideBar = () => {
	const { setSelectedProject } = useSelectedProjectsValue();
	const [ active, setActive ] = useState('inbox');
	const [ showProjects, setShowProjects ] = useState(true);
	return (
		<div className="sidebar" data-testid="sidebar">
			<ul className="sidebar__generic">
				<li
					className={active === 'inbox' ? 'active' : undefined}
					data-testid="inbox"
					onClick={() => {
						setActive('Inbox');
						setSelectedProject('INBOX');
					}}
				>
					<span>
						<FcInvite />
					</span>
					<span>Inbox</span>
				</li>
				<li
					className={active === 'today' ? 'active' : undefined}
					data-testid="today"
					onClick={() => {
						setActive('Today');
						setSelectedProject('TODAY');
					}}
				>
					<span>
						<FcPlanner />
					</span>
					<span>Today</span>
				</li>
				<li
					data-testid="next_7"
					className={active === 'next_7' ? 'active' : undefined}
					onClick={() => {
						setActive('Next_7');
						setSelectedProject('NEXT_7');
					}}
				>
					<span>
						<FcCalendar />
					</span>
					<span>Next 7 Days</span>
				</li>
			</ul>
			<div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
				<span>
					<FcExpand className={!showProjects ? 'hidden-projects' : undefined} />
				</span>
				<h2>Project</h2>
			</div>
			<ul className="sidebar__projects"> {showProjects && <Projects />}</ul>
			{showProjects && <AddProjects />}
		</div>
	);
};

export default SideBar;
