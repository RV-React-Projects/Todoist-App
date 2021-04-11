import moment from 'moment';
import { useState, useEffect } from 'react';
import { db } from '../firebase';

import { collectedTasksExist } from '../Helpers';

export const useTasks = (selectedProjects) => {
	const [ tasks, setTasks ] = useState([]);
	const [ archivedTasks, setArchivedTasks ] = useState([]);

	useEffect(
		() => {
			let unsubscribe = db.collection('tasks').where('userId', '==', 'jlIFXIwyAL3tzHMtzRbw');

			unsubscribe =
				selectedProjects && !collectedTasksExist(selectedProjects)
					? (unsubscribe = unsubscribe.where('projectId', '==', selectedProjects))
					: selectedProjects === 'TODAY'
						? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')))
						: selectedProjects === 'INBOX' || selectedProjects === 0
							? (unsubscribe = unsubscribe.where('date', '==', ''))
							: unsubscribe;

			unsubscribe = unsubscribe.onSnapshot((snapshot) => {
				const newTasks = snapshot.docs.map((task) => ({
					id: task.id,
					...task.data()
				}));

				setTasks(
					selectedProjects === 'NEXT_7'
						? newTasks.filter((task) => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true)
						: newTasks.filter((task) => task.archived !== true)
				);

				setArchivedTasks(newTasks.filter((task) => task.archived !== false));
			});
			return () => unsubscribe();
		},
		[ selectedProjects ]
	);
	return { tasks, archivedTasks };
};

export const useProjects = () => {
	const [ projects, setProjects ] = useState([]);

	useEffect(
		() => {
			db
				.collection('projects')
				.where('userId', '==', 'jlIFXIwyAL3tzHMtzRbw')
				.orderBy('projectId')
				.get()
				.then((snapshot) => {
					const allProjects = snapshot.docs.map((project) => ({
						...project.data(),
						docId: project.id
					}));

					if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
						setProjects(allProjects);
					}
				});
		},
		[ projects ]
	);
	return { projects, setProjects };
};
