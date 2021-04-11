import React from 'react';
import Content from './Components/Layouts/Content';
import { Header } from './Components/Layouts/Header';
import { ProjectsProvider, SelectedProjectsProvider } from './Context';

export const App = () => {
	return (
		<SelectedProjectsProvider>
			<ProjectsProvider>
				<Header />
				<Content />
			</ProjectsProvider>
		</SelectedProjectsProvider>
	);
};
