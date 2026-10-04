import { Component } from "react";


class Content extends Component {
  render() {
    return (
      <section className="content-card" aria-label="Хобі та улюблені фільми">
        <h3>Мої хобі</h3>
        <ul>
          <li>Програмування</li>
          <li>Єдиноборства</li>
          <li>Риболовля</li>
          <li>Налаштування Linux</li>
        </ul>

        <h3>Улюблені фільми</h3>
        <ol className="movie-list">
          <li>Бійцівський клуб</li>
          <li>Комерсант</li>
          <li>Острів проклятих</li>
        </ol>

        <h3>Про Київ</h3>
        <p>
          Київ — столиця України, розташована на берегах Дніпра. Місто поєднує
          давню історію, зелені парки та сучасні райони. Серед його відомих
          символів — Софійський собор, Хрещатик і монумент «Батьківщина-мати».
        </p>
      </section>
    );
  }
}

export default Content;
