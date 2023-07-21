import React from 'react';
import Image from 'next/image';
import './SectionProjectDetails.styles.scss';
import Button from '../common/Button/Button';
import { closeIcon } from '../../../public/icons';
import { ProjectDetails } from '@/interfaces/ComponentProps';

export default function SectionProjectDetails({ video, skills, whatIDid, whatWasHard, whatILearned }: ProjectDetails) {
	return (
		<div className="project-details-modal">
			<ul className="details-container">
				<li>
					<h2>시연 영상</h2>
					<div>{video}</div>
				</li>
				<li>
					<h2>기술스택</h2>
					{skills}
				</li>
				<li>
					<h2>맡았던 부분</h2>
					{whatIDid}
				</li>
				<li>
					<h2>어려웠던 점</h2>
					{whatWasHard}
				</li>
				<li>
					<h2>배운 점</h2>
					{whatILearned}
				</li>
				<Button className="close-icon">
					<Image src={closeIcon} alt="close icon" />
				</Button>
			</ul>
		</div>
	);
}
