import Image from "next/image";
import css from "./Home.module.css";
import Button from "../UI/Button/Button";

export const HomeHero = () => {
  return (
    <section className={css.hero}>
      <Image
        src="/image/background.jpg"
        alt="Camping van in the forest"
        fill
        priority
        className={css.backgroundImage}
      />

      <div className={css.overlay} />

      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.subtitle}>
            You can find everything you want in our catalog
          </p>

          <Button text="View Now" href={`/catalog`} />
        </div>
      </div>
    </section>
  );
};
