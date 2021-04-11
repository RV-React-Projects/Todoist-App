import React from 'react';
import { db } from '../firebase';
import { RiInboxArchiveFill } from 'react-icons/ri';

export const CheckBox = ({ id }) => {
	const archiveTask = () => {
		db.collection('tasks').doc(id).update({
			archived: true
		});
	};
	return (
		<div className="checkbox-holder" data-testid="checkbox-action" onClick={() => archiveTask()}>
			<RiInboxArchiveFill className="checkbox" />
		</div>
	);
};
