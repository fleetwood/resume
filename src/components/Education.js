import React from 'react';
import { Section, config} from './Section';
import ExperienceItem from './ExperienceItem';
import { utils } from './helpers/utils';

const Education = (
  <span>
      {config.Education.history.map(history => <ExperienceItem key={utils.numGuid()} history={history} />)}
  </span>
)

export default (<Section title={config.Education.title} titleClass='education' content={Education} />);
