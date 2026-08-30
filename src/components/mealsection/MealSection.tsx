import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../imageslider/ImageSlider";
import styles from "./MealSection.module.css";

type MealSectionProps = {
  title: string;
  images: string[];
  buttonLink: string;
  variant: "light" | "green" | "cream";
};

export default function MealSection({
  title,
  images,
  buttonLink,
  variant,
}: MealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.mealSection} ${styles[variant]}`}
    >
      <div className={`${styles.content} ${visible ? styles.visible : ""}`}>
        <div className={styles.heading}>
          <h2>{title}</h2>
        </div>

        <ImageSlider images={images} />

        <Link to={buttonLink} className={styles.recipeButton}>
          recipes
        </Link>
      </div>
    </section>
  );
}
