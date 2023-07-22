import { Project } from '@/interfaces/ComponentProps';
import { todolist, marketlog, admin, hotelbnb, portfolio } from '../../public/images';

export const projectsArr: Project[] = [
	{
		image: todolist,
		title: 'Todolist',
		skills: 'Javascript, Typescript, React, CSS, SCSS, styled-components',
		members: 1,
		id: 'project0',
	},
	{
		image: marketlog,
		title: 'Marketlog - 개발자들을 위한 쇼핑몰',
		skills: 'Javascript, Typescipt, SCSS, ',
		members: 5,
		id: 'project1',
	},
	{
		image: admin,
		title: '3DAsset (Admin)',
		skills: 'javascript, typescript',
		members: 4,
		id: 'project2',
	},
	{
		image: hotelbnb,
		title: 'Hotelbnb - 국내 숙소 예약 사이트',
		skills: 'React, emotion, ReactQuery, Firebase',
		members: 3,
		id: 'project3',
	},
	{
		image: portfolio,
		title: '개인 포트폴리오 사이트',
		skills: 'javascript, typescript',
		members: 1,
		id: 'project4',
	},
];
