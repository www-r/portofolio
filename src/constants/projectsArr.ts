import { Project } from '@/interfaces/ComponentProps';
import { todolist, marketlog, admin, hotelbnb, portfolio } from '../../public/images';

export const projectsArr: Project[] = [
	{
		image: todolist,
		title: 'Todolist',
		summary: '로그인, 회원가입 기능이 있는 투두리스트입니다. 새로 배울 때 마다, 하나씩 추가됩니다.',
		skills: '코어: JavaScript, TypeScript, React, CSS, Sass(SCSS), styled-components',
		members: 1,
		id: 'project0',
	},
	{
		image: marketlog,
		title: 'Marketlog - 개발자들을 위한 쇼핑몰',
		summary: '쇼핑몰의 기능이 다 들어있는 사이트입니다. 어드민 페이지도 같이 만들었습니다.  ',
		skills: '코어: JavaScript, TypeScript, Sass(SCSS), ',
		members: 5,
		id: 'project1',
	},
	{
		image: admin,
		title: '3DAsset (Admin)',
		summary: '관리자 페이지입니다. 물건을 추가, 삭제, 수정, 조회, 필터링 등을 할 수 있습니다. ',
		skills: '코어: Next.js, TypeScript, Tailwind CSS, React Query, Redux Toolkit',
		members: 4,
		id: 'project2',
	},
	{
		image: hotelbnb,
		title: 'Hotelbnb - 국내 숙소 예약 사이트',
		summary: '지도와 달력으로 검색이 가능한 국내 숙소 예약 사이트 입니다.',
		skills: '코어: React, Emotion, React Query, Firebase',
		members: 3,
		id: 'project3',
	},
	{
		image: portfolio,
		title: '개인 포트폴리오 사이트',
		summary:
			'Next.js 13 버전을 적용해서 만들어 보았고, SEO를 신경 썼습니다. 최대한 라이브러리를 적게 쓰려고 했습니다. ',
		skills: '코어: Next.js, TypeScript, Sass(SCSS)',
		members: 1,
		id: 'project4',
	},
];
