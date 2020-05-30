import React from 'react';
import _ from 'lodash';

import {classNames, htmlToReact, getPage, Link, safePrefix} from '../utils';

export default class SectionDocs extends React.Component {
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
                <div className="block-content">
                  <div className={classNames('grid', {'grid-col-2': _.get(section, 'col_number') === 'two', 'grid-col-3': _.get(section, 'col_number') === 'three'})}>
                    {_.map(_.get(this.props, 'pageContext.site.data.doc_sections.sections'), (doc_section, doc_section_idx) => {
                        let doc_section_folder = _.get(this.props, 'pageContext.site.data.doc_sections.root_folder') + doc_section;
                        let doc_section_page_path = doc_section_folder + '/index.md';
                        let doc_section_page = getPage(this.props.pageContext.pages, doc_section_page_path);
                        return (
                          <div key={doc_section_idx} className="grid-item">
                            <div className="grid-item-inside">
                              <h3 className="grid-item-title line-left"><Link to={safePrefix(_.get(doc_section_page, 'url'))}>{_.get(doc_section_page, 'frontmatter.title')}</Link></h3>
                              {_.get(doc_section_page, 'frontmatter.excerpt') && 
                              <div className="grid-item-content">
                                <p>{htmlToReact(_.get(doc_section_page, 'frontmatter.excerpt'))}</p>
                              </div>
                              }
                              <div className="grid-item-buttons">
                                <Link to={safePrefix(_.get(doc_section_page, 'url'))}>Learn More</Link>
                              </div>
                            </div>
                          </div>
                        )
                    })}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
