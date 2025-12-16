import type {
  Tab as TabController,
  TabManager,
  TabState,
} from '@eternal-baguette/headless/ssr';
import {type FunctionComponent, useEffect, useState} from 'react';
import TabCommon from '../common/tab';

interface TabProps {
  staticState: TabState;
  controller?: TabController;
  tabManager?: TabManager;
  tabName: string;
  tabLabel: string;
}

export const Tab: FunctionComponent<TabProps> = ({
  staticState,
  controller,
  tabManager,
  tabName,
  tabLabel,
}) => {
  const [state, setState] = useState(staticState);

  useEffect(
    () => controller?.subscribe(() => setState({...controller.state})),
    [controller]
  );

  return (
    <TabCommon
      state={state}
      methods={controller}
      activeTab={tabManager?.state.activeTab ?? ''}
      tabName={tabName}
      tabLabel={tabLabel}
    />
  );
};
