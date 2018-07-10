import * as React from 'react';
import styled from 'styled-components'

// ts interface declaration
interface IProps {
  compiler: string,
  framework: string,
  bundler: string
}

// let's make some styled components!
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;


export class Hello extends React.Component<IProps, {}> {
  render() {
    return (<Title>This is my {this.props.framework} application using {' '}
      {this.props.compiler} with {this.props.bundler}<div className="greenDiv">Helloooooo</div></Title>)
  }
}