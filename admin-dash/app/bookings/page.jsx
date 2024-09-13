"use client"
import { Card } from '../components';
import Chart from 'react-apexcharts';

function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

const InfoCard = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-xl p-2 ${className}`}>
      {children}
    </div>
  )
}

const Bookings = () => {
  const info = [
    {title: 'Total Bookings', icon: 'bi-bookmark-check', value: '14.7 M', percent_delta: 32, title_color: 'favblue'},
    {title: 'New Bookings', icon: 'bi-bookmark-plus', value: '100', percent_delta: -12, title_color: 'favblue'},
    {title: 'Total Bookings', icon: 'bi-postcard', value: '500', percent_delta: 25, title_color: 'favgold'},
    {title: 'Total Bookings', icon: 'bi-postcard', value: 'XAF 3M', percent_delta: 32, title_color: 'favgold'},
  ];

  const bookings = [1, 2, 3, 4, 5];
  // Taking a maximum of 10 schedules being displayed
	const numOfPages = Math.ceil(bookings.length / 10);

  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
  return (
    <main className="min-h-full">
      <section className="flex items-center justify-between mt-6">
        <p className="font-poppins text-[26px] font-semibold">Bookings</p>
        <div className="bg-white rounded-lg p-2 basis-[10%]">
          <select
            name="period"
            id="period"
            className="bg-transparent outline-none font-poppins text-xs font-medium w-full"
          >
            <option value="Today">This Week</option>
          </select>
        </div>
      </section>
      <section className="grid grid-cols-4 justify-items-stretch gap-x-6 mt-6">
        {info.map((sample, idx) => {
          let dirxn;
          let delta_color;
          switch (Math.sign(sample.percent_delta)) {
            case -1:
              dirxn = 'down'; delta_color = 'caretred'; break;
            case 1:
              dirxn = 'up'; delta_color = 'caretgreen'; break;
            case 0:
              dirxn = ''; delta_color = ''; break;
            default:
          }
          return (
            <InfoCard className={'p-6 flex flex-col gap-8'}>
              <p className={`font-poppins font-medium text-base text-${sample.title_color}`}><i className={`bi ${sample.icon} me-3`}></i> {sample.title}</p>
              <p className='flex items-center gap-4'>
                <span className='font-poppins font-semibold text-3xl'>{sample.value}</span>
                <span className={`font-poppins text-base text-${delta_color}`}><i className={`bi bi-caret-${dirxn}-fill`}></i> {Math.abs(sample.percent_delta)}%</span>
              </p>
            </InfoCard>
          )
        })}
      </section>
      <section className='mt-6'>
        <InfoCard className={'h-96 w-full py-4 px-6'}>
          <p className="font-poppins font-medium text-base text-favgray">Booking Type Statistics</p>
          <Chart 
            options={options}
            series={series}
            type="area"
            height='340'
          />
        </InfoCard>
      </section>
      <section className='mt-6'>
        <Card className={"w-full py-6 h-fit"}>
          <div className="flex items-center justify-between py-8 px-6">
            <p className="font-poppins text-xl font-medium">All Bookings</p>
            <div className="border-b border-black pb-1"><span className="bi bi-search me-2"></span><input type="search" placeholder='Search' className='outline-none'/></div>
          </div>
          <table className="fav-table w-full border-collapse table-auto">
            <thead className='border-t border-b'>
              <tr>
                <th>NAME</th>
                <th>DEPARTURE</th>
                <th>DESTINATION</th>
                <th>TRAVEL TYPE</th>
                <th>CLASS</th>
                <th>TRAVEL DATE</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((el, idx) => 
                (
                  <tr key={idx}>
                    <td>Lonson LePro</td>
                    <td>Yaounde</td>
                    <td>Buea</td>
                    <td>One Way</td>
                    <td>VIP</td>
                    <td>{(new Date()).toLocaleDateString()}</td>
                  </tr>
                )
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={8}>
                  <div className="w-full flex items-center justify-end mt-6 gap-4 pe-12">
                    <button className='flex items-center'><i className="bi bi-arrow-left-short text-lg"></i>previous</button>
                    {range(1, numOfPages).map((num, idx) => {
                      return (
                        <div key={idx} className="w-8 aspect-square bg-black rounded-md text-white justify-center flex items-center">{num}</div>
                      )
                    })}
                    <button className='flex items-center'>next<i className="bi bi-arrow-right-short text-lg"></i></button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </Card>
      </section>
    </main>
  )
}
  
  export default Bookings;