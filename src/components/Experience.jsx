import React from 'react';
import { experiences } from '../config';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Expériences Professionnelles</h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-dot"></div>
                            <div className="experience-content">
                                <span className="experience-period">{exp.period}</span>
                                <h3 className="experience-role">{exp.role}</h3>
                                <h4 className="experience-company">{exp.company}</h4>
                                <ul className="experience-description">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
