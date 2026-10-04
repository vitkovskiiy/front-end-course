
function Image({ src, alt, city }) {
  return (
    <figure className="city-card">
      <img src={src} alt={alt} />
      <figcaption>
        <h3>{city}</h3>
        <p>Панорама міста на берегах Дніпра.</p>
      </figcaption>
    </figure>
  );
}

export default Image;
