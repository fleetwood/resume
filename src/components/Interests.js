import React from 'react';
import Section from './Section';

const item = (title, content, img) => (
    <div className="m-3 p-3 col-sm-5 col-md-3 border rounded interest-item">
        <h5>{title}</h5>
        <p>{content}</p>
        <div className="item-bg w-100 h-100" style={{backgroundImage:`url(./../img/${img})`}}></div>
    </div>
);

const Interests = {
        title: 'Interests',
        content: 
            <div className="w-100 d-flex align-items-start align-content-stretch flex-wrap">
                {item('Coding','For work and for fun.', 'coding.jpg')}
                {item('Writing','My lady and I are writing a romance novel.','writing.jpg')}
                {item('Tattooing','We tattoo, too.','tattoo.jpg')}
                {item('Music','I fake guitar pretty well.','music.jpg')}
                {item('Illustration','Been published a few times.','illustration.jpg')}
                {item('Feminism','Affects 51% of us directly, 49% indirectly.','feminism.jpg')}
                {item('Philosophy','Ethical quandaries and Gestaltzerfalls.','philosophy.jpg')}
            </div>
}

export default (<Section title={Interests.title} titleClass='interests' content={Interests.content} />);
