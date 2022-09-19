import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import * as config from './../config.json';

const parse = (val) => (ReactHtmlParser(val));

const Section = (props) => {
    const sectionClass = `w-100 ${props.sectionClass || ''}`;
    const headingClass = `mb-0 ${props.headingClass || ''}`;
    const subClass = `subheading mb-5 ${props.subClass || ''}`;
    const contentClass = `lead mb-5 ${props.contentClass || ''}`;
    return (
        <div className={sectionClass}>
            {props.head && <h2 className={headingClass}>{props.head}</h2>}
            {props.subHead && <div className={subClass}>{props.subHead}</div>}
            {props.content && <div className={contentClass}>{props.content}</div>}
            {props.children}
        </div>
    )
}

export { Section, config, parse };
