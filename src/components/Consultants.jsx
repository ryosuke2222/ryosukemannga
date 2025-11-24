import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import './Consultants.css';

const consultantsData = [
    {
        name: '森 亮介',
        role: '立上げ・運営全般',
        description: '物件探しからマーケティング、官庁申請、事業計画まで、民泊運営のあらゆるフェーズをサポートします。'
    },
    {
        name: '森 理恵',
        role: 'インテリア・運営代行',
        description: 'インテリアコーディネートやリフォーム、日々の運営代行、お掃除管理など、きめ細やかなサポートを提供します。'
    }
];

const Consultants = () => {
    return (
        <Section id="consultants" className="consultants">
            <Container>
                <div className="section-header text-center">
                    <h2 className="section-title">コンサルタント紹介</h2>
                    <p className="section-subtitle">経験豊富な専門スタッフが、あなたの民泊事業をバックアップします。</p>
                </div>

                <div className="consultants__grid">
                    {consultantsData.map((person, index) => (
                        <motion.div
                            key={index}
                            className="consultant-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="consultant-card__image-placeholder">
                                {/* Placeholder for consultant image */}
                                <span>{person.name.charAt(0)}</span>
                            </div>
                            <div className="consultant-card__content">
                                <h3 className="consultant-card__name">{person.name}</h3>
                                <p className="consultant-card__role">{person.role}</p>
                                <p className="consultant-card__description">{person.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Consultants;
