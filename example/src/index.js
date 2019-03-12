import React from 'react';
import ReactDOM from 'react-dom';

import CheckboxTree from '../../src/js/CheckboxTree';
//import CheckboxTree from '../../dist/CheckboxTree';
//import CheckboxTree from '@nwtn/newton-checkbox-tree';

import './scss/style.scss';

const nodes = [{
    value: 'NWTDB4',
    label: 'NWTDB4',
    showIcon: false,
    children: [{
        value: 'NWTDB4.NWTTS1',
        label: 'NWTDB4.NWTTS1',
        showIcon: false,
        children: [{
            value: 'NWT04.NWTTB1',
            label: 'NWT04.NWTTB1',
            showIcon: false,
            children: [{
                value: 'NWTDB4.NWALS1',
                label: 'NWTDB4.NWALS1',
                showIcon: false,
            }, {
                value: 'NWT04.NWTSY1',
                label: 'NWT04.NWTSY1',
                showIcon: false,
            }],
        }],
    }, {
        value: 'NWT04.NWTVW2',
        label: 'NWT04.NWTVW2',
        showIcon: false,
        children: [{
            value: 'NWT04.NWTTB2',
            label: 'NWT04.NWTTB2',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            value: 'NWTDB4.NWALS2',
            label: 'NWTDB4.NWALS2',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            value: 'NWT04.NWTSY2',
            label: 'NWT04.NWTSY2',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }],
    }, {
        value: 'NWTDB4.NWTTS3',
        label: 'NWTDB4.NWTTS3',
        showIcon: false,
        children: [{
            value: 'NWT04.NWTTB3',
            label: 'NWT04.NWTTB3',
            showIcon: false,
            children: [{
                value: 'NWTDB4.NWALS3',
                label: 'NWTDB4.NWALS3',
                showIcon: false,
            }, {
                value: 'NWT04.NWTSY3',
                label: 'NWT04.NWTSY3',
                showIcon: false,
            }],
        }],
    }, {
        value: 'NWT04.NWTVW4',
        label: 'NWT04.NWTVW4',
        showIcon: false,
        children: [{
            value: 'NWT04.NWTTB4',
            label: 'NWT04.NWTTB4',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            value: 'NWTDB4.NWALS4',
            label: 'NWTDB4.NWALS4',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }, {
            value: 'NWT04.NWTSY4',
            label: 'NWT04.NWTSY4',
            icon: <i className="fa fa-info-circle" />,
            showCheckbox: false,
        }],
    }],
}];

class App extends React.Component {
    state = {
        checked: [
            '/app/Http/Controllers/WelcomeController.js',
            '/app/Http/routes.js',
            '/public/assets/style.css',
            '/public/index.html',
            '/.gitignore',
        ],
        expanded: [
            '/app',
        ],
    };

    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    onCheck(checked) {
        this.setState({ checked });
    }

    onExpand(expanded) {
        this.setState({ expanded });
    }

    render() {
        const { checked, expanded } = this.state;

        return (
            <div className="expand-all-container">
                <CheckboxTree
                    showNodeIcon={true}
                    checked={checked}
                    expanded={expanded}
                    nodes={nodes}
                    showExpandAll
                    onCheck={this.onCheck}
                    onExpand={this.onExpand}
                    noCascade={true}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
