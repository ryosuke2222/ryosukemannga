import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';
import './Contact.css';

const Contact = () => {
    return (
        <Section id="contact" className="contact">
            <Container>
                <div className="contact__wrapper">
                    <div className="section-header text-center">
                        <h2 className="section-title">無料相談はこちらより</h2>
                        <p className="section-subtitle">
                            民泊開業・運営に関するご相談、お見積もりなど、<br />
                            お気軽にお問い合わせください。
                        </p>
                    </div>

                    <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">お名前</label>
                            <input type="text" id="name" placeholder="山田 太郎" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">メールアドレス</label>
                            <input type="email" id="email" placeholder="example@simasima.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">電話番号</label>
                            <input type="tel" id="phone" placeholder="090-1234-5678" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">お問い合わせ内容</label>
                            <textarea id="message" rows="5" placeholder="ご相談内容をご記入ください" required></textarea>
                        </div>

                        <div className="form-submit">
                            <Button variant="primary" size="large" type="submit">
                                送信する
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </Section>
    );
};

export default Contact;
