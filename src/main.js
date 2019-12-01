import {createBoardTemplate} from './components/board.js';
import {createFilterTemplate} from './components/filter.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createTaskTemplate} from './components/task.js';
import {createSiteMenuTemplate} from './components/site-menu.js';

const TASK_COUNT = 3;

const render=(container,template,place) => {
			container.insertAdjacentHTML(place,template);
	};
	
	const siteMainElement = document.querySelector(`.main`);
	const siteHeaderElement= siteMainElement.querySelector(`.main__control`);
	
	render(siteHeaderElement,createSiteMenuTemplate(),`beforeend`);
	render(siteMainElement,createFilterTemplate(),`beforeend`);
	render(siteMainElement,createBoardTemplate(),`beforeend`);
	const taskListElement = siteMainElement.querySelector(`.board__tasks`);
	render(taskListElement,createTaskEditTemplate(),`beforeend`);
	new Array(TASK_COUNT).fill(``).forEach(()=> render(taskListElement,createTaskTemplate(),`beforeend`));
	const boardElement = siteMainElement.querySelector(`.board`);
	render(boardElement,createLoadMoreButtonTemplate(),`beforeend`);