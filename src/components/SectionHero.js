import React from 'react';
import _ from 'lodash';

import {toStyleObj, safePrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block block-hero has-gradient outer">
              {_.get(section, 'image') && 
              <div className="bg-img" style={toStyleObj('background-image: url(\'' + safePrefix(_.get(section, 'image')) + '\')')}/>
              }
              <div className="inner-sm">
                {_.get(section, 'title') && 
                <div className="block-header">
                  <h1 className="block-title">{_.get(section, 'title')}</h1>
                </div>
                }
                {_.get(section, 'content') && 
                <div className="block-content">
                  {markdownify(_.get(section, 'content'))}
                </div>
                }
                {_.get(section, 'actions') && 
                <div className="block-buttons">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions')} />
                </div>
                }
              </div>
            </section>
        );
    }
}
