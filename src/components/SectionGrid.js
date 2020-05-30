import React from 'react';
import _ from 'lodash';

import {classNames, htmlToReact, safePrefix, Link, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionGrid extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className={classNames('block', 'block-grid', 'outer', {'has-header': _.get(section, 'title') || _.get(section, 'subtitle')})}>
              <div className="inner">
                {(_.get(section, 'title') || _.get(section, 'subtitle')) && 
                <div className="block-header inner-sm">
                  {_.get(section, 'title') && 
                  <h2 className="block-title">{_.get(section, 'title')}</h2>
                  }
                  {_.get(section, 'subtitle') && 
                  <p className="block-subtitle">{htmlToReact(_.get(section, 'subtitle'))}</p>
                  }
                </div>
                }
                {_.get(section, 'grid_items') && 
                <div className="block-content">
                  <div className={classNames('grid', {'grid-col-2': _.get(section, 'col_number') === 'two', 'grid-col-3': _.get(section, 'col_number') === 'three'})}>
                    {_.map(_.get(section, 'grid_items'), (item, item_idx) => (
                    <div key={item_idx} className="grid-item">
                      <div className="grid-item-inside">
                        {_.get(item, 'image') && 
                        <div className="grid-item-image">
                          <img src={safePrefix(_.get(item, 'image'))} alt={_.get(item, 'title')} />
                        </div>
                        }
                        {_.get(item, 'title') && 
                        <h3 className="grid-item-title line-left">
                          {_.get(item, 'title_url') ? 
                          <Link to={safePrefix(_.get(item, 'title_url'))}>{_.get(item, 'title')}</Link>
                           : 
                          _.get(item, 'title')
                          }
                        </h3>
                        }
                        {_.get(item, 'content') && 
                        <div className="grid-item-content">
                          {markdownify(_.get(item, 'content'))}
                        </div>
                        }
                        {_.get(item, 'actions') && 
                        <div className="grid-item-buttons">
                          <CtaButtons {...this.props} actions={_.get(item, 'actions')} />
                        </div>
                        }
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
                }
              </div>
            </section>
        );
    }
}
