import cn from 'classnames';
import type { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button className={cn(styles.button, className)} {...props} />;
};
