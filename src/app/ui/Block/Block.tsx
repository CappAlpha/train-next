import { FC } from 'react';

import { Button } from '@/app/ui/Button';

import styles from './Block.module.scss';

interface Props {
  color?: any;
  size?: any;
}

export const Block: FC<Props> = ({ color, size }) => {

  const onClick = () => { };
  return (
    <div className={styles.root}>
      <Button color={color} size={size} onClick={onClick}>
        {/* Test */}
      </Button>
    </div>
  );
};
