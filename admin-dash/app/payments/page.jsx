"use client";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Card } from '../components';
import { InfoCard, data, options, range } from "../bookings/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import mtn from '../assets/mtn_logo-removebg-preview 1.png';
import orange from '../assets/orange_money-removebg-preview 1.png'

const Chart = dynamic(() => import('react-google-charts'), {
	ssr: false
});

const Payments = () => {

  const weeklyData = [
    ['Day', 'Amount', {role: 'style'}],
    ['', 4, '#2C3B6A'],
    ['', 2, '#DBB33C'],
    ['', 6, '#2C3B6A'],
    ['', 7, '#DBB33C'],
    ['', 3, '#2C3B6A'],
    ['', 9, '#DBB33C'],
    ['', 5, '#2C3B6A'],
  ];
  const monthlyData = [
    ['Month', 'Amount', {role: 'style'}],
    ['', 4, '#2C3B6A'],
    ['', 2, '#DBB33C'],
    ['', 6, '#2C3B6A'],
    ['', 7, '#DBB33C'],
  ];

  const payments = [1, 2, 3, 4, 5];
  // Taking a maximum of 10 schedules being displayed
	const numOfPages = Math.ceil(payments.length / 10);
  return (
    <main className="min-h-full">
      <section className="flex items-center justify-between mt-6">
        <p className="font-poppins text-[26px] font-semibold">Payments</p>
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
      <section className="grid grid-cols-4 gap-x-6 mt-6">
        <InfoCard className={'col-span-2 py-4 px-6'}>
          <p className="font-poppins font-medium text-base text-favgray">Payment Amount <span className="float-end">Total: <span className='text-black text-xl'>XAF 200.00M</span></span></p>
          <Chart 
            chartType='LineChart'
            width='100%'
            height='340px'
            data={data}
            options={options}
          />
        </InfoCard>
        <InfoCard className={'py-3 px-5'}>
          <div className="flex items-center justify-between">
            <p className="font-poppins font-medium text-base text-favgray">Payment Method</p>
            <a href="/settings" className="text-favgold px-2 border-b border-favgold font-poppins text-base">Add</a>
          </div>
          <div className="flex items-center mt-6 gap-5">
            <div className="w-16 aspect-square border border-yellow-400 p-1 rounded-lg">
              <Image src={mtn}/>
            </div>
            <div>
              <p className='font-poppins text-sm font-medium'>Lonson LePro</p>
              <p className='font-poppins text-xs font-normal text-favgray'>677 - 345 - 231</p>
            </div>
            <button className="ms-auto bi bi-pencil text-favblue"></button>
          </div>
          <div className="flex items-center mt-6 gap-5">
            <div className="w-16 aspect-square border border-orange-400 rounded-lg flex items-center">
              <Image src={orange}/>
            </div>
            <div>
              <p className='font-poppins text-sm font-medium'>Lonson LePro</p>
              <p className='font-poppins text-xs font-normal text-favgray'>677 - 345 - 231</p>
            </div>
            <button className="ms-auto bi bi-pencil text-favblue"></button>
          </div>
          {/* divider */}
          <div className="border my-6"></div>
          <p className="font-poppins font-medium text-base text-favgray">Users</p>
          <div className="flex items-center mt-6 gap-5">
            <div className="w-10 aspect-square border border-yellow-400 p-1 rounded-lg">
              <Image src={mtn}/>
            </div>
            <div className='h-4 w-full border bg-slate-200 rounded-full overflow-clip'>
              <div className="w-1/4 h-full bg-favblue"></div>
            </div>
            <span className="font-poppins text-sm font-normal">550</span>
          </div>
          <div className="flex items-center mt-6 gap-5">
            <div className="w-10 aspect-square border border-orange-400 rounded-lg flex items-center">
              <Image src={orange}/>
            </div>
            <div className='h-4 w-full border bg-slate-200 rounded-full overflow-clip'>
              <div className="w-1/3 h-full bg-favblue"></div>
            </div>
            <span className="font-poppins text-sm font-normal">850</span>
          </div>
        </InfoCard>
        <InfoCard className={'py-3 px-5'}>
          <p className="font-poppins text-base font-medium"><i className="bi bi-bank2 me-3"></i> Paymeny Activity</p>
          <div className="border-[0.5px] my-4"></div>
          <Accordion type="single" collapsible defaultValue='item-1'>
            <AccordionItem value="item-1">
              <AccordionTrigger className='font-poppins font-medium text-sm text-[#A8A8A8]'>Per Week</AccordionTrigger>
              <AccordionContent>
                <Chart 
                  chartType='ColumnChart' width='100%' height='80px' 
                  data={weeklyData}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='font-poppins font-medium text-sm text-[#A8A8A8]'>Per Month</AccordionTrigger>
              <AccordionContent>
                <Chart 
                  chartType='ColumnChart' width='100%' height='80px' 
                  data={monthlyData}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className='font-poppins font-medium text-sm text-[#A8A8A8]'>Per Quarter</AccordionTrigger>
              <AccordionContent>
                <Chart 
                  chartType='ColumnChart' width='100%' height='80px' 
                  data={monthlyData}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className='font-poppins font-medium text-sm text-[#A8A8A8]'>Per Year</AccordionTrigger>
              <AccordionContent>
                <Chart 
                  chartType='ColumnChart' width='100%' height='80px' 
                  data={monthlyData}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </InfoCard>
      </section>
      <section className='mt-6'>
        <Card className={"w-full py-6 h-fit"}>
          <div className="flex items-center justify-between py-8 px-6">
            <p className="font-poppins text-xl font-medium">Payment History</p>
            <div className="border-b border-black pb-1"><span className="bi bi-search me-2"></span><input type="search" placeholder='Search' className='outline-none'/></div>
          </div>
          <table className="fav-table w-full border-collapse table-auto">
            <thead className='border-t border-b'>
              <tr>
                <th>NAME</th>
                <th>AMOUNT</th>
                <th>METHOD</th>
                <th>TIME</th>
                <th>DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((el, idx) => 
                (
                  <tr key={idx}>
                    <td>Lonson LePro</td>
                    <td>XAF 7,500</td>
                    <td>Mobile Money</td>
                    <td>{(new Date()).toLocaleTimeString()}</td>
                    <td>{(new Date()).toLocaleDateString()}</td>
                    <td>Paid</td>
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

export default Payments;