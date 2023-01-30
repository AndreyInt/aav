import styles from './styles.module.css';
export const Content = () => {
  return (
    <section className={styles.content}>
      <a href="http://localhost:3004/" className={styles.content__container}>
        <div className={styles.content__img_wrapper}>
          <img src="https://i.pinimg.com/originals/9c/51/99/9c5199ab78ecb7522cf347a8b69f1299.jpg" alt="Мужчина" className={styles.content__img}/>
        </div>
        <h2>Мужское</h2>
        <p className={styles.content_text}>Смотреть</p>
      </a>
      <a href="http://localhost:3004/" className={styles.content__container}>
        <div className={styles.content__img_wrapper}>
          <img className={styles.content__img} src="https://ic.pics.livejournal.com/thestyleeditor/61283962/39194/39194_original.jpg" alt="Девушка"/>
        </div>
        <h2>Женское</h2>
        <p className={styles.content_text}>Смотреть</p>
      </a>
      <a href="http://localhost:3004/" className={styles.content__container}>
        <div className={styles.content__img_wrapper}>
          <img src="https://heaclub.ru/tim/de120bbf8d9f410d354fe3b6a3361b95.jpg" className={styles.content__img} alt="Ребенок"/>
        </div>
        <h2>Детское</h2>
        <p className={styles.content_text}>Смотреть</p>
      </a>
    </section>
  );
};