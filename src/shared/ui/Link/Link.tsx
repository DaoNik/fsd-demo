import cn from 'classnames';
import type { AnchorHTMLAttributes } from 'react';

import styles from './Link.module.css';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export const Link = ({ className, external = false, rel, target, ...props }: LinkProps) => {
  const finalTarget = external ? '_blank' : target;
  const finalRel = external ? 'noopener noreferrer' : rel;

  return <a className={cn(styles.link, className)} target={finalTarget} rel={finalRel} {...props} />;
};
