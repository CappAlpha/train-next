import { FC } from 'react';

import { Button } from '@/app/ui/Button';

import styles from './Block.module.scss';

interface Button {
  text: string;
}

interface Props {
  button: Button;
}

export const Block: FC<Props> = ({ button }) => {
  return <div className={styles.root}><Button button={button} /></div>;
}
