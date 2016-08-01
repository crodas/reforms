import React from 'react';
import Input from './inputs/text.jsx';
import TextArea from './inputs/textarea.jsx';
import DropDown from './inputs/select.jsx';
import ArrayContainer from './container/array.jsx';
import Container from './container/container.jsx';
import Dropzone from './inputs/dropzone.jsx';

import './validate.jsx'

function Group(args) {
    if (args.multiple) {
        return <ArrayContainer {...args} />
    }

    return <Container {...args} />
}

export {
    Input,
    Group,
    Container,
    ArrayContainer,
    TextArea,
    DropDown,
    DropDown as Select,
    Dropzone,
};
