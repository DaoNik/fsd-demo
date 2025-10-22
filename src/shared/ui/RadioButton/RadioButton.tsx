import cn from 'classnames';
import type { InputHTMLAttributes, ReactNode } from 'react';

import styles from './RadioButton.module.css';

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  className?: string;
}

export const RadioButton = ({ className, label, ...props }: RadioButtonProps) => {
  return (
    <label className={cn(styles.radioButton, className)}>
      <input type="radio" className={styles.input} {...props} />
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
};
