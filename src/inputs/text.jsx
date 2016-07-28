import Global from '../events.jsx';
import React from 'react';
import InputBase from './base.jsx';

export default class Input extends InputBase {
    constructor(args) {
        super(args);
        console.error('input', this.props.form);
    }
    render() {
        let {type, ...props} = this.props;
        return <input 
            {...props}
            type={type || 'text'}
            value={this.getValue()}
            onChange={event => this._setValue(event.target.value) }
        />;
    }
}

class TextArea extends InputBase {
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

Global.on('register.input', form => {
    form.register('Input', Input);
    form.register('TextArea', TextArea);
});
