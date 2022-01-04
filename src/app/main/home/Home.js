// noinspection HtmlUnknownAnchorTarget

import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSocialMedia } from './middleware';
import { SocialMedia } from '../../../lib/SocialMedia';
import { RowInfoBox, ColumnInfoBox } from '../../../lib/InfoBox';
import { Main } from '../Main';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';
import { ProjectSmall } from '../../../lib/ProjectSmall';

const HomeMain = styled(Main)`
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
`;

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSocialMedia());
	}, []);

	const socialMedia = useSelector(store => store.socialMedia);

	return (
		<HomeMain>

			<Title>Matt Smith</Title>

			<ColumnInfoBox>
				<span>he/him</span>
				<span>Harmelodic</span>
				<span>Software Engineer</span>
				<span>Consultant</span>
				<span>Writer</span>
				<span>Designer</span>
				<span>Musician</span>
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
					src="/images/cloud-professional-architect.webp"
					background="#374850"
					title="Professional Cloud Architect"
					href="https://www.credential.net/bd886e12-4a18-4439-8c9a-680107c23547"
					size={100}
				/>
				<ProjectSmall
					src="/images/CFI.webp"
					background=""
					title="Codecademy Chapter Co-Leader"
					href="https://community.codecademy.com/coding-for-immigrants/"
					size={100}
				/>
				<ProjectSmall
					src="/images/gitlab.svg"
					background=""
					title="GitLab Hero"
					href="https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/34774"
					size={60}
				/>
				<ProjectSmall
					src="/images/certificate.svg"
					background=""
					title="BSc Digital &amp; Technology Solutions"
					href="https://www.aston.ac.uk"
					size={65}
				/>
			</RowInfoBox>
			<ReadingSpace />
		</HomeMain>
	);
}
