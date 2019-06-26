import React from 'react';
import Section from './Section';
import ResumeItem from './ResumeItem';

const Education = {
  title: 'Education',
  content: <span>
    <ResumeItem
      title='Joliet West High School'
      company='General Diploma'
      description='3.82 GPA. Early graduate with honors, top 2% of class.'
      tenure='1986 - 1989' />
  </span>
}

export default (<Section title={Education.title} titleClass='education' content={Education.content} />);
