import * as React from 'react';

class Upload extends React.Component<{}, { file: File, uploaded: Boolean }> {

    constructor(props: {}) {
        super(props);
        this.state = {
            file: null,
            uploaded: false
        }
    }

    public render() {
        return (
            <React.Fragment>
                <input id="upload" name="file" type="file" onChange={this.onChangeHandler}/>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload
                </button>
                {this.state.uploaded && <div>uploaded</div>}
            </React.Fragment>
        );
    }

    private onChangeHandler = (event: any) => {
        this.setState({
            file: event.target.files[0]
        })
    }

    private onClickHandler = (event: any) => {
        if (this.state.file) {
            const reader = new FileReader()
            reader.onload = function (event: any) {
                let body = {
                    author: 'Luca Amato',
                    title: this.state.file.name.split('.').slice(0, -1).join('.'),
                    content: event.target.result
                }
                fetch('/api/v1.0/documents', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:  JSON.stringify(body)
                }).then(response => {
                    if (response.ok) {
                        this.setState({uploaded: true})
                    }
                })
            }.bind(this)
            reader.readAsText(this.state.file)
        }
    }

}

export default Upload;