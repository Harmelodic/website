import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSocialMedia, socialMediaSelector } from './socialMedia';
import { SocialMedia } from '../../../lib/SocialMedia';
import { ColumnInfoBox, RowInfoBox } from '../../../lib/InfoBox';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import { ProjectSmall } from '../../../lib/ProjectSmall';

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSocialMedia());
	}, []);

	const socialMedia = useSelector(socialMediaSelector);

	return (
		<Main>

			<Title>Matt Smith</Title>

			<ColumnInfoBox>
				<span>he/him</span>
				<span>Harmelodic</span>
				<span>Software Engineer</span>
				<span>Musician</span>
				<span>Rock Climber</span>
				<span>Writer</span>
				<span>Dungeon Master</span>
			</ColumnInfoBox>

			<RowInfoBox>
				{
					socialMedia.map((media, index) => {
						return (
							<SocialMedia
								key={index}
								href={media.href}
								title={media.title}
								src={media.src}
							/>
						);
					})
				}
			</RowInfoBox>

			<RowInfoBox>
				<ProjectSmall
					src="/images/cloud-architect.webp"
					title="Cloud Architect"
					href="https://www.credential.net/bd886e12-4a18-4439-8c9a-680107c23547"
					size={100}
				/>
				<ProjectSmall
					src="/images/cfi.png"
					title="Codecademy Chapter Co-Leader"
					href="https://community.codecademy.com/coding-for-immigrants/"
					size={100}
				/>
				<ProjectSmall
					src="/images/cncf.svg"
					title="CNCF Contributor"
					href="https://www.cncf.io/"
					size={60}
				/>
				<ProjectSmall
					src="/images/gitlab.svg"
					title="GitLab Hero"
					href="https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/34774"
					size={60}
				/>
				<ProjectSmall
					src="/images/certificate.svg"
					title="BSc Digital &amp; Technology Solutions"
					href="https://www.aston.ac.uk"
					size={65}
				/>
			</RowInfoBox>

			<ReadingSpace/>
		</Main>
	);
}
