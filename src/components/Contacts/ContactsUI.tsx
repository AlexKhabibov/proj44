import React from "react";
import type { FormEvent } from "react";
import styles from './ContactsUI.module.css';

const ContactsUI: React.FC = () => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Форма отправлена!");
    };

    return (
        <div className={styles.contactsPage}>
            <h1 className={styles.title}>Контакты</h1>

            <section className={styles.contactInfo}>
                <h2>Наши данные</h2>
                <p><strong>Адрес:</strong> г. Москва, ул. Примерная, 10</p>
                <p><strong>Телефон:</strong> +7 (123) 456-78-90</p>
                <p><strong>Email:</strong> info@shop.ru</p>
                <p><strong>Время работы:</strong> Пн–Пт 9:00–18:00</p>
            </section>

            <section className={styles.contactFormSection}>
                <h2>Напишите нам</h2>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <label>
                        Имя:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Сообщение:
                        <textarea name="message" rows={5} required></textarea>
                    </label>
                    <button type="submit">Отправить</button>
                </form>
            </section>

            <section className={styles.contactMap}>
                <h2>Где мы находимся</h2>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.123456!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a1234567890%3A0xabcdef1234567890!2z0J_RgNC-0YHQvy4g0J3QsNC80YHQutC-0LvRjNC90LAg0JrQsNGA0LjQutCw0Y8g0L7QsdC7LCDQkNC-0YHQutC40Lkg0L7QsdC7LCDQvdCw0LvRjNC90YvQuSDRgtC40YHRgtGA0LjQuQ!5e0!3m2!1sru!2sru!4v1600000000000!5m2!1sru!2sru"
                        width="100%"
                        height={400}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Карта магазина"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default ContactsUI;