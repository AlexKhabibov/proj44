import styles from './UserProfileUI.module.css';

function UserProfile() {

    return (
        <div className={styles.profile}>
            <h2 className={styles.profile__title}>Профиль пользователя</h2>

            <div className={styles.profile__info}>
                <div className={styles.profile__avatar}>
                    <img
                        src='https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg'
                        alt="Аватар пользователя"
                        width="200"
                    />
                </div>

                <div className={styles.profile__details}>
                    <p className={styles.profile__name}>Имя: {}</p>
                    <p className={styles.profile__email}>Email: {}</p>
                </div>
            </div>

            <div className={styles.profile__sections}>
                <div className={styles.profile__section}>
                    <h3>Личные данные</h3>
                    <button>Изменить</button>
                </div>

                <div className={styles.profile__section}>
                    <h3>Мои заказы</h3>
                    <button>Открыть</button>
                </div>

                <div className={styles.profile__section}>
                    <h3>Адреса доставки</h3>
                    <button>Управлять</button>
                </div>

                <div className={styles.profile__section}>
                    <h3>Настройки</h3>
                    <button>Открыть</button>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;