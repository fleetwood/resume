import React from 'react';
import { Section, config} from './Section';
import ExperienceItem from './ExperienceItem';
import { utils } from './helpers/utils';

<<<<<<< HEAD
export default (
  <Section title={config.Education.title} titleClass='education'>
    {config.Education.history.map(history => <ExperienceItem key={utils.numGuid()} history={history} />)}
  </Section>
);
=======
const Education = (
  <span>
      {config.Education.history.map(history => <ExperienceItem key={utils.numGuid()} history={history} />)}
  </span>
)

export default (<Section title={config.Education.title} titleClass='education' content={Education} />);
>>>>>>> master
