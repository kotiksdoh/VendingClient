import { useState } from 'react'
import './App.css'
import rectangleImg from './assets/Rectangle1.png';
import underScan from './assets/Vector1Scan.png'
import underPrint from './assets/Rectangle3Print.png'
import underAdd from './assets/VectorAdd.png'
import scanImg from './assets/Frame 53.png'
import printImg from './assets/Frame 54.png'
import copyImg from './assets/Frame 55.png'
import addImg from './assets/Frame 56.png'

function App() {
  const [activePage, setActivePage] = useState('main')
  
  // Состояния для полей ввода на странице печати
  const [printName, setPrintName] = useState('')
  const [printCopies, setPrintCopies] = useState('')
  const [printComment, setPrintComment] = useState('')

  const handleScan = () => {
    console.log('Сканирование')
    setActivePage('scan')
  }

  const handlePrint = () => {
    console.log('Печать')
    setActivePage('print')
  }

  const handleCopy = () => {
    console.log('Копирование')
    setActivePage('copy')
  }

  const handleAd = () => {
    console.log('Реклама')
    setActivePage('ad')
  }

  const handleSupport = () => {
    console.log('Техподдержка')
    setActivePage('support')
  }

  const handleHome = () => {
    setActivePage('main')
    // Очищаем поля при возврате на главную
    setPrintName('')
    setPrintCopies('')
    setPrintComment('')
  }

  // Страница печати с инпутами для тестирования клавиатуры
  const PrintPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log('Отправка на печать:', {
        name: printName,
        copies: printCopies,
        comment: printComment
      })
      alert(`Печать:\nИмя: ${printName}\nКопий: ${printCopies}\nКомментарий: ${printComment}`)
    }

    return (
      <div className="print-page">
        <div className="print-card">
          <h2>Печать документа</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Имя файла:</label>
              <input
                type="text"
                value={printName}
                onChange={(e) => setPrintName(e.target.value)}
                placeholder="Введите имя файла"
                autoFocus
              />
            </div>
            
            <div className="form-group">
              <label>Количество копий:</label>
              <input
                type="number"
                value={printCopies}
                onChange={(e) => setPrintCopies(e.target.value)}
                placeholder="1"
                min="1"
                max="99"
              />
            </div>
            
            <div className="form-group">
              <label>Комментарий:</label>
              <textarea
                value={printComment}
                onChange={(e) => setPrintComment(e.target.value)}
                placeholder="Введите комментарий (опционально)"
                rows={3}
              />
            </div>
            
            <div className="form-buttons">
              <button type="button" className="cancel-button" onClick={handleHome}>
                Отмена
              </button>
              <button type="submit" className="submit-button">
                Отправить на печать
              </button>
            </div>
          </form>
          
          <div className="keyboard-test-info">
            <p>📝 Тестирование клавиатуры:</p>
            <p>Кликните на любое поле ввода - должна появиться экранная клавиатура (если настроена в Linux)</p>
          </div>
        </div>
      </div>
    )
  }

  // Основная страница с 4 кнопками
  const MainPage = () => (
    <div className='mainCont'>
      <img className='rectangleImg' src={rectangleImg} alt="" />
      <img 
        onClick={handleScan} 
        className='scanImg' 
        src={scanImg}
        alt="Сканирование"
      />
      <img className='underScan' src={underScan} alt="" />
      <img 
        onClick={handlePrint} 
        className='printImg' 
        src={printImg}
        alt="Печать"
      />
      <img className='underPrint' src={underPrint} alt="" />
      <img 
        onClick={handleCopy} 
        className='copyImg' 
        src={copyImg}
        alt="Копирование"
      />
      <img 
        onClick={handleAd} 
        className='addImg' 
        src={addImg}
        alt="Реклама"
      />
      <img className='underAdd' src={underAdd} alt="" />
    </div>
  )

  const OtherPage = ({ title }: { title: string }) => (
    <div className="other-page-container">
      <div className="other-page">
        <h2>{title}</h2>
        <p>Страница в разработке</p>
        <button className="back-button" onClick={handleHome}>
          Назад
        </button>
      </div>
    </div>
  )

  return (
    <div className="app-container">
      <header className="top-bar">
        <button className="home-button" onClick={handleHome}>
          На главную
        </button>
        <div className="phone-number-right">📞 +7 (495) 123-45-67</div>
      </header>

      <main className="main-content">
        {activePage === 'main' && <MainPage />}
        {activePage === 'print' && <PrintPage />}
        {activePage === 'scan' && <OtherPage title="Сканирование" />}
        {activePage === 'copy' && <OtherPage title="Копирование" />}
        {activePage === 'ad' && <OtherPage title="Рекламные услуги" />}
        {activePage === 'support' && <OtherPage title="Техническая поддержка" />}
      </main>
    </div>
  )
}

export default App