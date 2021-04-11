import React, { useEffect } from 'react';
import { CheckBox } from './CheckBox';
import { useTasks } from '../Hooks';
import { collectedTasks } from '../Constants';
import { getTitle, getCollatedTitle, collectedTasksExist } from '../Helpers';
import { useSelectedProjectsValue, useProjectsValue } from '../Context';
import { AddTask } from './AddTask';

export const Tasks = () => {
	const { selectedProject } = useSelectedProjectsValue();
	const { projects } = useProjectsValue();
	const { tasks } = useTasks(selectedProject);

	let projectName = '';

	if (collectedTasksExist(selectedProject) && selectedProject) {
		projectName = getCollatedTitle(collectedTasks, selectedProject).name;
	}

	if (projects && projects.length > 0 && selectedProject && !collectedTasksExist(selectedProject)) {
		projectName = getTitle(projects, selectedProject).name;
	}

	useEffect(() => {
		document.title = `${projectName}: Todoist`;
	});

	return (
		<div className="tasks" data-testid="tasks">
			<h2 data-testid="project-name">{projectName}</h2>

			<ul className="tasks__list">
				{tasks.map((task) => (
					<li key={`${task.id}`}>
						<CheckBox id={task.id} taskDesc={task.task} />
						<span>{task.task}</span>
					</li>
				))}
			</ul>
			<AddTask />
		</div>
	);
};
