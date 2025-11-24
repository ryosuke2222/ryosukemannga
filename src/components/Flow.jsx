import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ClipboardCheck, Rocket } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import './Flow.css';

const flowData = [
    {
        icon: <MessageSquare size={32} />,
        title: '無料相談・ヒアリング',
        description: 'まずは60分の無料相談で、お客様のご要望や不安な点をお伺いします。'
    },
    {
        icon: <ClipboardCheck size={32} />,
        title: '物件診断・提案',
        description: '物件の収益性を診断し、最適な運営プランをご提案させていただきます。'
    },
    {
        icon: <Rocket size={32} />,
        title: '立ち上げサポート',
        description: 'インテリアのセットアップから許認可申請まで、開業準備をサポートします。'
    }
];

const Flow = () => {
    return (
        <Section id="flow" className="flow">
            <Container>
                <div className="section-header text-center">
                    <h2 className="section-title">ご利用の流れ</h2>
                    <p className="section-subtitle">お問い合わせから開業まで、スムーズにサポートいたします。</p>
                </div>

                <div className="flow__steps">
                    {flowData.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                className="flow__step"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="flow__icon-wrapper">
                                    {step.icon}
                                    <div className="flow__number">{index + 1}</div>
                                </div>
                                <h3 className="flow__title">{step.title}</h3>
                                <p className="flow__description">{step.description}</p>
                            </motion.div>
                            {index < flowData.length - 1 && (
                                <div className="flow__connector">
                                    <div className="flow__line"></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Flow;
