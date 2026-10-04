
function Header({ fullName, birthDate, school, university }) {
  return (
    <div className="profile-card">
      <p>
        <strong>ПІБ</strong>
        {fullName}
      </p>
      <p>
        <strong>Дата народження</strong>
        {birthDate}
      </p>
      <p>
        <strong>Освіта · школа</strong>
        {school}
      </p>
      <p>
        <strong>Освіта · університет</strong>
        {university}
      </p>
    </div>
  );
}

export default Header;
