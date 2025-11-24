import React from 'react';
import Container from './ui/Container';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__content">
                    <div className="footer__brand">
                        <h3 className="footer__logo">simasima</h3>
                        <p className="footer__tagline">民泊開業・運営代行サポート</p>
                    </div>

                    <div className="footer__links">
                        <div className="footer__col">
                            <h4>メニュー</h4>
                            <ul>
                                <li><a href="#merits">特徴</a></li>
                                <li><a href="#services">サービス</a></li>
                                <li><a href="#flow">流れ</a></li>
                                <li><a href="#testimonials">お客様の声</a></li>
                                <li><a href="#consultants">コンサルタント</a></li>
                                <li><a href="#pricing">料金</a></li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <h4>サポート</h4>
                            <ul>
                                <li><a href="#faq">よくある質問</a></li>
                                <li><a href="#contact">無料相談</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} simasima. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
