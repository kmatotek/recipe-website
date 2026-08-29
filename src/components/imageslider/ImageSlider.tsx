import styles from "./ImageSlider.module.css";

export default function ImageSlider({ images }) {
  // Repeat the images so the track is long enough
  const repeatedImages = [...images, ...images, ...images];

  return (
    <div className={styles.container}>
      <div className={styles.track}>
        {/* Set A */}
        {repeatedImages.map((src, index) => (
          <img
            key={`a-${index}`}
            src={src}
            alt="Recipe"
            className={styles.floatingImage}
          />
        ))}

        {/* Set B */}
        {repeatedImages.map((src, index) => (
          <img
            key={`b-${index}`}
            src={src}
            alt="Recipe"
            className={styles.floatingImage}
          />
        ))}
      </div>
    </div>
  );
}
