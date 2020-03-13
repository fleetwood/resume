import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { utils } from './helpers/utils';

const RecursiveList = (props) => {
    const css = props.css ? props.css : '';
    return (
        <ul key={utils.numGuid()}>
            {props.items.map(item => {
                if(Array.isArray(item)) {
                    return RecursiveList({items:item});
                } 
                else {
                    return <li key={utils.numGuid()}>{ReactHtmlParser (item)}</li>
                }
            })}
        </ul>
    )
}

export default RecursiveList;
