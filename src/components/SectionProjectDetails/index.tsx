import React from 'react';
import Image from 'next/image';
import './SectionProjectDetails.styles.scss';
import Button from '../common/Button/Button';
import { closeIcon } from '../../../public/icons';
import { ProjectDetailsProps } from '@/interfaces/ComponentProps';
import { todolistVideo1, todolistVideo2 } from '../../../public/videos';
export default function SectionProjectDetails({ index, isClicked, setIsClicked, projectDetail }: ProjectDetailsProps) {
	const clickHandler = () => {
		const arr = isClicked.slice();
		arr[index] = false;
		setIsClicked(arr);
	};
	return (
		<div className="project-details-modal">
			<ul className="details-container">
				{/* <video src='../../../videos/todolist-login'></video>
				<video src={todolistVideo2}></video> */}
				{projectDetail}
				<Button className="close-icon" onClick={clickHandler}>
					<Image src={closeIcon} alt="close icon" />
				</Button>
			</ul>
		</div>
	);
}
