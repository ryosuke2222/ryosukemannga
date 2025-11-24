import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__bg">
                {/* Placeholder for background image - using a gradient for now, can be replaced with an image */}
                <div className="hero__overlay"></div>
            </div>

            <Container className="hero__content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="hero__title">
                        simasima民泊<br />
                        <span className="text-highlight">開業・運営代行</span>サポート
                    </h1>
                    <p className="hero__subtitle">
                        民泊開業に興味のあるそこのあなた<br />
                        こんなお悩みはありませんか？<br />
                        <span style={{ fontSize: '0.9em', opacity: 0.9 }}>
                            「副業で始めたいけど時間がない」「英語が話せない」「収益化できるか不安」
                        </span>
                    </p>
                    <div className="hero__actions">
                        <Button variant="primary" size="large" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            無料相談を申し込む
                        </Button>
                        <Button variant="outline" size="large" className="hero__btn-secondary" onClick={() => document.getElementById('merits').scrollIntoView({ behavior: 'smooth' })}>
                            特徴を見る
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Hero;
