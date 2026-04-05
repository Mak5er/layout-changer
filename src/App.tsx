import { ChangeEvent, startTransition, useEffect, useState } from 'react';
import {
  convertQwertyToYcuken,
  convertYcukenToQwerty,
  getTextStats,
} from './lib/layoutMapper';

type PaneProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onCopy: () => void;
};

function TextPane({ id, label, placeholder, value, onChange, onCopy }: PaneProps) {
  const stats = getTextStats(value);

  return (
    <section className="pane">
      <div className="pane__header">
        <label className="pane__label" htmlFor={id}>
          {label}
        </label>

        <button type="button" className="copy-button" onClick={onCopy}>
          Копіювати
        </button>
      </div>

      <textarea
        id={id}
        className="pane__textarea"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        spellCheck={false}
      />

      <div className="pane__meta">
        <span>{stats.characters} символів</span>
        <span>{stats.words} слів</span>
      </div>
    </section>
  );
}

function App() {
  const [englishText, setEnglishText] = useState('');
  const [ukrainianText, setUkrainianText] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setToastMessage(null), 1500);
    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  const handleEnglishChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setEnglishText(value);

    startTransition(() => {
      setUkrainianText(convertQwertyToYcuken(value));
    });
  };

  const handleUkrainianChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setUkrainianText(value);

    startTransition(() => {
      setEnglishText(convertYcukenToQwerty(value));
    });
  };

  const handleCopy = async (value: string) => {
    if (!value.trim()) {
      setToastMessage('Немає що копіювати');
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setToastMessage('Скопійовано');
    } catch {
      setToastMessage('Не вдалося скопіювати');
    }
  };

  return (
    <div className="app">
      <main className="shell">
        <header className="hero">
          <p className="hero__eyebrow">Layout Changer</p>
          <h1 className="hero__title">Зміна розкладки без зайвих рухів</h1>
          <p className="hero__subtitle">
            Якщо випадково набрав текст не тією розкладкою, просто встав його сюди.
            Сервіс одразу перетворить QWERTY на ЙЦУКЕН або навпаки.
          </p>
        </header>

        <div className="converter">
          <TextPane
            id="english-text"
            label="Текст в англійській розкладці"
            placeholder="Наприклад: ghbdtn, якшо забув переключити мову"
            value={englishText}
            onChange={handleEnglishChange}
            onCopy={() => handleCopy(englishText)}
          />

          <TextPane
            id="ukrainian-text"
            label="Текст в українській розкладці"
            placeholder="Наприклад: руддщ, якщо треба повернути в англійську"
            value={ukrainianText}
            onChange={handleUkrainianChange}
            onCopy={() => handleCopy(ukrainianText)}
          />
        </div>

        <section className="note">
          <p>
            Усе працює прямо в браузері, тому текст нікуди не відправляється і
            лишається тільки у тебе.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__line">
          Built with <span className="footer__heart">❤</span> by{' '}
          <a href="https://github.com/Mak5er" target="_blank" rel="noreferrer">
            mak5er
          </a>
        </p>
        <p className="footer__line">© 2026 All rights reserved.</p>
      </footer>

      {toastMessage ? (
        <div className="toast" role="status" aria-live="polite">
          {toastMessage}
        </div>
      ) : null}
    </div>
  );
}

export default App;
