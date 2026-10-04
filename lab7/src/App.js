import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsGallery from "./components/GoodsGallery";
import kyivPhoto from "./assets/kyiv.jpg";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="back-link" href="../index.html">До списку лабораторних</a>
        <p className="lab-label">Лабораторна робота №7 · React · Варіант 6</p>
      </header>

      <main className="page-content">
        <section className="section-block" aria-labelledby="profile-title">
          <div className="section-heading">
            <p className="eyebrow">Завдання 1</p>
            <h1 id="profile-title">Сторінка-візитка</h1>
          </div>
          <Header
            fullName="Вітковський Іван Сергійович"
            birthDate="17 листопада 2006 року"
            school="Школа №2"
            university="КПІ ім. Ігоря Сікорського, група ІМ-44"
          />
          <div className="profile-layout">
            <Content />
            <Image src={kyivPhoto} alt="Панорама Києва біля монумента Батьківщина-мати" city="Київ" />
          </div>
        </section>

        <section className="section-block goods-section" aria-labelledby="goods-title">
          <div className="section-heading">
            <p className="eyebrow">Завдання 2</p>
            <h2 id="goods-title">Галерея товарів</h2>
            <p className="section-description">Шість фруктів у картках, дані яких передаються через props.</p>
          </div>
          <GoodsGallery />
        </section>
      </main>

      <footer className="page-footer">Вітковський Іван Сергійович · ІМ-44</footer>
    </div>
  );
}

export default App;
