import React from 'react';
import _ from 'lodash';

import {classNames} from '../utils';
import ActionLink from './ActionLink';

export default class Submenu extends React.Component {
    render() {
        return (
            <ul className={_.get(this.props, 'menu_class')}>
              {_.map(_.get(this.props, 'submenu'), (action, action_idx) => (
              <li key={action_idx} className={classNames('menu-item', {'current': _.get(this.props, 'page.url') === _.get(action, 'url'), 'menu-button': _.get(action, 'type') !== 'link'})}>
                <ActionLink {...this.props} action={action} />
              </li>
              ))}
            </ul>
        );
    }
}
