import * as React from 'react';

class Ink extends React.Component<{ content: string }> {
  public render() {
    const { content } = this.props;

    return (
      <div className="ink container px-0 pt-4">
        {content}
      </div>
    );
  }
}

export default Ink;