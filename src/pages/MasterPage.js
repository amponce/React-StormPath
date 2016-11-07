import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

import Header from './Header';

export default class MasterPage extends React.Component {
render() {
return (
<documenttitle title="My React App">
<div classname="MasterPage">
<header/>
{ this.props.children }
</div>
</documenttitle>
);
}
}