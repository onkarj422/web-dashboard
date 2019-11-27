import React from 'react';
import classNames from 'classnames';
import DailyVisitors from './widgets/DailyVisitors';
import SingleInfoWidget from './widgets/SingleInfo';
import WidgetTable from './widgets/WidgetTable';
import {
  siteInfo,
  mostVisitedPages,
  socialMediaTraffic,
  MOST_VISITED_PAGES,
  SOCIAL_MEDIA_TRAFFIC,
} from './constants';
import './styles.scss';

const responsiveContentPadding = 'p-3 xs:p-3 sm:p-3 md:p-6 lg:p-6 xl:p-6';
const responsiveMarginBotton = 'mb-3 xs:mb-3 sm:mb-3 md:mb-3 lg:mb-6 xl:mb-6';
const responsiveFlex =
  'flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row';
const responsiveWidthSmallWidget =
  'w-auto sm:w-auto md:w-full lg:w-3/12 xl:w-3/12';
const selectiveMarginBottom = 'mb-3 xs:mb-3 sm:mb-3 md:mb-3 lg:mb-0 xl:mb-0';
const selectiveMarginLeft = 'ml-0 xs:ml-0 sm:ml-0 md:ml-0 lg:ml-6 xl:ml-6';
const responsiveFlexAuto =
  'flex-auto xs:flex-auto sm:flex-auto md:flex-auto lg:flex-1 xl:flex-1';

const PageVisitors = () => (
  <div className={classNames('content', responsiveContentPadding)}>
    <div className={responsiveMarginBotton}>
      <DailyVisitors />
    </div>
    <div className={classNames(responsiveFlex, responsiveMarginBotton)}>
      <For each="info" of={siteInfo} index="i">
        <div
          className={classNames(
            'flex-grow',
            responsiveWidthSmallWidget,
            i < siteInfo.length - 1 && selectiveMarginBottom,
            i > 0 && selectiveMarginLeft,
          )}
        >
          <SingleInfoWidget
            title={info.title}
            count={info.count}
            difference={info.difference}
            isPositive={info.isPositive}
          />
        </div>
      </For>
    </div>
    <div className={classNames(responsiveFlex, responsiveMarginBotton)}>
      <div className={classNames('flex-auto', selectiveMarginBottom)}>
        <WidgetTable
          title="Most Visited Pages"
          data={mostVisitedPages}
          columnConfigs={MOST_VISITED_PAGES}
        />
      </div>
      <div className={classNames(responsiveFlexAuto, selectiveMarginLeft)}>
        <WidgetTable
          title="Social Media Traffic"
          data={socialMediaTraffic}
          columnConfigs={SOCIAL_MEDIA_TRAFFIC}
        />
      </div>
    </div>
  </div>
);

export default PageVisitors;
