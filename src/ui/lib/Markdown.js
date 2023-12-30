import { marked } from 'marked';
import styled from 'styled-components';

const StyledMarkdown = styled.div`
    display: inline-block;
    width: calc(100% - 10px);
    margin: 0 auto;
    padding: 0 5px;
    white-space: normal;
    overflow-wrap: break-word;
    color: ${props => props.theme.font.normalColor};
    
    & > h1, & > h2, & > h3 {
        padding-bottom: 15px;
        border-bottom: solid 1px ${props => props.theme.colors.softBorder};
        font-weight: ${props => props.theme.font.weight};
        color: ${props => props.theme.colors.accents.green};
    }
	& > .heading, h3, h4, h5, h6 {
		padding-top: 15px;
	}

    a, a:visited {
        color: ${props => props.theme.font.linkColor};
        text-decoration: underline;
    }

    a:active {
        color: ${props => props.theme.font.linkActiveColor};
    }

    & > img {
        display: block;
        margin: 0 auto;
        padding: 7px;
        text-align: center;
        border: 1px solid ${props => props.theme.colors.softBorder};
        border-radius: 5px;
    }

    pre {
        background: ${props => props.theme.font.code.background};
        color: ${props => props.theme.font.code.color};
        padding: 15px;
        overflow-x: auto; 
    }

    code {
        background: ${props => props.theme.font.code.background};
        color: ${props => props.theme.font.code.color};
        padding: 2px 4px;
    }

    pre > code {
        padding: 0 15px 0 0;
    }

    blockquote {
        border-left: solid 3px ${props => props.theme.font.blockquote};
        color: ${props => props.theme.font.blockquote};
        padding-left: 10px;
    }

    kbd {
        display: inline-block;
        padding: 2px 5px;
        color: ${props => props.theme.font.keyboard.color};
        border: 1px solid ${props => props.theme.font.keyboard.border};
        border-radius: 3px;
        box-shadow: 0 1px 0 ${props => props.theme.font.keyboard.boxShadow.outer}, 
                    0 0 0 2px ${props => props.theme.font.keyboard.boxShadow.inner} inset;
        white-space: nowrap;
    }

    table {
       margin: 0 auto;
       border-collapse: collapse;
    }

    table, td, th {
        border: 1px solid ${props => props.theme.colors.softBorder};
        padding: 10px;
    }
`;

export function Markdown(props) {
	const renderer = new marked.Renderer();
	const linkRenderer = renderer.link;

	renderer.link = (href, title, text) => {
		const html = linkRenderer.call(renderer, href, title, text);
		return html.replace(/^<a /, `<a target="_blank" rel="nofollow" `);
	};

	return (
		<StyledMarkdown
			dangerouslySetInnerHTML={{
				__html: marked(props.markdown, { renderer }),
			}} />
	);
}
