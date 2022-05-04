import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import Undraw_camera from '../public/plaatjes/undraw_camera.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Projectkaart } from '../components/projectkaart';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>Hi, Ik ben Simon. 🔥 </h1>
        <section className={styles.cardContainer}>
          {/* <Projectkaart
            titel="Lely Nederland"
            beschrijving="Development"
            Plaatje={Undraw_camera}
            paginaUrl="/projecten/Lely"
          />
          <Projectkaart
            titel="Lely Nederland"
            beschrijving="Development"
            Plaatje={Undraw_camera}
            paginaUrl="/projecten/Lely"
          /> */}
          <Verhaalkaart>
            <h2>Accesbility first</h2>
            <p>Meer over de Accesbility</p>
            <img src="https://i.postimg.cc/3RhrZR6j/novaskin-minecraft-wallpaper.png" />
            <figcaption>
              Foto van een poppetje die tegen een boom zitten
            </figcaption>
          </Verhaalkaart>
        </section>
        <Footer />
      </main>
    </>
  );
};
