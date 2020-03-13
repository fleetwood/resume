import React from 'react';
import { Section, config, ReactHtmlParser } from './Section';
// import ResumeItem from './RecursiveList';

const Education = {
  title: 'Education',
  content: <span>
    {/* <ResumeItem
      title='Real-world'
      company=''
      description='15 years engineering, 6 years tech leadership.'
      tenure='1999 - Present' />
      
    <ResumeItem
      title='Polymath'
      company=''
      description='Insatiable curiosity, perpetual learner.'
      tenure='1972 - Present' />

    <ResumeItem
      title='Joliet West High School'
      company='General Diploma'
      description='3.82 GPA. Early graduate with honors, top 2% of class.'
      tenure='1986 - 1989' /> */}
  </span>
}

export default (<Section title={Education.title} titleClass='education' content={Education.content} />);
