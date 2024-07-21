import { Award, BarChart, Calendar, ChevronDown, ChevronRight, ChevronUp, Cloudy, SunDim } from 'lucide-react'
import React from 'react'
import { Chartt } from './Chartt'
import { Barchartt } from './Barchartt'
import Rightside from './Rightside'

const Header = () => {
  return (
    <div className="h-auto flex md:flex-row flex-col bg-[#E4E6FA]">
        <div className="flex flex-col p-5 md:w-3/4">
           <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col md:text-base text-4xl">
            <h1 className="md:font-semibold font-bold">Dashboard</h1>
            <h2>Sunday,18 December 2020</h2>
            </div>
            <div className="flex flex-row bg-[#FFFFFF] items-center rounded-md p-1">
                <Calendar className="md:size-6 size-12 " />
                <h1 className="md:text-sm text-3xl font-semibold">Jan - Feb 2020</h1>
                <ChevronDown className="md:size-6 size-12 " />
            </div>
           </div>
           <div className="bg-[#FFD8DA] rounded-xl md:p-3 p-4 md:py-3 py-10 md:mt-4 mt-14 text-[#D5797F]">
            <div className="ml-4">
                <h1 className="md:text-4xl text-[10rem] -mb-12 md:mb-0">Welcome ,</h1>
                <h1 className="md:text-4xl text-[7rem] mb-4">Izabella Tabakova</h1>
                <h2 className="md:text-base text-7xl ">You have 2 project to finish and already completed 68%</h2> 
                <h2 className="md:text-base text-7xl ">from your monthly level. Keep going to your goal.</h2>
            </div>
             <button className="bg-[#FFFFFF] rounded-2xl px-2 py-1 shadow-md mt-4 ml-5">
                <div className="flex flex-row">
                    <h1 className="md:text-base text-7xl">More</h1>
                    <ChevronRight className="md:size-6 size-20" />
                </div>
             </button>
           </div>
           <div className="md:mt-3 mt-14 flex md:flex-row flex-col gap-3">
           <div className="md:w-[50rem] w-[74.5rem] md:mb-0 mb-7">
           <Chartt />
           </div>
           <div className="flex flex-col bg-[#555BB3] p-2 md:w-36 w-[74.5rem] md:rounded-md rounded-3xl gap-10">
            <div className="flex flex-row justify-between mt-5">
              <h1 className="md:text-2xl text-8xl text-white font-semibold ml-5">40+</h1>
              <BarChart color='white' className="mr-4 md:size-8 size-24"/>
            </div>
            <div className="md:h-0.5 h-2 md:w-32 w-[64rem] bg-white opacity-20"></div>
            <div className="flex flex-row justify-between">
              <h1 className="md:text-2xl text-8xl text-white font-semibold ml-5">60+</h1>
              <BarChart color='white' className="mr-4 md:size-8 size-24"/>
            </div>
           </div>
           </div>
           <div className="flex md:flex-row flex-col">
              <div className="md:w-[35rem] w-[74.5rem] md:mt-3 mt-16">
              <Barchartt />
              </div>
            <div className="rounded-lg md:space-y-1 space-y-6  md:p-3 p-10 md:mt-2 mt-14 md:ml-2 ml-20 md:w-[25rem] w-[65rem]">
              <div className="flex flex-row gap-6 ml-2 md:text-base text-7xl bg-white md:rounded-lg rounded-3xl md:px-2 px-14 md:py-1 py-14">
                <Award className="mt-1 bg-[#F7E4E5] rounded-xl p-2 md:size-10 size-32" />
                <div>
                  <h1>Dashboard Revamp</h1>
                  <h1 className="text-slate-400">10:00 . Hope Project</h1>
                </div>
                </div> 
                <div className="flex flex-row gap-6 ml-2 md:text-base text-7xl md:rounded-lg rounded-3xl md:px-2 px-14 md:py-1 py-14">
                <Cloudy className="mt-1 bg-[#7077d0] rounded-xl p-2 md:size-10 size-32" />
                <div>
                  <h1>Dashboard Revamp</h1>
                  <h1 className="text-slate-400">10:00 . Hope Project</h1>
                </div>
                </div>  
                <div className="flex flex-row gap-6 ml-2 md:text-base text-7xl md:rounded-lg rounded-3xl md:px-2 px-14 md:py-1 py-14">
                <SunDim className="mt-1 bg-[#F7E4E5] rounded-xl p-2 md:size-10 size-32" />
                <div>
                  <h1>Dashboard Revamp</h1>
                  <h1 className="text-slate-400">10:00 . Hope Project</h1>
                </div>
                </div>
            </div>
           </div>
        </div>
        <Rightside />
    </div>
  )
}

export default Header