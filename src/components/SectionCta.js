import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionCta extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block block-cta outer">
              <div className="inner">
                <div className="has-gradient">
                  <div className="grid grid-middle grid-center">
                    {(_.get(section, 'title') || _.get(section, 'subtitle')) && 
                    <div className="grid-item block-header">
                      {_.get(section, 'title') && 
                      <h2 className="block-title">{_.get(section, 'title')}</h2>
                      }
                      {_.get(section, 'subtitle') && 
                      <p className="block-subtitle">{htmlToReact(_.get(section, 'subtitle'))}</p>
                      }
                    </div>
                    }
                    {_.get(section, 'actions') && 
                    <div className="grid-item block-buttons">
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
