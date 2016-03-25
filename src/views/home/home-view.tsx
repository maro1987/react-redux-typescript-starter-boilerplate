import * as React from 'react';

interface IHomeProps {
}

interface IHomeState {
}

export default class HomeView extends React.Component<IHomeProps, IHomeState> {

  public state: IHomeState;

  constructor(props: IHomeProps) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactElement<{}> {
    return (
      <div>
        Hello world
      </div>
    );
  }
}
