import React from 'react';
import './SectionProjects.styles.scss';
import Section from '@/components/common/Section';
import Title from '../common/Title';
import Slider from '../common/Slider';
import ProjectBox from '../common/ProjectBox';
import { Project } from '@/interfaces/ComponentProps';
import { project0, project1 } from '../../../public/images';

export default function SectionProjects() {
	const projectsArr: Project[] = [
		{
			image: project0,
			title: 'Project1',
			skills: 'javascript, typescript',
			members: 1,
			id: 'project0',
		},
		{
			image: project1,
			title: 'Project2',
			skills: 'javascript, typescript',
			members: 1,
			id: 'project1',
		},
		{
			image: project1,
			title: 'Project2',
			skills: 'javascript, typescript',
			members: 1,
			id: 'project2',
		},
		{
			image: project1,
			title: 'Project2',
			skills: 'javascript, typescript',
			members: 1,
			id: 'project3',
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
