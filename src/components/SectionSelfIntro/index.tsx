import React, { useEffect, useRef } from 'react';
import './SectionSelfIntro.styles.scss';
import NavigateButton from '../common/Button/NavigateButton';
import Slider from '../common/Slider';

export default function SectionSelfIntro() {
	return (
		<section>
			<div className="image-container"></div>
			<div>
				<p className="short-introduction">
					안녕하세요.
					<br />
					저는 많은 사람들과 의견을 나누는 것을 좋아하고,
					<br />
					기존의 지식과 새로 습득한 지식을 조합해서 새로운 해결 방법을 찾아내는 것이 즐거운 프론트엔드 개발자입니다.
					<br />
					어떻게 하면 모두가 이해하기 쉽게 쓸 수 있는 컴포넌트 구조를 짤 수 있을까에 대해 고민을 계속 하고 있고,
					<br />
					최근에는 상황에 따른 SSG, SSR, CSR에 대해서도 관심이 생겨서 Next.js 도 같이 공부하며 적용하고 있습니다.
				</p>
				<NavigateButton>더 알아보기</NavigateButton>
			</div>
			<div className="container">
				<div className="photo-container">d</div>
				<Slider />
			</div>
		</section>
	);
}
