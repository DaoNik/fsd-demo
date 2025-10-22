import cn from 'classnames';
import type { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, type = 'text', ...props }: InputProps) => {
  return <input type={type} className={cn(styles.input, className)} {...props} />;
};
