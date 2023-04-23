import React from 'react';
import '../css/articleAboutUs.css';
import { ImLinkedin } from 'react-icons/im';

function ArticleAboutUs() {
	const members = [
		{
			name: 'rokas',
			role: 'executive',
			link: 'https://www.linkedin.com/in/rokas-markvaldas-208766271/',
		},
		{
			name: 'ignas',
			role: 'front-end',
			link: 'https://www.linkedin.com/in/ignas-venckunas/',
		},
		{
			name: 'artur',
			role: 'back-end',
			link: 'https://www.linkedin.com/in/artur-januska-11449a258/',
		},
		{
			name: 'anton',
			role: 'creative',
			link: 'https://www.linkedin.com/in/anton-tonis-polujanov-40062b271/',
		},
	];

	const navToLinkedInProfile = (link) => {
		window.open(link, '_blank');
	};

	return (
		<article className='article-container'>
			<div className='article-title'>
				<h2>eloquent party of four started in 2023</h2>
			</div>
			<div className='divider'></div>
			<div className='linkedin-links'>
				{members.map((member) => {
					return (
						<div
							className='user-article'
							key={member.name}
						>
							<p>
								{member.name} - {member.role}
							</p>
							<ImLinkedin
								className='icon'
								onClick={() => navToLinkedInProfile(member.link)}
							/>
						</div>
					);
				})}
			</div>
		</article>
	);
}

export default ArticleAboutUs;
