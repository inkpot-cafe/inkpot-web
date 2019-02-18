import * as React from 'react';

class Ink extends React.Component<{ title: string, content: string }> {
  public render() {
    const { title, content } = this.props;

    return (
      <div className ="ink container-fluid">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    );
  }
}

export default Ink;