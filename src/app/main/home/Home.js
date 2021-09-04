// noinspection HtmlUnknownAnchorTarget

import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSocialMedia } from './middleware';
import { SocialMedia } from './components/SocialMedia';
import { InfoBox } from './components/InfoBox';
import { Main } from '../Main';
import { Project } from '../Project';

const HomeMain = styled(Main)`
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const StyledSocialMediaLinks = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
`;

const StyledCertifications = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
`;

const Title = styled.div`
	display: flex;
	font-size: 35px;
	margin: 50px 0 10px 0;
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
			<div>Harmelodic</div>

			<InfoBox title="Roles">
				he/him<br />
				Software Engineer<br />
				Consultant<br />
				Writer<br />
				Designer<br />
				Musician<br />
				Dungeon Master<br />
				<a href="https://www.youtube.com/watch?v=p3Khnx0lUDE">58,020,581</a><br />
			</InfoBox>

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
						src="/images/gitlab.svg"
						background=""
						title="GitLab Hero"
						href="https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/34774"
						size={60}
					/>
					<Project
						src="/images/cloud-professional-architect.webp"
						background="#374850"
						title="Professional Cloud Architect"
						href="https://www.credential.net/bd886e12-4a18-4439-8c9a-680107c23547"
						size={100}
					/>
				</StyledCertifications>
			</InfoBox>
		</HomeMain>
	);
}
