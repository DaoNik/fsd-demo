import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './InfoBox.module.css';

export interface InfoBoxProps {
  title?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export const InfoBox = ({ title, children, actions, className }: InfoBoxProps) => {
  return (
    <section className={cn(styles.infoBox, className)}>
      {title ? <header className={styles.title}>{title}</header> : null}
      {children ? <div className={styles.content}>{children}</div> : null}
      {actions}
    </section>
  );
};
