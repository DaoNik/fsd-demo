import cn from 'classnames';
import type { HTMLAttributes } from 'react';

import styles from './Card.module.css';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => {
  return <div className={cn(styles.card, className)} {...props} />;
};
