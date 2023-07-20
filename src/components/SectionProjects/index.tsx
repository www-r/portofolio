import React from 'react';
import './SectionProjects.styles.scss';
import Section from '@/components/common/Section';
import Title from '../common/Title';
import Slider from '../common/Slider';
export default function SectionProjects() {
	return (
		<Section className="section--projects">
			<Title width="100%" height="15rem" border="bottom">
				<h2>Projects</h2>
				<h3>이제까지 했던 프로젝트들을 정리해보았습니다.</h3>
			</Title>
			<Slider array={[]} />
		</Section>
	);
}
