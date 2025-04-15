// TODO: props type
const Profile = (props: any) => {
  return (
    <div className="profile">
      <div className="profile__image">
        <img src={'/profile/me-1.png'} className="profile__image__i" />
      </div>
      <div className="profile__info">
        <div className="profile__info__description">
          Fullstack Web Разработчик
        </div>
        <div className="profile__info__name">
          Дмитрий Цынарев
        </div>
        <div className="profile__info__stats">
          <div className="profile__info__stats__stat">
            <span className="key">Опыт:</span> 5+ лет
          </div>
          <div className="profile__info__stats__stat">
           <span className="key">Живу:</span> в Сочи
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile