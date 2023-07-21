import React from 'react';
import Section from '../common/Section';
import Title from '../common/Title';
import Icon from '../common/Icon';
import {
	reactIcon,
	nextjsIcon,
	typescriptIcon,
	htmlIcon,
	javascriptIcon,
	reactqueryIcon,
	reduxIcon,
	cssIcon,
	tailwindcssIcon,
	styledcomponentsIcon,
	yarnIcon,
	npmIcon,
	vercelIcon,
	netlifyIcon,
	gitIcon,
	githubMarkLogoDark,
} from '../../../public/icons';
import Image from 'next/image';
import './SectionSkills.styles.scss';

import DivisionLine from '../common/DivisionLine';
export default function SectionSkills() {
	return (
		<Section className="section--skills">
			<Title border="right">
				<h2>Skills</h2>
				<h3>현재까지 사용해본 그리고 사용할 수 있는 기술들입니다. </h3>
				<ul className="colors--explanations-container">
					<li className="color--explanation-wrapper">
						<div className="colored-circle skill--high"></div>
						<p className="green-darkest color-explanation">
							대부분의 동작 원리를 이해하고 있고, 꾸준히 공부하는 중입니다. 필요에 맞게 프로젝트에 적용 가능합니다.
						</p>
					</li>
					<li className="color--explanation-wrapper">
						<div className="colored-circle skill--middle"></div>
						<p className="green color-explanation">
							큰 어려움없이 사용할 수 있지만, 원리를 설명하기엔 부족합니다. 필요에 맞게 프로젝트에 적용 가능합니다.
						</p>
					</li>
					<li className="color--explanation-wrapper">
						<div className="colored-circle skill--low"></div>
						<p className="green-brightest color-explanation">공식문서를 참조하면서 코드를 읽고 쓸 수 있습니다.</p>
					</li>
				</ul>
			</Title>
			<DivisionLine direction="column" />
			<div className="skills--second-column">
				<div className="cell">
					<h3>코어</h3>
					<div className="icons-container">
						<Icon name="React" color="#354f52">
							<Image src={reactIcon} alt="react icon" height={42} />
						</Icon>
						<Icon name="Next.js" color="#52796f">
							<Image src={nextjsIcon} alt="Next.js icon" height={42} />
						</Icon>
						<Icon name="Typescript" color="#52796f">
							<Image src={typescriptIcon} alt="typescript icon" height={42} />
						</Icon>
						<Icon name="HTML" color="#354f52">
							<Image src={htmlIcon} alt="html icon" height={42} />
						</Icon>
						<Icon name="Javascript" color="#354f52">
							<Image src={javascriptIcon} alt="Javascript icon" height={42} />
						</Icon>
					</div>
				</div>
				<div className="cell">
					<h3>상태관리</h3>

					<div className="icons-container">
						<Icon name="React Query" color="#84a98c">
							<Image src={reactqueryIcon} alt="react query icon" height={42} />
						</Icon>
						<Icon name="Redux" color="#84a98c">
							<Image src={reduxIcon} alt="redux icon" height={42} />
						</Icon>
					</div>
				</div>
				<div className="cell ">
					<h3>스타일링</h3>

					<div className="icons-container">
						<Icon name="CSS" color="#354f52">
							<Image src={cssIcon} alt="css icon" height={42} />
						</Icon>
						<Icon name="Tailwind CSS" color="#354f52">
							<Image src={tailwindcssIcon} alt="tailwindcss icon" height={42} />
						</Icon>
						<Icon name="styled-components" color="#354f52">
							<Image src={styledcomponentsIcon} alt="styled-components icon" height={42} />
						</Icon>
					</div>
				</div>
				<div className="cell ">
					<h3>패키지 매니저</h3>
					<div className="icons-container">
						<Icon name="yarn" color="#52796f">
							<Image src={yarnIcon} alt="yarn icon" height={42} />
						</Icon>
						<Icon name="npm" color="#52796f">
							<Image src={npmIcon} alt="npm icon" height={42} />
						</Icon>
					</div>
				</div>
				<div className="cell ">
					<h3>배포</h3>
					<div className="icons-container">
						<Icon name="Vercel" color="#52796f">
							<Image src={vercelIcon} alt="varcel icon" height={42} />
						</Icon>
						<Icon name="Netlify" color="#52796f">
							<Image src={netlifyIcon} alt="netlify icon" height={42} />
						</Icon>
					</div>
				</div>
				<div className="cell ">
					<h3>버전 관리 및 협업툴</h3>
					<div className="icons-container">
						<Icon name="git" color="#354f52">
							<Image src={gitIcon} alt="git icon" height={42} />
						</Icon>
						<Icon name="Github" color="#354f52">
							<Image src={githubMarkLogoDark} alt="github icon" height={42} />
						</Icon>
					</div>
				</div>
			</div>
		</Section>
	);
}
