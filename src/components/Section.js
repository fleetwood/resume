import React from 'react';
// import ReactHtmlParser from 'react-html-parser';
import * as config from './../config.json';

const Section = (props) => {
    const mainClass = `w-100 ${props.mainClass || ''}`;
    const titleClass = `mb-0 ${props.titleClass || ''}`;
    const subClass = `subheading mb-5 ${props.subClass || ''}`;
    const contentClass = `lead mb-5 ${props.contentClass || ''}`;
    return (
        <div className={mainClass}>
            <h2 className={titleClass}>{props.title}</h2>
            {props.sub && <div className={subClass}>{props.sub}</div>}
            {props.content && <div className={contentClass}>{props.content}</div>}
            {props.custom && <div className={props.customClass || ''}>{props.custom}</div>}
        </div>
    )
}
Section.defaultProps = {
    title: <span>Title</span>
}

export { Section, config };
