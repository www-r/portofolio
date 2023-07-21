import Image from 'next/image';
import Header from '@/components/common/Header';
import SectionAbout from '@/components/SectionAbout';
import SectionArchive from '@/components/SectionArchive';
import SectionSkills from '@/components/SectionSkills';
import SectionProjects from '@/components/SectionProjects';
import SectionContact from '@/components/SectionContact';
import SectionProjectDetails from '@/components/SectionProjectDetails';
import Footer from '@/components/common/Footer';
import Button from '@/components/common/Button/Button';
import { arrowTopIcon } from '../../public/icons';
import { project1 } from '@/constants/project1';
import { project2 } from '@/constants/project2';
import { project3 } from '@/constants/project3';
import { project4 } from '@/constants/project4';
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
			{/* <SectionProjectDetails
				video={project1.video}
				skills={project1.skills}
				whatIDid={project1.whatIDid}
				whatWasHard={project1.whatWasHard}
				whatILearned={project1.whatILearned}
			/> */}
			<Button className="scroll-top-btn">
				<Image src={arrowTopIcon} alt="scroll top button" width={48} />
			</Button>
		</>
	);
}
