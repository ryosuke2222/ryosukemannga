import React from 'react';
import { motion } from 'framer-motion';
import { Home, Sparkles, PenTool, MessageCircle, Calendar, ShieldCheck, Search, FileCheck } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import './Services.css';

const servicesData = [
    {
        icon: <Search size={24} />,
        title: '物件探し・診断',
        description: '民泊に適した物件の選定から、収益性の診断までサポートします。'
    },
    {
        icon: <FileCheck size={24} />,
        title: '官庁申請・事業計画',
        description: '煩雑な許認可申請や事業計画書の作成をプロが代行・サポートします。'
    },
    {
        icon: <PenTool size={24} />,
        title: 'インテリア・リフォーム',
        description: 'ターゲット層に響く魅力的な空間づくり。リフォームから家具選定までお任せください。'
    },
    {
        icon: <Home size={24} />,
        title: '立ち上げ・運営全般',
        description: 'アカウント作成から日々の運営まで、トータルでサポートします。'
    },
    {
        icon: <Sparkles size={24} />,
        title: '清掃・お掃除管理',
        description: 'ホテルクオリティの清掃品質を維持し、ゲストに快適な滞在を提供します。'
    },
    {
        icon: <MessageCircle size={24} />,
        title: 'マーケティング・集客',
        description: '主要プラットフォームでの露出最大化や価格調整で、稼働率アップを図ります。'
    }
];

const Services = () => {
    return (
        <Section id="services" bgColor="alt" className="services">
            <Container>
                <div className="section-header text-center">
                    <h2 className="section-title">サービス内容紹介</h2>
                    <p className="section-subtitle">物件探しから運営まで、ワンストップでサポート。</p>
                </div>

                <div className="services__grid">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="service-item__icon-wrapper">
                                {service.icon}
                            </div>
                            <div className="service-item__content">
                                <h3 className="service-item__title">{service.title}</h3>
                                <p className="service-item__description">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Services;
