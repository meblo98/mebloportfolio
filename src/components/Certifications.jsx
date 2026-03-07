import React from 'react';
import { certifications } from '../config';
import './Certifications.css';

const Certifications = () => {
    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="certifications-list">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-item">
                            <div className="certification-icon">📜</div>
                            <div className="certification-info">
                                <h3 className="certification-name">{cert.name}</h3>
                                <p className="certification-provider">{cert.provider}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
