import React from 'react'
import { Piechartt } from './Piechartt'
import { Award, Cloudy, Mail, SunDim } from 'lucide-react'

const Rightside = () => {
  return (
    <div className="md:bg-white h-auto w-1/4 p-2 md:ml-0 ml-8 bg-[#E4E6FA]">
        <div>
            <div className="md:text-base text-[5rem] md:ml-0 ml-10 leading-none text-nowrap md:mb-0 mb-20">
                <h1 className="font-semibold">Profile</h1>
                <h1>80% Completed your profile.</h1>
            </div>
            <div className="">
                <Piechartt />
                <h1 className="font-semibold md:text-lg text-8xl text-nowrap md:ml-[5.3rem] ml-[10rem]">Izabella Tabakova</h1>
                <h1 className="font-light md:text-sm text-7xl text-nowrap md:ml-[7rem] ml-[16rem]">UI/UX Designer</h1>
            </div>
            
              <div className="flex flex-row md:justify-between md:p-2 p-10 md:text-base text-6xl text-nowrap md:gap-0 gap-[25rem] md:mt-0 mt-20">
              <h1 className="font-bold">Current Project</h1>
              <h1>View All</h1>
              </div>
              <div className="flex flex-row justify-between md:gap-0 gap-20 md:p-2 p-10">
                <div className="md:h-40 h-[55rem] md:w-32 rounded-lg bg-[#F5F6FA] md:shadow-lg shadow-xl">
                 <h1 className="md:font-medium font-bold md:text-base text-5xl md:ml-2 ml-10 md:mt-5 mt-12">Hope</h1>
                 <h1 className="font-normal md:text-sm text-2xl md:ml-2 ml-10">UI/UX Design</h1>
                 <div className="md:h-20 h-[20rem] md:w-32 w-[30rem] rounded-lg bg-[#4D53AF] md:mt-5 mt-[27rem]">
                  <div className="text-[#f97a8d] text-opacity-90 inline-block md:rounded-lg rounded-3xl p-1 opacity-50 md:mt-10 mt-[11rem] md:text-base text-7xl md:ml-11 ml-[10rem] bg-[#FFFFFF]">48%</div>
                 </div>
                </div>
                <div className="md:h-40 h-[55rem] md:w-32 rounded-lg bg-[#F5F6FA] md:shadow-lg shadow-xl">
                 <h1 className="md:font-medium font-bold md:text-base text-5xl md:ml-2 ml-10 md:mt-5 mt-12">Hope</h1>
                 <h1 className="font-normal md:text-sm text-2xl md:ml-2 ml-10">UI/UX Design</h1>
                 <div className="md:h-20 h-[20rem] md:w-32 w-[30rem] rounded-lg bg-[#4D53AF] md:mt-5 mt-[27rem]">
                  <div className="text-[#f97a8d] text-opacity-90 inline-block md:rounded-lg rounded-3xl p-1 opacity-50 md:mt-10 mt-[11rem] md:text-base text-7xl md:ml-11 ml-[10rem] bg-[#FFFFFF]">48%</div>
                 </div>
                </div>
              </div>
                <div className="md:text-base text-6xl text-nowrap md:mt-0 mt-16 md:p-0 p-10">
                  <h1 className="md:font-normal font-bold">Comment</h1>
                  <h1 className="md:font-thin font-medium">You have 3 comment on project</h1>
                </div>
                <div className="rounded-lg mt-1 md:ml-1 ml-12 md:p-0 p-4 text-sm w-[17rem] md:space-y-1.5 space-y-10">
              <div className="p-1 flex flex-row md:gap-4 gap-10 md:ml-2 ml-16 items-center bg-[#F5F6FA] md:rounded-lg rounded-2xl md:h-[2.6rem] h-[10rem] md:w-[16.5rem] w-[52rem]">
                <Mail className="mt-1 md:ml-4 ml-14 p-2 md:size-11 size-36" />
                <div>
                  <h1 className="md:font-normal font-bold md:text-base text-6xl text-nowrap">Dashboard Revamp</h1>
                  <h1 className="font-light md:text-base text-4xl">10:00 . Hope Project</h1>
                </div>
                </div> 
                <div className="p-1 flex flex-row md:gap-4 gap-10 md:ml-2 ml-16 items-center bg-[#F5F6FA] md:rounded-lg rounded-2xl md:h-[2.6rem] h-[10rem] md:w-[16.5rem] w-[52rem]">
                <Mail className="mt-1 md:ml-4 ml-14 p-2 md:size-11 size-36" />
                <div>
                  <h1 className="md:font-normal font-bold md:text-base text-6xl text-nowrap">Dashboard Revamp</h1>
                  <h1 className="font-light md:text-base text-4xl">10:00 . Hope Project</h1>
                </div>
                </div>  
                <div className="p-1 flex flex-row md:gap-4 gap-10 md:ml-2 ml-16 items-center bg-[#F5F6FA] md:rounded-lg rounded-2xl md:h-[2.6rem] h-[10rem] md:w-[16.5rem] w-[52rem]">
                <Mail className="mt-1 md:ml-4 ml-14 p-2 md:size-11 size-36" />
                <div>
                  <h1 className="md:font-normal font-bold md:text-base text-6xl text-nowrap">Dashboard Revamp</h1>
                  <h1 className="font-light md:text-base text-4xl">10:00 . Hope Project</h1>
                </div>
                </div> 
            </div>
              
        </div>
    </div>
  )
}

export default Rightside