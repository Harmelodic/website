// noinspection HtmlUnknownAnchorTarget

import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSocialMedia } from './middleware';
import { SocialMedia } from '../../../lib/SocialMedia';
import { InfoBox } from '../../../lib/InfoBox';
import { Main } from '../Main';
import { Project } from '../../../lib/Project';
import { ReadingSpace } from '../../../lib/ReadingSpace';
import { Title } from '../../../lib/Title';

const HomeMain = styled(Main)`
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const StyledSocialMediaLinks = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: flex-start;
`;

const StyledCertifications = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
`;

const Roles = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: flex-start;
	font-size: 18px;
	line-height: 32px;
	text-align: center;
	margin-top: 35px;
`;

export default function Home(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		props.updatePath();
		dispatch(fetchSocialMedia());
	}, []);

	const socialMedia = useSelector(store => store.socialMedia);

	return (
		<HomeMain>

			<Title>Matt Smith</Title>

			<Roles>
				Harmelodic<br/>
				he/him<br />
				Software Engineer<br />
				Consultant<br />
				Writer<br />
				Designer<br />
				Musician<br />
				Dungeon Master<br />
			</Roles>

			<InfoBox title="Socials">
				<StyledSocialMediaLinks>
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
				</StyledSocialMediaLinks>
			</InfoBox>

			<InfoBox title="Certifications">
				<StyledCertifications>
					<Project
						src="/images/cloud-professional-architect.webp"
						background="#374850"
						title="Professional Cloud Architect"
						href="https://www.credential.net/bd886e12-4a18-4439-8c9a-680107c23547"
						size={100}
					/>
					<Project
						src="/images/CFI.webp"
						background=""
						title="Codecademy Chapter Co-Leader"
						href="https://community.codecademy.com/coding-for-immigrants/"
						size={100}
					/>
					<Project
						src="/images/gitlab.svg"
						background=""
						title="GitLab Hero"
						href="https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/34774"
						size={60}
					/>
					<Project
						src="/images/certificate.svg"
						background=""
						title="BSc Digital &amp; Technology Solutions"
						href="https://www.aston.ac.uk"
						size={65}
					/>
				</StyledCertifications>
			</InfoBox>
			<ReadingSpace />
		</HomeMain>
	);
}
