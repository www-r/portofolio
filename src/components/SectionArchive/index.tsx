import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '../common/Section';
import Title from '../common/Title';
import Container from '../common/Container';
import './SectionArchive.styles.scss';
import { githubLogo, githubMarkLogoDark, blogLogo, blogMarkLogo } from '../../../public/icons/icons';

export default function SectionArchive() {
	return (
		<Section className="section--archive">
			<Title border='right'>
				<h2>Archive</h2>
			</Title>
			<Container width="120rem">
				<li className="archive-item">
					<Link href="https://github.com/www-r">
						<Image src={githubMarkLogoDark} alt="github logo" height={42} />
						<Image src={githubLogo} alt="github logo" height={42} />
					</Link>
					<Link className="archive-link" href="https://github.com/www-r">
						github.com/www-r
					</Link>
					<p className="archive-item--text">
						<span className="first-line">
							<b>소스 코드 저장소</b>입니다.
						</span>
						<br />
						<p>
							팀 프로젝트 소스 코드,
							<br />
							개인 프로젝트 소스 코드,
							<br />
							공부한 내용들을 적어둔 소스 코드,
							<br />
							수강한 강의 소스 코드 등이 있습니다.
						</p>
					</p>
				</li>
				<li className="archive-item">
					<Link href="https://blog.naver.com/inmein">
						<Image src={blogLogo} alt="blog logo" height={42} />
					</Link>
					<Link className="archive-link" href="https://blog.naver.com/inmein">
						blog.naver.com/inmein
					</Link>
					<p className="archive-item--text">
						<span className="first-line">
							<b>공부한 내용들과 기억하면 좋을 내용들을 정리한 블로그</b>입니다.
						</span>
						<br />
						<p>
							다시 한번 블로그에 정리하면서 새로 공부한 내용들을 복습하고 이해하기 위한 기록
							<br />
							프로젝트를 진행하면서 마주친 에러들과 그에 대한 해결 방법을 모아두기 위한 기록
						</p>
					</p>
				</li>
			</Container>
		</Section>
	);
}
