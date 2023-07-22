import { Project } from '@/interfaces/ComponentProps';
import { todolist, marketlog, admin, hotelbnb, portfolio } from '../../public/images';

export const projectsArr: Project[] = [
		{
			image: todolist,
			title: '투두리스트',
			skills: 'Javascript, Typescript, React, CSS, SCSS, styled-components',
			members: 1,
			id: 'project0',
		},
		{
			image: marketlog,
			title: '마켓로그 - 개발자들을 위한 쇼핑몰',
			skills: 'Javascript, Typescipt, SCSS, ',
			members: 5,
			id: 'project1',
		},
		{
			image: admin,
			title: '3DAsset',
			skills: 'javascript, typescript',
			members: 4,
			id: 'project2',
		},
		{
			image: hotelbnb,
			title: '호텔비앤비',
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