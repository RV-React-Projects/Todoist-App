import React from 'react';
import SideBar from './SideBar';
import { Tasks } from '../Tasks';

const Content = () => {
	return (
		<section>
			<SideBar />
			<Tasks />
		</section>
	);
};

export default Content;
