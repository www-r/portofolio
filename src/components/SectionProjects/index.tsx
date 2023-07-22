import React from 'react';
import './SectionProjects.styles.scss';
import Section from '@/components/common/Section';
import Title from '../common/Title';
import Slider from '../common/Slider';
import ProjectBox from '../common/ProjectBox';
import { projectsArr } from '@/constants/projectsArr';
export default function SectionProjects() {
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
						summary={project.summary}
						skills={project.skills}
						members={project.members}
					/>
				))}
			</div>
		</Section>
	);
}
