import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import './FAQ.css';

const faqData = [
    {
        question: '初期費用はかかりますか？',
        answer: 'いいえ、初期費用は一切かかりません。完全成果報酬型ですので、売上が発生して初めて手数料を頂戴いたします。'
    },
    {
        question: '対応エリアを教えてください。',
        answer: '現在は東京都内、大阪市内、京都市内、福岡市内を中心に展開しております。その他のエリアについても順次拡大中ですので、まずはお気軽にご相談ください。'
    },
    {
        question: 'すでに民泊を運営中ですが、途中からの切り替えは可能ですか？',
        answer: 'はい、可能です。現在のアカウントを引き継ぎ、スムーズに運営を移行させていただきます。'
    },
    {
        question: '清掃のみ、ゲスト対応のみといったスポット依頼は可能ですか？',
        answer: '申し訳ございませんが、現在は品質維持のため、運営代行一式（フルパッケージ）のみの提供とさせていただいております。'
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
                className="faq-item__question"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div
                className="faq-item__answer"
                style={{ maxHeight: isOpen ? '200px' : '0' }}
            >
                <div className="faq-item__answer-content">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <Section id="faq" bgColor="alt" className="faq">
            <Container>
                <div className="section-header text-center">
                    <h2 className="section-title">よくある質問</h2>
                </div>

                <div className="faq__list">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} {...item} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default FAQ;
