import * as React from 'react';
import HeaderView from '../../views/header/header-view';
import FooterView from '../../views/footer/footer-view';

interface IPrimaryLayoutProps {
  children: React.ReactNode;
}

export default class PrimaryLayout extends React.Component<IPrimaryLayoutProps, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        <HeaderView />
        {this.props.children}
        <FooterView />
      </div>
    );
  }
}
