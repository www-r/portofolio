import React from 'react';
import Image from 'next/image';
import './ProjectBox.styles.scss';
import { ProjectBoxProps } from '@/interfaces/ComponentProps';

export default function ProjectBox({ index, project, isClicked, setIsClicked, shown }: ProjectBoxProps) {
	const clickHandler = () => {
		const arr = isClicked.slice();
		arr[index] = !isClicked[index];
		setIsClicked(arr);
	};
	return (
		<div className={`${shown} project-box`} onClick={clickHandler}>
			<div className="project--image-container">
				<Image src={project.image} alt="project image" height={300} width={399} />
			</div>
			<div className="project--text">
				<div className="project--name">{project.title}</div>
				<div className="project--summary">{project.summary}</div>
				<div className="project--skills">{project.skills}</div>
			</div>
		</div>
	);
}
