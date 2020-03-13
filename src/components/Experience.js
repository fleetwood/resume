import React from 'react';
import {Section, config} from './Section';
import ExperienceItem from './ExperienceItem';
import { utils } from './helpers/utils';

<<<<<<< HEAD
export default (
    <Section title={config.Experience.title} titleClass='experience'>
        {config.Experience.history.map(history => <ExperienceItem key={utils.numGuid()} history={history} />)}
    </Section>
);
=======
const content = (
    <span>
        {config.Experience.history.map(history => <ExperienceItem key={utils.numGuid()} history={history} />)}
    </span>
)

export default (<Section title={config.Experience.title} titleClass='experience' content={content} />);
>>>>>>> master
