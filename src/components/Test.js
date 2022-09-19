import React from 'react';
import { Section, config, parse } from './Section';
//TODO: Break this out into a section directory
export default (
    <Section head={parse(config.Test.head)} subHead={parse(config.Test.sub)}>
        <div>This is a test.</div>
    </Section>
);
