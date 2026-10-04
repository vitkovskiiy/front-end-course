## Запуск

```bash
npm install
npm start
```
Застосунок відкриється на локальному сервері. Для production-збірки виконайте `npm run build`.

## я зробив невеликий гайд на структуру

- `src/App.js` — головний компонент сторінки.
- `src/components/Header.jsx` — функціональний компонент з props.
- `src/components/Content.jsx` — класовий компонент зі статичним вмістом; state не потрібен.
- `src/components/Image.jsx` — функціональний компонент міського зображення з props.
- `src/components/GoodsGallery.jsx` — передає дані шести товарів карткам.
- `src/components/GoodsCard.jsx` — картка товару з props.
- `src/assets` — локальні зображення міста та фруктів.
