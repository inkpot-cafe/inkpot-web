import * as React from 'react';

class Document extends React.Component<{ uuid: string, title: string, content: string, author: string}> {

    public render() {
        const {title, content} = this.props;
        const MarkdownIt = require('markdown-it')
        let md = new MarkdownIt()
        let result = md.render(content)
        return (
            <div className="document container-fluid">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: result}}/>
            </div>
        );
    }

}

export default Document;