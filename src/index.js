import {utils} from './components/helpers/utils';
import ReactDOM from 'react-dom';

import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Interests from './components/Interests';

ReactDOM.render(About, utils.dom('about'));
ReactDOM.render(Education, utils.dom('education'));
ReactDOM.render(Experience, utils.dom('experience'));
ReactDOM.render(Interests, utils.dom('interests'));