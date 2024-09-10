"use client"
import Image from "next/image"

const Card = ({ children, className }) => {
  return (
    <div className={`rounded-xl bg-white shadow-md ${className}`}>
      {children}
    </div>
  )
}

const Destinations = () => {
  return (
    <div className="min-h-full">
      <section className="flex items-center justify-between mt-6 border">
        <p className="font-poppins text-[26px] font-semibold">Destinations</p>
        <div className='bg-white rounded-lg p-2 basis-[10%]'>
          <select name="period" id="period" className='bg-transparent outline-none font-poppins text-xs font-medium w-full'>
            <option value="Today">This Week</option>
          </select>
        </div>
      </section>
      <section className="flex mt-6 border flex-wrap gap-[2%]">
        <div id="left" className='basis-[38%]'>
          <Card className={'w-full px-4 py-6'}>
            {/* header */}
            <div className="flex items-center justify-between">
              <p className="text-[#999999] font-poppins font-medium text-x">Scheduled Destinations</p>
              <button className="text-yellow-500 border-b border-yellow-500 px-1">Add</button>
            </div>
            {/* destinations list */}
            <div>
              <div>
                <Image/>
              </div>
              <div></div>
              <div></div>
            </div>
          </Card>
        </div>
        <div id="right" className='basis-3/5'>
          <Card className={'w-full p-2'}>
            
          </Card>
        </div>
      </section>
    </div>
  )
}
  
  export default Destinations;