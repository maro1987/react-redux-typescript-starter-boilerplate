import * as React from 'react';

interface ICoreLayoutProps {
  children: React.ReactNode;
}

export default class CoreLayout extends React.Component<ICoreLayoutProps, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
