import React from 'react';
import './UiFooter.css';
import { UiButton } from '../UiButton/UiButton';

export interface FooterLink {
  text: string;
  url: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface UiFooterProps {
  user?: any;
  links?: FooterLinkColumn[];
  socialLinks?: SocialLink[];
}

export const UiFooter: React.FC<UiFooterProps> = ({
  user = null,
  links = [
    {
      title: 'Компания',
      links: [
        { text: 'О нас', url: '/about' },
        { text: 'Карьера', url: '/careers' },
        { text: 'Контакты', url: '/contact' }
      ]
    },
    {
      title: 'Ресурсы',
      links: [
        { text: 'Документация', url: '/docs' },
        { text: 'Блог', url: '/blog' },
        { text: 'Поддержка', url: '/support' }
      ]
    },
    {
      title: 'Правовая информация',
      links: [
        { text: 'Условия использования', url: '/terms' },
        { text: 'Политика конфиденциальности', url: '/privacy' },
        { text: 'Cookie', url: '/cookie' }
      ]
    }
  ],
  socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com', icon: '/assets/icons/twitter.svg' },
    { name: 'Facebook', url: 'https://facebook.com', icon: '/assets/icons/facebook.svg' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '/assets/icons/instagram.svg' }
  ]
}) => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="ui-footer">
      <div className="footer-content">
        <div className="logo-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 64 64">
            <path fill="#42ade2" d="M32.9 11s-2.5-1.2-4.6-2.1c-2-.9-2.6-2.1-1.1-2.6c1.4-.5 4.7-.7 7.3-.6c1.1.1 4.6.3 4.6.3c2.6.1 2.8 1 .4 1.8L32.9 11"/>
            <path fill="#dae3ea" d="M8.3 20.4s-2.6 1-2.8 2.2c-.3 1-1.2 14.7 56.7-17.6c3.4-1.9 1.7-4-3-4.5C45-1.1 48.5 0 8.3 20.4z"/>
          </svg>
          <h2>Полет нормальный</h2>
        </div>

        <div className="links-section">
          {links.map((column, index) => (
            <div key={index} className="links-column">
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="actions-section">
          {!user && (
            <UiButton size="small" label="Наверх" onClick={scrollToTop}>

            </UiButton>
          )}
          {socialLinks.length > 0 && (
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url}>
                  <img src={social.icon} alt={social.name} width="24" height="24" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {currentYear} Полет нормальный. Все права защищены.</p>
      </div>
    </footer>
  );
};