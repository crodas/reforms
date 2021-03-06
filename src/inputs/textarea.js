import React from 'react';
import InputBase from './base';

export default class TextArea extends InputBase {
    constructor(args) {
        super(args);
    }
    render() {
        return <textarea
            {...this.props}
            value={this.getValue()}
            onChange={event => this._setValue(event.target.value) }
        />;
    }
}

