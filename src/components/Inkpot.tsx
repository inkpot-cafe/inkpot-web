import * as React from 'react';

import Document from './Document'
import Header from './Header';
import Footer from './Footer';

class Inkpot extends React.Component<{}, { documents: Array<Document> }> {

    constructor(props: {}) {
        super(props)
        this.state = {
            documents: new Array<Document>()
        }

    }

    public render() {
        let document = this.state.documents[Math.floor(Math.random() * this.state.documents.length)];
        return (
            <React.Fragment>
                <Header/>
                {document}
                <Footer/>
            </React.Fragment>
        );
    }

    componentDidMount() {
        fetch('api/v1.0/documents')
            .then(r => r.json())
            .then<Array<Document>>(json =>
                json.map((item: { uuid: string, title: string, content: string, author: string }) => <Document {...item}/>))
            .then(documents => this.setState({documents: documents}))
    }

}

export default Inkpot;
