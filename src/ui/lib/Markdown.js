import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import styled from "styled-components";

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
        font-weight: ${props => props.theme.font.weight.normal};
        color: ${props => props.theme.colors.accents.green};
    }
	& > h3, h4, h5, h6 {
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
		border-radius: 5px;
        padding: 15px;
		font-family: Monaco, monospace;
		font-size: 0.9rem;
        overflow-x: auto; 
    }

    code {
        background: ${props => props.theme.font.code.background};
        color: ${props => props.theme.font.code.defaultColor};
		border-radius: 5px;
        padding: 2px 4px;
		font-family: Monaco, monospace;
		font-size: 0.9rem;
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
	const marked = new Marked();

	// Set <a> tags to open in a new tab, with nofollow
	const renderer = new marked.Renderer();
	const originalLinkRenderer = renderer.link;
	renderer.link = (href, title, text) => {
		const html = originalLinkRenderer.call(renderer, href, title, text);
		return html.replace(/^<a /, `<a target="_blank" rel="nofollow" `);
	};

	// Configure highlight extension to use highlight.js for strings inside code blocks.
	marked.use(markedHighlight({
		highlight: function(code, lang) {
			return hljs.highlight(code, { language: lang ? lang : 'plaintext' }).value;
		}
	}));

	marked.use({
		renderer: renderer,
	})

	return (
		<StyledMarkdown dangerouslySetInnerHTML={{ __html: marked.parse(props.markdown) }} />
	);
}
