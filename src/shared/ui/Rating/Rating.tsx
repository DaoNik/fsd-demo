import cn from 'classnames';

import styles from './Rating.module.css';

export interface RatingProps {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  className?: string;
  readOnly?: boolean;
}

export const Rating = ({ value = 0, max = 5, onChange, className, readOnly = false }: RatingProps) => {
  const handleSelect = (nextValue: number) => {
    if (readOnly) {
      return;
    }

    onChange?.(nextValue);
  };

  return (
    <div className={cn(styles.rating, className)} role="radiogroup" aria-label="rating">
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1;
        const active = starValue <= value;

        return (
          <button
            key={starValue}
            type="button"
            className={cn(styles.star, { [styles.starInactive]: !active })}
            onClick={() => handleSelect(starValue)}
            disabled={readOnly}
            aria-checked={active}
            role="radio"
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};
