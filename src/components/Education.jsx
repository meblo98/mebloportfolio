import React from 'react';
import { education } from '../config';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container">
                <h2 className="section-title">Formations</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <span className="education-year">{edu.year}</span>
                            <h3 className="education-degree">{edu.degree}</h3>
                            <p className="education-school">{edu.school}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
