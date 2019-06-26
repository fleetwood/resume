import React from 'react';

const ResumeItem = (props) => {
    const anchor = props.anchor ? props.anchor : '';
    return (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between" id={anchor}>
            <div className="flex-column container resume-content">
                <h3 className="mb-0 resume-title">{props.title}</h3>
                <div className="row">
                    <div className="subheading col-lg">{props.company}</div>
                    <div>
                        <span className="text-primary col-sm">{props.tenure}</span>
                    </div>
                </div>
            {props.description}
            </div>
        </div>
    )
}

export default ResumeItem;
