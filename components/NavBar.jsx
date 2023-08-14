// ref: https://www.youtube.com/watch?v=hwfiYvzH9s4
"use client";
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return(
  <>
    
    <div className='hidden md:block '>
    <div className='w-full h-14 flex justify-between items-center px-8 bg-gray-300 fixed'>
      <div className='text-xl font-bold  flex items-center h-full'>
        <img className = "object-contain mat h-5/6 " 
            src='/assets/images/logo.svg'
            alt='logo'/>
          <div className = "ml-6 hackathon_title">
            MeiChu Hackthon
          </div>
      </div>
      
      <ul className='flex items-center'>
        <li className='w-16  mx-4'>
          <a  href='#temp'>活動願景</a>
        </li>
        <li className='w-16  mx-4'>
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
              <Menu.Items className='origin-top-left absolute left-0 mt-2 w-28 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none z-30'>
                <div className='py-1'>
                  <Menu.Item>
                  {({ active }) => (
                      <a
                        href='#temp'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
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
                            : 'text-gray-700',
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
                        href='#Award'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
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
        <li className='w-16 mx-4'>
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
              <Menu.Items className='origin-top-left absolute left-0 mt-2 w-28 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none z-30'>
                <div className='py-1'>
                  <Menu.Item>
                  {({ active }) => (
                      <a
                        href='#temp'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
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
                            : 'text-gray-700',
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
        <li className='w-16 ml-4'>
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
              <Menu.Items className='origin-top-left absolute left-0 mt-2 w-24 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none z-30'>
                <div className='py-1'>
                  <Menu.Item>
                  {({ active }) => (
                      <a
                        href='#temp'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
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
                            : 'text-gray-700',
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
      </ul>
    </div>
    </div>
    <div className ='h-14'> </div>
  </>
  );
};

export default Navbar;