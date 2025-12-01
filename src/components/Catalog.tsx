function Catalog() {
    return (

        <div>
            <aside className="categories">
                <h2>Категории товаров</h2>
                <ul className="category-list">

                    <li className="category-item">
                        Электроника
                        <ul className="subcategory-list">
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

                    <li className="category-item">
                        Одежда
                        <ul className="subcategory-list">
                            <li>Мужская</li>
                            <li>Женская</li>
                            <li>Детская</li>
                        </ul>
                    </li>

                    <li className="category-item">
                        Книги
                        <ul className="subcategory-list">
                            <li>Художественная литература</li>
                            <li>Документальная литература</li>
                            <li>Детские книги</li>
                        </ul>
                    </li>

                    <li className="category-item">
                        Игрушки
                        <ul className="subcategory-list">
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

export default Catalog;