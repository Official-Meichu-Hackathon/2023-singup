// ref: https://www.youtube.com/watch?v=hwfiYvzH9s4
"use client";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import "@styles/globals.css";
import ScrollProgressIndicator from "@components/ScrollProgressIndicator";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
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
        </div>
      </div>
      <div className='hidden md:block z-50 fixed w-full'>
        <div className='w-full h-14 flex justify-between items-center px-[3%] bg-gray-200  '>
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
              <a href='#temp'>活動願景</a>
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
                  <Menu.Items className='origin-top-left absolute left-0 mt-2 w-28 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none z-30 bg-gray-400 text-white'>
                    <div className='py-1'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#temp'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            活動流程
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#temp'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : ' ',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            組別介紹
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#temp'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : ' ',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            獎項資訊
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className='w-auto mx-2'>
              <Menu as='div' className='relative inline-block text-left'>
                <Menu.Button>競賽題目</Menu.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-100'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='origin-top-left absolute left-0 mt-2 w-28 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none z-30 bg-gray-400 text-white'>
                    <div className='py-1'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#temp'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : "",
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            題目介紹
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#temp'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            賽前工作坊
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className='w-auto mx-2'>
              <Menu as='div' className='relative inline-block text-left'>
                <Menu.Button>活動相關</Menu.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-100'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='origin-top-left absolute left-0 mt-2 w-24 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none z-30 bg-gray-400 text-white'>
                    <div className='py-1'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#temp'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : ' ',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            贊助企業
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#temp'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : ' ',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            工作人員
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className='w-auto ml-2 bg-[#A8D5CC] text-white px-5 py-1 font-bold rounded-2xl'>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target="_blank">立即報名</a>
            </li>
          </ul>
        </div>
        <ScrollProgressIndicator />
        {/* <div className='h-14'> </div> */}
      </div>

    </>
  );
};

export default Navbar;
