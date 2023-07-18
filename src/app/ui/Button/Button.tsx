import { FC } from 'react';

import { ArrowRight, Envelope } from '../shared/Icon';

import styles from './Button.module.scss';

interface Button {
  text: string;
}

interface Props {
  button: Button;
}

export const Button: FC<Props> = ({ button }) => {
  return (
    <button className={styles.root}>
      <div className={styles.btnWrap}>
        <Envelope className={styles.icon} />
        <div className={styles.text}>{button.text}</div>
        <ArrowRight className={styles.icon} />
      </div>
    </button>
  )
}
