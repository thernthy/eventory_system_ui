'use client';
import MiniCalendar from 'components/calendar/MiniCalendar';
import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
import TotalSpent from 'components/admin/default/TotalSpent';
import PieChartCard from 'components/admin/default/PieChartCard';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import CheckTable from 'components/admin/default/CheckTable';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import DateSelector from 'components/admin/date_picker/date_selector';
import Apple from 'components/icons/Apple';
import { useTranslation } from 'react-i18next';
const Dashboard = () => {
  const { t } = useTranslation();
  const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };
  return (
    <div>
      {/* Card widget */}

      {/* <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Earnings'}
          subtitle={'$340.5'}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={'Spend this month'}
          subtitle={'$642.39'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Sales'}
          subtitle={'$574.34'}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={'Your Balance'}
          subtitle={'$1,000'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'New Tasks'}
          subtitle={'145'}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={'Total Projects'}
          subtitle={'$2433'}
        />
      </div> */}

      {/* Charts */}

      {/* <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div> */}

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* CheckTable Section */}
        <div className="grid-row-1 md:grid-row-3 grid gap-4 md:col-span-2">
          <TotalSpent />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <WeeklyRevenue />
            <DailyTraffic />
          </div>
          <ComplexTable tableData={tableDataComplex} />
          <CheckTable tableData={tableDataCheck} />
        </div>

        {/* Right Sidebar */}
        <div className="bg-00A5A5 space-y-4 rounded-lg p-4">
          <DateSelector />
          <PieChartCard />
          <div className="mt-4 flex flex-col gap-3 pb-3">
            <div className="">
              <h1 className="pb-2 text-2xl text-white">
                <b>ទំនិញលក់</b>
              </h1>
              <hr className="border-26-op" />
            </div>

            <div className="sold-list bg-03B1B1 flex flex-row items-center gap-3 rounded-lg p-2 text-white">
              <div>
                <img
                  width="60"
                  src="https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg"
                />
              </div>
              <b>
                <span className=" text-sm text-yellow-500">$</span>10
              </b>
              <div
                className="product_title"
                title={'Apple Images – Browse 4,720,513 Stock Photos'}
              >
                {truncateText(
                  'Apple Images – Browse 4,720,513 Stock Photos',
                  25,
                )}
              </div>

              <div className="sold-status btn-status btn-status-success">
                {t('sold')}
              </div>
            </div>
            <div className="sold-list bg-03B1B1 flex flex-row items-center gap-3 rounded-lg p-2 text-white">
              <div>
                <img
                  width="60"
                  src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/07/Red-Apple-vector-PNG.png"
                />
              </div>
              <b>
                <span className=" text-sm text-yellow-500">$</span>15
              </b>
              <div
                className="product_title"
                title={'Apple Images – Browse 4,720,513 Stock Photos'}
              >
                {truncateText(
                  'Apple Images – Browse 4,720,513 Stock Photos',
                  25,
                )}
              </div>

              <div className="sold-status btn-status btn-status-success">
                {t('sold')}
              </div>
            </div>
            <div className="sold-list bg-03B1B1 flex flex-row items-center gap-3 rounded-lg p-2 text-white">
              <div>
                <img
                  width="60"
                  src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/07/Red-Apple-vector-PNG.png"
                />
              </div>
              <b>
                <span className=" text-sm text-yellow-500">$</span>15
              </b>
              <div
                className="product_title"
                title={'Apple Images – Browse 4,720,513 Stock Photos'}
              >
                {truncateText(
                  'Apple Images – Browse 4,720,513 Stock Photos',
                  25,
                )}
              </div>

              <div className="sold-status btn-status btn-status-success">
                {t('sold')}
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3 pb-3">
            <div className="">
              <h1 className="pb-2 text-2xl text-white">
                <b>ទំនិញបញ្ជាទិញ</b>
              </h1>
              <hr className="border-26-op" />
            </div>

            <div className="sold-list bg-03B1B1 flex flex-row items-center gap-3 rounded-lg p-2 text-white">
              <div>
                <img
                  width="60"
                  src="https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg"
                />
              </div>
              <b>
                <span className=" text-sm text-yellow-500">$</span>10
              </b>
              <div
                className="product_title"
                title={'Apple Images – Browse 4,720,513 Stock Photos'}
              >
                {truncateText(
                  'Apple Images – Browse 4,720,513 Stock Photos',
                  25,
                )}
              </div>

              <div className="sold-status btn-status btn-status-pedding">
                {t('sold')}
              </div>
            </div>
            <div className="sold-list bg-03B1B1 flex flex-row items-center gap-3 rounded-lg p-2 text-white">
              <div>
                <img
                  width="60"
                  src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/07/Red-Apple-vector-PNG.png"
                />
              </div>
              <b>
                <span className=" text-sm text-yellow-500">$</span>15
              </b>
              <div
                className="product_title"
                title={'Apple Images – Browse 4,720,513 Stock Photos'}
              >
                {truncateText(
                  'Apple Images – Browse 4,720,513 Stock Photos',
                  25,
                )}
              </div>

              <div className="sold-status btn-status btn-status-success">
                {t('sold')}
              </div>
            </div>
            <div className="sold-list bg-03B1B1 flex flex-row items-center gap-3 rounded-lg p-2 text-white">
              <div>
                <img
                  width="60"
                  src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/07/Red-Apple-vector-PNG.png"
                />
              </div>
              <b>
                <span className=" text-sm text-yellow-500">$</span>15
              </b>
              <div
                className="product_title"
                title={'Apple Images – Browse 4,720,513 Stock Photos'}
              >
                {truncateText(
                  'Apple Images – Browse 4,720,513 Stock Photos',
                  25,
                )}
              </div>

              <div className="sold-status btn-status btn-status-delete">
                {t('sold')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable tableData={tableDataComplex} />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
