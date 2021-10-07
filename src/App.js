import "./css/App.css";
import adam from "./images/adam.png";
import venera from "./images/venera.png";
import jesus from "./images/jesus.png";
import rembrandt from "./images/rembrandt.png";
import call from "./images/call.png";
import map from "./images/mapmark.png";
import axios from "axios";
import { useState } from "react";

function App() {
  const [load, setLoad] = useState(false);

   async function fetch() {
    setLoad(true);
    setTimeout(async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      console.log(res.data);
      setLoad(false);
    }, 4000);
  }
  return (
    <>
     
      <nav className="nav">
        <div className="container">
          <ul className="nav-list">
    <li className="nav-item">  <div className="square" style={{width: '48px',
height: '48px', background: '#403432'
}}></div></li>
            <li className="nav-item">
              <a className="nav-link">Каталог</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Доставка</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Оплата</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Контакты</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">О галерее</a>
            </li>
            <div>
              <input type="search" placeholder="Поиск по названию картины" />
              <button className="btn btn--normal">Найти</button>
            </div>
          </ul>
        </div>
        <hr style={{ marginTop: "20px" }} />
      </nav>
      <main>
        <div className="container">
          <h1>Картины эпохи Возрождения</h1>
          {load ? <div className="loader">1234</div> : " "}
          <div className="images">
            <div className="card">
              <img src={venera} alt="img" />
              <div className="body">
                <h3 className="header">
                  «Рождение Венеры»
                  <br /> Сандро Боттичелли
                </h3>

                <div>
                  <div className="price">
                    <del>2 000 000 $</del>
                    <h2>1 000 000 $</h2>
                  </div>
                  <button className="btn btn--normal" onClick={fetch}>
                    Купить
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={jesus} alt="img" />
              <div className="body">
                <h3 className="header">
                  «Тайная вечеря» <br /> Леонардо да Винчи
                </h3>

                <div>
                  <div className="price">
                    <h2>3 000 000 $</h2>
                  </div>
                  <button className="btn btn--normal" onClick={fetch}>
                    Купить
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={adam} alt="img" />
              <div className="body">
                <h3 className="header">
                  «Сотворение Адама» <br />
                  Микеланджело
                </h3>

                <div>
                  <div className="price">
                    <del>2 000 000 $</del>
                    <h2>1 000 000 $</h2>
                  </div>
                  <button className="btn btn--normal" onClick={fetch}>
                    Купить
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={rembrandt} alt="img" />
              <div className="body">
                <h3 className="header">
                  «Урок анатомии» <br /> Рембрандт
                </h3>

                <div>
                  <div className="price">
                    <del>2 000 000 $</del>
                    <h2>1 000 000 $</h2>
                  </div>
                  <button className="btn btn--normal" onClick={fetch}>
                    Купить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <nav className="nav">
          <div className="container">
            <ul className="nav-list">
              <li className="nav-item">  <div className="square" style={{width: '48px',
height: '48px', background: '#403432'
}}></div></li>
              <li className="nav-item">
                <a className="nav-link">Каталог</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Доставка</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Оплата</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Контакты</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">О галерее</a>
              </li>
              <span>
                <img src={call} alt="" />
                +7 (495) 555-55-55{" "}
              </span>{" "}
              <span>
                <img src={map} alt="" /> г. Алматы, ул. Фурманова, 24
              </span>
            </ul>
          </div>
          <hr style={{ marginTop: "20px" }} />
        </nav>
      </footer>
    </>
  );
}

export default App;
