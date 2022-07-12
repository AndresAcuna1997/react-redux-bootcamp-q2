import styles from "./FilterCards.module.scss";

export const FilterCards = ({ categories = [] }) => {
  return (
    <div className={styles.FilterCard}>
      FilterCards
      <div>
        {categories.map(({ name, id }) => (
          <p key={id}>{name}</p>
        ))}
      </div>
    </div>
  );
};
