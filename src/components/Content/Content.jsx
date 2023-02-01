import styles from './styles.module.css';
export const Content = () => {
  return (
    <section className={styles.content}>
      <div className={styles.card}>
        
        <a href="http://localhost:3004/" className={styles.card__front}>
          <div className={styles.content__img_wrapper}>
            <img src="https://i.pinimg.com/originals/9c/51/99/9c5199ab78ecb7522cf347a8b69f1299.jpg" alt="Мужчина" className={styles.content__img}/>
          </div>
          <h2>Мужское</h2>
        </a>

        <div className={styles.card__back}>
            <h3>Кросовки</h3>
            <h3>Кеды</h3>
            <h3>Ботинки</h3>
            <h3>Куртки</h3>
          </div>
          
      </div>

      <div className={styles.card}>
        
        <a href="http://localhost:3004/" className={styles.card__front}>
          <div className={styles.content__img_wrapper}>
            <img src="https://ic.pics.livejournal.com/thestyleeditor/61283962/39194/39194_original.jpg" alt="Девушка" className={styles.content__img}/>
          </div>
          <h2>Женское</h2>
        </a>

        <div className={styles.card__back}>
            <h3>Кросовки</h3>
            <h3>Кеды</h3>
            <h3>Ботинки</h3>
            <h3>Куртки</h3>
          </div>
          
      </div>

      <div className={styles.card}>
        
        <a href="http://localhost:3004/" className={styles.card__front}>
          <div className={styles.content__img_wrapper}>
            <img src="https://heaclub.ru/tim/de120bbf8d9f410d354fe3b6a3361b95.jpg" alt="Ребенок" className={styles.content__img}/>
          </div>
          <h2>Детское</h2>
        </a>

        <div className={styles.card__back}>
            <h3>Кросовки</h3>
            <h3>Кеды</h3>
            <h3>Ботинки</h3>
            <h3>Куртки</h3>
          </div>
          
      </div>

    </section>
  );
};