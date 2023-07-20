import Image from 'next/image';
import Header from '@/components/common/Header';
import SectionAbout from '@/components/SectionAbout';
import SectionArchive from '@/components/SectionArchive';
import SectionSkills from '@/components/SectionSkills';
import SectionProjects from '@/components/SectionProjects';
import SectionContact from '@/components/SectionContact';
import Footer from '@/components/common/Footer';
import Button from '@/components/common/Button/Button';
import { arrowTopIcon } from '../../public/icons';

export default function Home() {
	return (
		<>
			<Header />
			<div style={{ height: '19rem', width: '100vw' }}></div>
			<SectionAbout />
			<SectionArchive />
			<SectionSkills />
			<SectionProjects />
			<SectionContact />
			<Footer />
			<Button className="scroll-top-btn">
				<Image src={arrowTopIcon} alt="scroll top button" width={48} />
			</Button>
		</>
	);
}
