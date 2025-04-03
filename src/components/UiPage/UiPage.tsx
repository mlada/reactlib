import React, { useState } from 'react';
import './UiPage.css';
import { UiHeader } from '../UiHeader/UiHeader';
import { UiCard } from '../UiCard/UiCard';
import { UiButton } from '../UiButton/UiButton';
import { UiFooter } from '../UiFooter/UiFooter';

interface User {
  name: string;
}

export const UiPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const doLogout = () => {
    setUser(null);
  };

  const doLogin = () => {
    setUser({ name: 'Jane Doe' });
  };

  const doCreateAccount = () => {
    setUser({ name: 'Jane Doe' });
  };

  return (
    <article>
      <UiHeader
        user={user}
        onLogout={doLogout}
        onLogin={doLogin}
        onCreateAccount={doCreateAccount}
      />
      
      <section className="ui-page">
        <h2>Являясь всего лишь частью</h2>
        <p>
          Являясь всего лишь частью общей картины, базовые сценарии поведения пользователей, 
          вне зависимости от их уровня, должны быть рассмотрены исключительно в разрезе 
          маркетинговых и финансовых предпосылок. Повседневная практика показывает, что 
          консультация с широким активом влечет за собой процесс внедрения и модернизации 
          системы массового участия. Таким образом, высокое качество позиционных исследований 
          не даёт нам иного выбора, кроме определения дальнейших направлений развития! 
          Не следует, однако, забывать, что социально-экономическое развитие однозначно 
          фиксирует необходимость дальнейших направлений развития. А также некоторые 
          особенности внутренней политики преданы социально-демократической анафеме.
        </p>

        <UiCard header="Пример карточки" icon="/assets/icons/sample.svg" hoverable={true}>
          <p>Это содержимое карточки. Здесь может быть любой контент.</p>
          <div slot="actions">
            <UiButton label='Отмена' primary={false}></UiButton>
            <UiButton label='Сохранить'></UiButton>
          </div>
        </UiCard>

        <UiCard imageUrl="/assets/sample-image.jpg" imageAlt="Пример изображения">
          <h4>Карточка с изображением</h4>
          <p>Эта карточка содержит изображение в качестве заголовка.</p>
        </UiCard>
      </section>

      <UiFooter user={user} />
    </article>
  );
};