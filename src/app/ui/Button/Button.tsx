import { FC } from 'react';

import { ArrowRight, Envelope } from '../shared/Icon';

import styles from './Button.module.scss';

interface Props {
  text: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button className={styles.root} onClick={onClick}>
      <Envelope className={styles.icon} />
      {text}
      <ArrowRight className={styles.icon} />
    </button>
  )
}
