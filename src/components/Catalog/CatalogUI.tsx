import styles from './CatalogUI.module.css';

function CatalogUI() {
    return (
        <div className={styles.container}>
            <aside className={styles.categories}>
                <h2>Категории товаров</h2>
                <ul className={styles.categoryList}>
                    <li className={styles.categoryItem}>
                        Электроника
                        <ul className={styles.subcategoryList}>
                            <li>Смартфоны
                                <ul>
                                    <li>iOS</li>
                                    <li>Android</li>
                                </ul>
                            </li>
                            <li>Ноутбуки</li>
                            <li>Аксессуары</li>
                        </ul>
                    </li>

                    <li className={styles.categoryItem}>
                        Одежда
                        <ul className={styles.subcategoryList}>
                            <li>Мужская</li>
                            <li>Женская</li>
                            <li>Детская</li>
                        </ul>
                    </li>

                    <li className={styles.categoryItem}>
                        Книги
                        <ul className={styles.subcategoryList}>
                            <li>Художественная литература</li>
                            <li>Документальная литература</li>
                            <li>Детские книги</li>
                        </ul>
                    </li>

                    <li className={styles.categoryItem}>
                        Игрушки
                        <ul className={styles.subcategoryList}>
                            <li>Развивающие</li>
                            <li>Фигурки</li>
                            <li>Настольные игры</li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default CatalogUI;