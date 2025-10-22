import cn from 'classnames';
import type { InputHTMLAttributes, ReactNode } from 'react';

import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
  className?: string;
}

export const Checkbox = ({ className, label, ...props }: CheckboxProps) => {
  return (
    <label className={cn(styles.checkbox, className)}>
      <input type="checkbox" className={styles.input} {...props} />
      {label ? <span className={styles.label}>{label}</span> : null}
    </label>
  );
};
