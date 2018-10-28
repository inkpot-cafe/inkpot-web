import * as React from 'react';

class Footer extends React.Component {
    public render() {
        return (
            <footer className="fixed-bottom">
                <div className="container">
                    <address>
                        <p>Una pioggia di parole</p>
                        <p>info@inkpot.it</p>
                    </address>
                </div>
            </footer>
        );
    }
}

export default Footer;