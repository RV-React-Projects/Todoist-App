import React from 'react';

export const Header = () => {
	return (
		<header className="header" data-testid="header">
			<nav>
				<div className="logo">
					<img src="./images/logo.png" alt="Todoist Logo" />
				</div>
				<div className="settings">
					<ul>
						<li className="setting__add" data-testid="quick-add-task-action">
							<span role="img" aria-label="add">
								{' '}
								➕
							</span>
						</li>
						<li className="setting__darkmode" data-testid="dark-mode-action">
							<span role="img" aria-label="pizza">
								🍕
							</span>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
