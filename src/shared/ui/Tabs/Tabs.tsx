import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './Tabs.module.css';

export interface TabItem {
  id: string;
  label: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange?: (id: string) => void;
  className?: string;
}

export const Tabs = ({ items, activeId, onChange, className }: TabsProps) => {
  return (
    <div className={cn(styles.tabs, className)}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={cn(styles.tab, {
            [styles.tabActive]: item.id === activeId,
          })}
          onClick={() => onChange?.(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
