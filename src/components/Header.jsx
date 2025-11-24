import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '特徴', href: '#merits' },
        { name: 'サービス', href: '#services' },
        { name: '流れ', href: '#flow' },
        { name: 'お客様の声', href: '#testimonials' },
        { name: '料金', href: '#pricing' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <Container className="header__container">
                <div className="header__logo">
                    <a href="#">simasima</a>
                </div>

                {/* Desktop Navigation */}
                <nav className="header__nav desktop-only">
                    <ul className="header__nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="header__nav-link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <Button variant="primary" size="small" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        お問い合わせ
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="header__menu-toggle mobile-only"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <div className={`header__mobile-nav ${isMobileMenuOpen ? 'is-open' : ''}`}>
                    <ul className="header__mobile-nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="header__mobile-nav-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <Button
                                variant="primary"
                                className="header__mobile-cta"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                お問い合わせ
                            </Button>
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    );
};

export default Header;
