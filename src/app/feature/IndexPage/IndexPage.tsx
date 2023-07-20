import { FC } from "react";

import { Block } from "@/app/ui/Block";

import {
  button
} from "./mock";

import styles from "./IndexPage.module.scss";

export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Block color={button.color} size={button.size} />
    </div>
  );
};
