import { useState } from 'react'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('main') // main, scan, print, copy, ad, support

  // Обработчики для кнопок
  const handleScan = () => {
    console.log('Сканирование')
    setActivePage('scan')
    // Здесь будет логика сканирования
  }

  const handlePrint = () => {
    console.log('Печать')
    setActivePage('print')
    // Здесь будет логика печати
  }

  const handleCopy = () => {
    console.log('Копирование')
    setActivePage('copy')
    // Здесь будет логика копирования
  }

  const handleAd = () => {
    console.log('Реклама')
    setActivePage('ad')
    // Здесь будет логика рекламы
  }

  const handleSupport = () => {
    console.log('Техподдержка')
    setActivePage('support')
    // Здесь будет логика техподдержки
  }

  const handleHome = () => {
    setActivePage('main')
  }

  // Основная страница с 4 кнопками
  const MainPage = () => (
    <div className="main-buttons-container">
      <button className="main-button scan-button" onClick={handleScan}>
        <span className="button-icon">📷</span>
        Сканируй
      </button>
      <button className="main-button print-button" onClick={handlePrint}>
        <span className="button-icon">🖨️</span>
        Печатай
      </button>
      <button className="main-button copy-button" onClick={handleCopy}>
        <span className="button-icon">📄</span>
        Копируй
      </button>
      <button className="main-button ad-button" onClick={handleAd}>
        <span className="button-icon">📢</span>
        Хочу рекламу
      </button>
    </div>
  )

  // Заглушки для других страниц
  const OtherPage = ({ title }: { title: string }) => (
    <div className="other-page">
      <h2>{title}</h2>
      <p>Страница в разработке</p>
      <button className="back-button" onClick={handleHome}>
        Назад
      </button>
    </div>
  )

  return (
    <div className="app-container">
      {/* Верхняя панель */}
      <header className="top-bar">
        <div className="phone-number">📞 +7 (999) 123-45-67</div>
        <button className="home-button" onClick={handleHome}>
          🏠 На главную
        </button>
        <div className="phone-number-right">📞 +7 (999) 123-45-67</div>
      </header>

      {/* Основной контент */}
      <main className="main-content">
        {activePage === 'main' && <MainPage />}
        {activePage === 'scan' && <OtherPage title="Сканирование" />}
        {activePage === 'print' && <OtherPage title="Печать" />}
        {activePage === 'copy' && <OtherPage title="Копирование" />}
        {activePage === 'ad' && <OtherPage title="Рекламные услуги" />}
        {activePage === 'support' && <OtherPage title="Техническая поддержка" />}
      </main>

      {/* Нижняя панель с кнопкой техподдержки */}
      <footer className="bottom-bar">
        <button className="support-button" onClick={handleSupport}>
          🛠️ Техподдержка
        </button>
      </footer>
    </div>
  )
}

export default App