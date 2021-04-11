import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SelectedProjectsContext = createContext();
export const SelectedProjectsProvider = ({ children }) => {
	const [ selectedProject, setSelectedProject ] = useState('INBOX');

	return (
		<SelectedProjectsContext.Provider value={{ selectedProject, setSelectedProject }}>
			{children}
		</SelectedProjectsContext.Provider>
	);
};

export const useSelectedProjectsValue = () => useContext(SelectedProjectsContext);

SelectedProjectsProvider.propTypes = {
	children: PropTypes.node.isRequired
};
