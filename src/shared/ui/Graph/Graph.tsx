import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './Graph.module.css';

export interface GraphProps {
  children?: ReactNode;
  className?: string;
  emptyState?: ReactNode;
}

export const Graph = ({ children, className, emptyState = 'No data' }: GraphProps) => {
  return <div className={cn(styles.graph, className)}>{children ?? emptyState}</div>;
};
