import React from 'react';

const rand = (x = 0, y = 9) => {
    return Math.floor(Math.random() * (y - x) + x);
};

const guid = (salt = 'XXXXXX-99999-XXXXXX', lower = true) => {
    let sep = salt.match(/[^0-9a-zA-Z\d\s:]/);
    sep = sep && sep[0] ? sep[0] : '-';
    const vals = salt.split(sep)
        , alpha = (lower ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
        , pad = (val, len) => {
            let res = val.toString();
            while (res.length < len) {
                res = `0${res}`;
            }
            return res;
        };
    return vals.map(r =>
        isNaN(r)
            ? r.split('').map(rm => alpha[rand(0, alpha.length)]).join('')
            : pad(rand(0, r), r.toString().length)
    ).join(sep);
};

const log = (str) => console.log(str);
const jstring = (obj) => JSON.stringify(obj);
const jobject = (str) => {
    try {
        return JSON.parse(str);
    }
    catch(e) {
        log(e);
        return {};
    }
};

const skillIcon = (skill, size) => {
    const css = {
        angular: { css: 'fa-angular', tooltip: 'Angular' },
        atlassian: { css: 'fa-atlassian', tooltip: 'Atlassian' },
        aws: { css: 'fa-aws', tooltip: 'AWS' },
        bootstrap: { css: 'fa-bootstrap', tooltip: 'Bootstrap' },
        confluence: { css: 'fa-confluence', tooltip: 'Confluence' },
        docker: { css: 'fa-docker', tooltip: 'Docker' },
        css3: { css: 'fa-css3-alt', tooltip: 'CSS 3' },
        git: { css: 'fa-git', tooltip: 'Git' },
        github: { css: 'fa-github', tooltip: 'Github' },
        gitlab: { css: 'fa-gitlab', tooltip: 'Gitlab' },
        gulp: { css: 'fa-gulp', tooltip: 'Gulp' },
        grunt: { css: 'fa-grunt', tooltip: 'Grunt' },
        html5: { css: 'fa-html5', tooltip: 'HTML5' },
        jira: { css: 'fa-jira', tooltip: 'Jira' },
        jquery: { css: 'fa-js-jquery', tooltip: 'jQuery' },
        js: { css: 'fa-js-square', tooltip: 'Javascript' },
        less: { css: 'fa-less', tooltip: 'LESS' },
        node: { css: 'fa-node-js', tooltip: 'Node' },
        npm: { css: 'fa-npm', tooltip: 'NPM' },
        php: { css: 'fa-php', tooltip: 'PHP' },
        react: { css: 'fa-react', tooltip: 'React' },
        sass: { css: 'fa-sass', tooltip: 'SASS' },
        slack: { css: 'fa-slack', tooltip: 'Slack' },
        wp: { css: 'fa-wordpress', tooltip: 'WordPress' }
    };
    const fa = (s) => {
        switch (s) {
            case 's':
                return 'fa-xs';
            case 'm':
                return 'fa-sm';
            default:
                return 'fa-lg';
        }
    };
    const icon = css[skill] ? css[skill].css : '';
    const tooltip = css[skill] ? css[skill].tooltip : '';
    return (<i className={`fab ${fa(size)} ${icon}`} data-toggle="tooltip" data-placement="top" title={tooltip}></i>);
};

const dom = (id) => document.getElementById(id);

export const utils = {
    dom,
    guid,
    jobject,
    jstring,
    log,
    rand,
    skillIcon
};
