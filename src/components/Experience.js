import React from 'react';
import Section from './Section';
import ResumeItem from './ResumeItem';
import SkillList from './SkillList';

const content = (
    <span>
        <ResumeItem
            title='Engineering Manager'
            company='ActiveCampaign'
            anchor='activecampaign'
            description={
                <span>
                    <SkillList skills={
                        ['aws','confluence','docker','git', 'gitlab', 'jira', 'php', 'react', 'slack']
                    } size='sm' />
                    <ul className="skill-list">
                        <li>Participated in and defined Agile processes (Scrum, Jira, Kanban)</li>
                        <li>Collaborated with product owners and development teams</li>
                        <ul>
                            <li>Gathering and refining requirements</li>
                            <li>Defining short- and long-term feature roadmaps</li>
                            <li>Defining and implementing SLAs/KPIs</li>
                        </ul>
                        <li>Led two product teams in FSDLC of greenfield and feature</li>
                        <li>Drove efforts to refine and streamline development lifecycle and workflow</li>
                        <li>Career coaching, building professional goals in alignment with product and organizational initiatives</li>
                        <li>Providing (servant) leadership for ailing teams to reconstruct, build morale, and increase productivity</li>
                    </ul>
                </span>
            }
            tenure='Jul 2018 - May 2019' />

        <ResumeItem
            title='Senior Software Engineer'
            anchor='conversant'
            company='Conversant'
            description={
                <span>
                    <SkillList skills={
                        ['angular','confluence','docker','git', 'gulp', 'jira', 'js','node', 'npm', 'react', 'slack']
                    } size='sm' />
                    <ul className="skill-list">
                        <li>Node JS, Automation, Unit Testing, Data Structuring, Profiling, Performance Tuning</li>
                        <li>Participated in and promoted Agile processes (Jira, Kanban, Stash)</li>
                        <li>Worked with product owners and development teams to gather and refine requirements, and see development through to QA, deployment and ongoing maintenance, CI/CD.</li>
                        <li>Participated in ongoing research and evaluation of new technologies</li>
                        <li>Led performance initiatives surrounding scalability and user experience</li>
                        <li>Collaborated across multiple teams in architecting new solutions</li>
                        <li>Drove efforts to reduce inefficiencies in development, QA and deployment processes.</li>
                        <li>Coaching and mentoring junior and mid-level software engineers.</li>
                    </ul>
                </span>
            }
            tenure='May 2015 - Mar 2018' />

        <ResumeItem
            title='Engineering Manager'
            company='Abelson Taylor'
            anchor='abelsontaylor'
            description={
                <span>
                    <SkillList skills={
                        ['confluence','git','js','jquery','css3','html5']
                    } size='sm' />
                    <ul className="skill-list">
                        <li>Staff Management (4-12 Engineers, Associate-Senior Developers)</li>
                        <li>Client and Internal Business & Systems analysis</li>
                        <li>>$2Mil new business won on client pitches</li>
                        <li>Requirements Documentation (Functional, Business, Security, QA/Testing, Standards)</li>
                        <li>Client and Agency liaison (Analysis, Documentation, Remediation, RFP and Pitches)</li>
                        <li>Introduced new technologies and process improvements; Source Control, Virtualization, Documentation</li>
                        <li>Large-scale system design and implementation</li>
                        <li>Management in a fast-paced, waterfall environment, between 4 and 10+ developers, 20-100 concurrent projects</li>
                        <li>Responsible for staffing direction and decisions, new direction and future planning, resource allocation</li>
                    </ul>
                </span>
            }
            tenure={<span>Jul 2014 - Apr 2015 and <i>Feb 2008 - Feb 2012</i></span>}
            />

        <ResumeItem
            title='Also'
            anchor='more'
            description={<span>
                <div><h5 className="mb-0">.NET Architect</h5><p className="subheading mb-3">Alpha Zeta</p></div>
                <div><h5 className="mb-0">Freelance Engineer, Business Strategist</h5><p className="subheading mb-3">elevenzero</p></div>
                <div><h5 className="mb-0">Senior Developer</h5><p className="subheading mb-3">b|Media</p></div>
                <div><h5 className="mb-0">Developer</h5><p className="subheading mb-3">IBM</p></div>
            </span>} />
    </span>
);

export default (<Section title='Experience' titleClass='experience' content={content} />);
