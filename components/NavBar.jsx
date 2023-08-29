// ref: https://www.youtube.com/watch?v=hwfiYvzH9s4
"use client";
import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import "@styles/globals.css";
import ScrollProgressIndicator from "@components/ScrollProgressIndicator";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const contest_data = [
    {
      name: "比賽流程",
      _id: "#contest_process"
    }, {
      name: "組別介紹",
      _id: "#team_intro"
    }, {
      name: "獎項資訊",
      _id: "#award"
    }
  ]
  const [phone_click, set_phone_click] = useState(false)

  return (
    <>
      <div className='block md:hidden z-50 fixed w-full'>
        <div className='w-full h-14 flex justify-between items-center px-[3%] bg-gray-200  '>
          <div className='text-xl font-bold flex items-center h-full'>
            <img className="object-contain mat h-5/6 "
              src='/assets/images/logo.svg'
              alt='logo' />
            <div className="ml-3 hackathon_title ">
              MeiChu Hackthon
            </div>
          </div>
          <div onClick={() => set_phone_click(!phone_click)} className='h-[40%] '>
            {phone_click ?
              <img src='assets/images/close.png' className='h-full w-auto' /> :
              <img src='assets/images/menu.png' className='h-full w-auto' />
            }
          </div>
        </div>
        <ul className={`pb-4 px-6 absolute bg-gray-300 z-[-1] left-0 w-full transition-all duration-500 ease-in ${phone_click ? 'top-14 ' : 'top-[-490px]'}`}>
          <li className='w-full text-xl my-4 px-4'>
            <a href='#activity_hope'>活動願景</a>
          </li>
          {
            contest_data.map((link) => (
              <li key={link.name} className='w-full text-xl my-4 px-4'>
                <a href={link._id} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <li className='w-full text-xl my-4 px-4'>
            <a href='#sign-in'>報名辦法</a>
          </li>
          <li className='w-full text-xl my-4 px-4'>
            <a href='#contest'>競賽題目</a>
          </li>
          <li className='w-full text-xl my-4 px-4'>
            <a href='#sponsor'>贊助</a>
          </li>
          <li className='w-full bg-[#A8D5CC] text-white px-4 py-1 rounded-2xl'>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target="_blank">立即報名</a>
          </li>
        </ul>
        <ScrollProgressIndicator />
      </div >
      <div className='hidden md:block z-50 fixed w-full'>
        <div className='w-full h-14 flex justify-between items-center px-[2%] bg-gray-200  '>
          <div className='text-xl font-bold  flex items-center h-full'>
            <img className="object-contain mat h-5/6 "
              src='/assets/images/logo.svg'
              alt='logo' />
            <div className="ml-3 hackathon_title ">
              MeiChu Hackthon
            </div>
          </div>

          <ul className='flex items-center max-h-10'>
            <li className='w-auto  mx-2'>
              <a href='#activity_hope'>活動願景</a>
            </li>
            <li className='w-auto  mx-2'>
              <Menu as='div' className='relative inline-block text-left'>
                <Menu.Button>比賽資訊</Menu.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-100'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='origin-top-left absolute left-0 mt-2 w-28 rounded-md shadow-lg divide-y divide-gray-100 focus:outline-none z-30 bg-gray-400 text-white'>
                    <div className='py-1'>
                      {contest_data.map((data, index) => (
                        <Menu.Item key = {index}>
                          {({ active }) => (
                            <a
                              href={data._id}
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {data.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className='w-auto  mx-2'>
              <a href='#sign-in'>報名辦法</a>
            </li>
            <li className='w-auto  mx-2'>
              <a href='#contest'>競賽題目</a>
            </li>
            <li className='w-auto  mx-2'>
              <a href='#sponsor'>贊助</a>
            </li>
            <li className='w-auto ml-1 bg-[#A8D5CC] text-white px-4 py-1 font-bold rounded-2xl'>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target="_blank">立即報名</a>
            </li>
          </ul>
        </div>
        <ScrollProgressIndicator />
        {/* <div className='h-14'> </div> */}
      </div>
      <div className = 'w-full h-14'></div>
    </>
  );
};

export default Navbar;
