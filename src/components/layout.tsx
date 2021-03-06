import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import TopMenu from './topmenu';

type LayoutProps = {
	title?: string;
};

type LayoutState = {};

class Layout extends PureComponent<LayoutProps, LayoutState> {
	render() {
		const { title } = this.props;
		return (
			<React.StrictMode>
				<div>
					<StaticQuery
						query={query}
						render={data => (
							<Helmet titleTemplate={data.site.siteMetadata.titleTemplate} defaultTitle={data.site.siteMetadata.defaultTitle}>
								{title && <title>{title}</title>}
								<meta property='og:type' content='website' />
								<meta property='og:title' content={`${(title ? `${title} - ` : '')}${data.site.siteMetadata.defaultTitle}`} />
								<meta property='og:site_name' content='DataCore' />
								<meta property='og:image' content={`${data.site.siteMetadata.baseUrl}/media/logo.png`} />
								<meta property='og:description' content={data.site.siteMetadata.defaultDescription} />
								<link id='themeCSS' rel='stylesheet' href='/styles/semantic.slate.css' />
								<link rel='stylesheet' href='/styles/easymde.min.css' />
								<script src='/styles/theming.js' type='text/javascript' />
							</Helmet>
					)}
					/>
					<TopMenu />
					{this.props.children}
				</div>
			</React.StrictMode>
		);
	}
}

export default Layout;

export const query = graphql`
	query {
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				baseUrl
			}
		}
	}
`;
