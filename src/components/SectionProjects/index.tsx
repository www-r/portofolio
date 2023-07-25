'use client';
import React, { useState } from 'react';
import './SectionProjects.styles.scss';
import Section from '@/components/common/Section';
import Title from '../common/Title';
import ProjectBox from '@/components/common/ProjectBox';
import SectionProjectDetails from '../SectionProjectDetails';
import { projectsArr } from '@/constants/projectsArr';
import { todolist } from '@/constants/todolist';
import { marketlog } from '@/constants/marketlog';
import { admin } from '@/constants/admin';
import { hotelbnb } from '@/constants/hotelbnb';
import { portfolio } from '@/constants/portfolio';

export const SectionProjects = () => {
	const [isClicked, setIsClicked] = useState(Array(projectsArr.length).fill(false));
	return (
		<>
			<Section className="section--projects">
				<Title width="100%" height="15rem" border="bottom">
					<h2>Projects</h2>
					<h3>
						이제까지 했던 프로젝트들을 정리해보았습니다. 프로젝트를 클릭하면 해당하는 프로젝트의 상세 설명이 나옵니다.
					</h3>
				</Title>
				{/* <Slider array={[]} /> */}
				<div
					className="projectBox-wrapper"
					style={{ display: 'flex', overflow: 'auto', marginTop: '5rem', border: '1px solid #000' }}
				>
					{projectsArr.map((project, index) => (
						<ProjectBox
							key={project.id}
							index={index}
							project={project}
							isClicked={isClicked}
							setIsClicked={setIsClicked}
							shown={isClicked[index] ? 'shown' : ''}
						/>
					))}
				</div>
				{isClicked[0] && (
					<SectionProjectDetails index={0} isClicked={isClicked} setIsClicked={setIsClicked} projectDetail={todolist} />
				)}
				{isClicked[1] && (
					<SectionProjectDetails
						index={1}
						isClicked={isClicked}
						setIsClicked={setIsClicked}
						projectDetail={marketlog}
					/>
				)}
				{isClicked[2] && (
					<SectionProjectDetails index={2} isClicked={isClicked} setIsClicked={setIsClicked} projectDetail={admin} />
				)}
				{isClicked[3] && (
					<SectionProjectDetails index={3} isClicked={isClicked} setIsClicked={setIsClicked} projectDetail={hotelbnb} />
				)}
				{isClicked[4] && (
					<SectionProjectDetails
						index={4}
						isClicked={isClicked}
						setIsClicked={setIsClicked}
						projectDetail={portfolio}
					/>
				)}
			</Section>
		</>
	);
};

export default SectionProjects;
