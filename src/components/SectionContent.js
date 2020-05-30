import React from 'react';
import _ from 'lodash';

import {classNames, safePrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionContent extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block block-text outer">
              <div className="inner">
                <div className={classNames('grid', 'grid-middle', 'grid-center', {'grid-swap': _.get(section, 'image') && (_.get(section, 'image_position') === 'right')})}>
                  {_.get(section, 'image') && 
                  <div className="grid-item block-image">
                    <img src={safePrefix(_.get(section, 'image'))} alt={_.get(section, 'title')} />
                  </div>
                  }
                  <div className="grid-item block-body">
                    {_.get(section, 'title') && 
                    <div className="block-header">
                      <h2 className="block-title">{_.get(section, 'title')}</h2>
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
                </div>
              </div>
            </section>
        );
    }
}
