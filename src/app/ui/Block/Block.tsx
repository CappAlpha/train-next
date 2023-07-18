import { FC } from 'react';

import { Button } from '@/app/ui/Button';

import styles from './Block.module.scss';

interface Props {
  text: string;
}

export const Block: FC<Props> = ({ text }) => {

  const onClick = () => { };
  return <div className={styles.root}><Button text={text} onClick={onClick} /></div>;
}
