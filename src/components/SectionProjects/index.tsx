import React from 'react';
import './SectionProjects.styles.scss';
import Section from '@/components/common/Section';
import Title from '../common/Title';
import Slider from '../common/Slider';
import ProjectBox from '../common/ProjectBox';
import { Project } from '@/interfaces/ComponentProps';
import { project0, project1 } from '../../../public/images';
import { marketlog, admin, hotelbnb, portfolio } from '../../../public/images';
export default function SectionProjects() {
	const projectsArr: Project[] = [
		{
			image: project0,
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
	return (
		<Section className="section--projects">
			<Title width="100%" height="15rem" border="bottom">
				<h2>Projects</h2>
				<h3>
					이제까지 했던 프로젝트들을 정리해보았습니다. 프로젝트를 클릭하면 해당하는 프로젝트의 상세 설명이 나옵니다.
				</h3>
			</Title>
			{/* <Slider array={[]} /> */}
			<div style={{ display: 'flex', overflow: 'auto', marginTop: '5rem', border: '1px solid #000' }}>
				{projectsArr.map((project) => (
					<ProjectBox
						id={project.id}
						key={project.id}
						image={project.image}
						title={project.title}
						skills={project.skills}
						members={project.members}
					/>
				))}
			</div>
		</Section>
	);
}
