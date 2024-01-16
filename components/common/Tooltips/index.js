import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { FiInfo } from "react-icons/fi";
import styles from './styles.module.css'

const Tooltips = ({children}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger asChild>
          <button className={`${styles.IconButton} text-tertiary hover:text-primary focus:text-primary ring-default`}>
            <FiInfo />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={`${styles.TooltipContent} bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-primary`} sideOffset={5}>
          {children}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default Tooltips;