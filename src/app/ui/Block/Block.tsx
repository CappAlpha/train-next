import { FC } from 'react';

import { Button } from '@/app/ui/Button';

import styles from './Block.module.scss';

interface Props {
  text: string;
  color: any;
}

export const Block: FC<Props> = ({ text, color }) => {

  const onClick = () => { };
  return <div className={styles.root}><Button text={text} color={color} onClick={onClick} /></div>;
}
