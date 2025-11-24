import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import './Testimonials.css';

const testimonialsData = [
    {
        name: 'いろりの宿木乃古',
        owner: '店主：谷本和也さん',
        comment: '古民家の良さを活かした宿作りをサポートしていただきました。集客面でも大変助かっています。',
        rating: 5
    },
    {
        name: 'おぼろととろろ',
        owner: '女将：寺田友紀さん',
        comment: '初めての民泊運営で不安でしたが、親身なサポートのおかげで安心して運営できています。',
        rating: 5
    },
    {
        name: '岡本BASE',
        owner: 'オーナー：O氏',
        comment: '収益化のシミュレーション通り、順調に予約が入っています。プロにお任せして正解でした。',
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <Section id="testimonials" bgColor="alt" className="testimonials">
            <Container>
                <div className="section-header text-center">
                    <h2 className="section-title">お客様の声</h2>
                    <p className="section-subtitle">実際にsimasimaをご利用いただいているオーナー様の声をご紹介します。</p>
                </div>

                <div className="testimonials__grid">
                    {testimonialsData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="testimonial-card__rating">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--color-secondary)" stroke="none" />
                                ))}
                            </div>
                            <p className="testimonial-card__comment">"{item.comment}"</p>
                            <div className="testimonial-card__footer">
                                <h3 className="testimonial-card__name">{item.name}</h3>
                                <p className="testimonial-card__owner">{item.owner}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Testimonials;
