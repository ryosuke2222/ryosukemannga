import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, TrendingUp, Globe } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import './Merits.css';

const meritsData = [
    {
        icon: <UserCheck size={40} />,
        title: '未経験や副業としても始められる',
        description: '面倒な手続きや日々の運営業務はすべて代行いたしますので、専門知識がなくても安心して民泊事業をスタートできます。副業をお考えの方にも最適です。'
    },
    {
        icon: <TrendingUp size={40} />,
        title: '民泊はしっかり収益化が見込める事業',
        description: 'インバウンド需要の回復とともに、民泊市場は拡大を続けています。適切な物件選定と運営戦略により、安定した高収益を目指すことが可能です。'
    },
    {
        icon: <Globe size={40} />,
        title: '世界中の方と交流できる',
        description: '世界各国から訪れるゲストとの出会いは、民泊ならではの醍醐味です。ホストとしての温かいおもてなしを通じて、国際交流の楽しさを実感していただけます。'
    }
];

const Merits = () => {
    return (
        <Section id="merits" className="merits">
            <Container>
                <div className="section-header text-center">
                    <h2 className="section-title">民泊事業で得られる3つのメリット</h2>
                    <p className="section-subtitle">simasimaがあなたの民泊ビジネスを成功に導きます。</p>
                </div>

                <div className="merits__grid">
                    {meritsData.map((merit, index) => (
                        <motion.div
                            key={index}
                            className="merit-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="merit-card__icon">
                                {merit.icon}
                            </div>
                            <h3 className="merit-card__title">
                                <span className="merit-card__number">0{index + 1}.</span>
                                {merit.title}
                            </h3>
                            <p className="merit-card__description">{merit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Merits;
