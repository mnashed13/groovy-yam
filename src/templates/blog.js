import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {toStyleObj, safePrefix, getPages, Link} from '../utils';

export default class Blog extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
              <header className="page-header has-gradient outer">
                {_.get(this.props, 'pageContext.frontmatter.image') && 
                <div className="bg-img" style={toStyleObj('background-image: url(\'' + safePrefix(_.get(this.props, 'pageContext.frontmatter.image')) + '\')')}/>
                }
                <div className="inner-sm">
                  <h1 className="page-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                  <p className="page-subtitle">{_.get(this.props, 'pageContext.frontmatter.subtitle')}</p>
                  }
                </div>
              </header>
              <div className="inner-md outer">
                <div className="post-feed">
                  {_.map(display_posts, (post, post_idx) => (
                  <article key={post_idx} className="post">
                    {_.get(post, 'frontmatter.thumb_image') && 
                    <Link className="post-thumbnail" to={safePrefix(_.get(post, 'url'))}><img src={safePrefix(_.get(post, 'frontmatter.thumb_image'))} alt={_.get(post, 'frontmatter.title')} /></Link>
                    }
                    <header className="post-header">
                      <div className="post-meta">
                        <time className="published" dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                      </div>
                      <h2 className="post-title line-left"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                    </header>
                    {_.get(post, 'frontmatter.excerpt') && <React.Fragment>
                    <p className="post-excerpt">{_.get(post, 'frontmatter.excerpt')}</p>
                    <p className="read-more"><Link to={safePrefix(_.get(post, 'url'))} className="read-more-link">Read More</Link></p>
                    </React.Fragment>}
                  </article>
                ))}
                </div>
              </div>
            </Layout>
        );
    }
}
