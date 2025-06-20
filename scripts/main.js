import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import About from '../components/About.js';
import Services from '../components/Services.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        // 컴포넌트 초기화
        const header = new Header();
        const hero = new Hero();
        const about = new About();
        const services = new Services();

        // DOM에 컴포넌트 추가
        document.body.appendChild(header.getElement());
        document.body.appendChild(hero.getElement());
        document.body.appendChild(about.getElement());
        document.body.appendChild(services.getElement());

        // 이벤트 리스너 설정
        this.setupEventListeners();
    }

    setupEventListeners() {
        // 스크롤 애니메이션
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // 모바일 메뉴 토글
        const menuButton = document.querySelector('.menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                menuButton.classList.toggle('active');
            });
        }

        // 스크롤 시 헤더 스타일 변경
        const header = document.querySelector('header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        // 서비스 카드 호버 효과
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // 폼 제출 처리
        const contactForm = document.querySelector('#contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('문의가 접수되었습니다. 곧 연락드리겠습니다.');
                contactForm.reset();
            });
        }
    }
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    new App();
}); 