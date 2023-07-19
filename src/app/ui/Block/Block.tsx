import { FC } from 'react';

import { Button } from '@/app/ui/Button';

import styles from './Block.module.scss';

interface Props {
  text: string;
  color?: any;
  size?: any;
}

export const Block: FC<Props> = ({ text, color, size }) => {

  const onClick = () => { };
  return <div className={styles.root}><Button text={text} color={color} size={size} onClick={onClick} /></div>;
}
