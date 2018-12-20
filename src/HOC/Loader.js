import React, { Component } from 'react';

const Loader = (WrappedComponent) => {
     class Loader extends Component {
        render() {
            return <WrappedComponent {...this.props}/>

        }
    }
    return Loader
}
export default Loader;
