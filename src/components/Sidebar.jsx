import React, {useState} from 'react'
import { Boxes, Menu, ChevronDown, CirclePlus, CircleSlash, ClipboardPlus, Columns2, LayoutDashboard, Settings, StickyNote } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="">
    <div className="md:hidden top-0 left-0 inline-block right-0 p-4">
        <Menu className="size-20" color='#555BB3' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
    </div>
    <div className={`md:w-52 md:z-0 z-20 w-[50rem] md:h-auto h-[120rem] md:text-base text-8xl md:relative ${isSidebarOpen ? 'hidden' : 'block h-auto'} md:block bg-[#FFFFFF] md:p-4 p-16`}>
      <div className="flex flex-row">
        <CircleSlash className="md:size-10 size-20" color='#555BB3'/>
        <h1 className="font-bold md:text-2xl ml-1 mt-0.5 text-[#555BB3]">Collab.io</h1>
      </div>
      <div className="md:mt-6 mt-20">
        <h1 className="font-bold md:text-lg">Project</h1>
        <div className="flex flex-row bg-[#F5F6FA] md:p-2 rounded-xl md:w-36 w-[40rem] p-16">
          <h1 className="md:text-sm text-6xl font-medium mt-0.5">Hope Project</h1>
          <ChevronDown color='#B6B9C7' className="ml-4 mt-0.5 md:size-6 size-20"/>
        </div>
      </div>
      <div className="md:mt-8 ml-2 mt-14">
        <nav className="md:space-y-7 space-y-24 ">
          <NavLink
            to="/dashboards"
            className={({ isActive }) =>
              `flex flex-row gap-2 ml-2 ${isActive ? 'border-r-4 border-[#F2446E] rounded-sm' : ''}`
            }
          >
            <LayoutDashboard color='#B6B9C7' className="md:size-6 size-20" />
            <div>Dashboard</div>
          </NavLink>
          <NavLink
            to="/backlog"
            className={({ isActive }) =>
              `flex flex-row gap-2 ml-2 ${isActive ? 'border-r-4 border-[#F2446E] rounded-sm' : ''}`
            }
          >
            <Boxes color='#B6B9C7' className="md:size-6 size-20" />
            <div>Backlog</div>
          </NavLink>
          <NavLink
            to="/active-sprint"
            className={({ isActive }) =>
              `flex flex-row gap-2 ml-2 ${isActive ? 'border-r-4 border-[#F2446E] rounded-sm' : ''}`
            }
          >
            <Columns2 color='#B6B9C7' className="md:size-6 size-20" />
            <div>Active Sprint</div>
          </NavLink>
          <NavLink
            to="/report"
            className={({ isActive }) =>
              `flex flex-row gap-2 ml-2 ${isActive ? 'border-r-4 border-[#F2446E] rounded-sm' : ''}`
            }
          >
            <ClipboardPlus color='#B6B9C7' className="md:size-6 size-20" />
            <div>Reports</div>
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive }) =>
              `flex flex-row gap-2 ml-2 ${isActive ? 'border-r-4 border-[#F2446E] rounded-sm' : ''}`
            }
          >
            <StickyNote color='#B6B9C7' className="md:size-6 size-20" />
            <div>Pages</div>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex flex-row gap-2 ml-2 ${isActive ? 'border-r-4 border-[#F2446E] rounded-sm' : ''}`
            }
          >
            <Settings color='#B6B9C7' className="md:size-6 size-20" />
            <div>Settings</div>
          </NavLink>
        </nav>
        <div className="bg-[#F5F6FA] p-3 mt-4 rounded-lg">
          <div className="flex flex-row">
            <h1>Add New Task</h1>
            <CirclePlus className="ml-2 md:size-6 size-44" color='#D5797F'/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
