import React from 'react';
import Image from 'next/image';
import './ProjectBox.styles.scss';
import { ProjectBoxProps } from '@/interfaces/ComponentProps';

export default function ProjectBox({ image, title, skills, members }: ProjectBoxProps) {
	return (
		<div className="project-box">
			<div className="project--image-container">
				<Image src={image} alt="project image" height={300} width={399} />
			</div>
			<div className="project--text">
				<div className="project-name">{title}</div>
				<div className="skills-container">{skills}</div>
			</div>
		</div>
	);
}
