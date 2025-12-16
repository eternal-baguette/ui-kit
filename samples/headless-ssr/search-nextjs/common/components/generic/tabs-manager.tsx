import type {
  TabManager as TabManagerController,
  TabManagerState,
} from '@eternal-baguette/headless-react/ssr';
import type {FunctionComponent} from 'react';
import TabManagerCommon from '../common/tab-manager';

interface TabManagerProps {
  staticState: TabManagerState;
  controller?: TabManagerController;
  children: React.ReactNode;
}

export const TabManager: FunctionComponent<TabManagerProps> = ({
  children,
}: TabManagerProps) => {
  return <TabManagerCommon>{children}</TabManagerCommon>;
};
