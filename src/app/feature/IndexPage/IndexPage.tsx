import { FC } from "react";

import { Block } from "@/app/ui/Block";

import {
  button
} from "./mock";

import styles from "./IndexPage.module.scss";

export const IndexPage: FC = () => {
  return (
    <div className={styles.root}>
      <Block text={button.text} color={button.color} />
    </div>
  );
};
