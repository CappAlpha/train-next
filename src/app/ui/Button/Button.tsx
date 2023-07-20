import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { ArrowRight, Envelope } from '../shared/Icon';

import styles from './Button.module.scss';

interface Props {
  children?: ReactNode;
  color?: 'red' | 'blue';
  size?: 'lg' | 'sm',
  onClick: () => void;
}

export const Button: FC<Props> = ({ children = 'Кнопка', color, size, onClick }) => {
  return (
    <button className={cn(styles.root,
      color && styles[`color_${color}`],
      size && styles[`size_${size}`]
    )}
      onClick={onClick}>
      <Envelope className={styles.icon} />
      {children}
      <ArrowRight className={styles.icon} />
    </button >
  );
};
