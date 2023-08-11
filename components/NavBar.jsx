"use client";
import Link from "next/link";
import { useState, useEffect, useLayoutEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import useScrollPos from "../utils/useScrollPos";

// useSyncExternalStore to prevent error during hydration
function useWindowWidth() {
    const windowWidth = useSyncExternalStore(onResize, getWindowWidthSnapshot, getServerSnapshot);
    return {
        width: windowWidth
    };
}
function onResize(onChange) {
    window.addEventListener("resize", onChange);
    return () => window.removeEventListener("resize", onChange);
}
function getWindowWidthSnapshot() {
    return window.innerWidth;
}
function getServerSnapshot() {
    return 0;
}

function useNavbarEffect() {
    const breakpoint = 768;
    const pathname = usePathname();
    const { width } = useWindowWidth();
    const [expanded, setExpanded] = useState(width >= breakpoint);

    // Determine screenMd and expanded on resize
    useEffect(() => {
        setExpanded(width >= breakpoint);
    }, [width]);

    // Expand/collapse navbar when screen size LTBP/STBP
    useLayoutEffect(() => {
        const isScreenMd = width >= breakpoint;
        setExpanded(isScreenMd);
    }, [width]);

    // Collapse navbar on pathname change && screen size smaller than breakpoint
    useEffect(() => {
        if (width < breakpoint) {
            setExpanded(false);
        }
    }, [pathname, width]);

    return { expanded, setExpanded, screenMd: width >= breakpoint };
}

export default function Navbar() {
    const active = (useScrollPos() >= 100);
    const {expanded, setExpanded, screenMd} = useNavbarEffect();
    const links = [
        ["首頁", "#"],
        ["關於我們", "#about"],
        ["歷年作品", "#teams"],
        ["Q & A", "#qna"],
    ];
    const menuItems = [
        {
          title: 'Home',
          url: '#',
        },
        {
          title: 'Services',
          url: '#services',
          submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
        },
        {
          title: 'About',
          url: '#about',
        },
      ];
    
    function toggleNav() {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className = "bg-gray-400 h-16 w-full sticky top-0 flex items-center"> 
                <img className = "object-contain mat ml-6 h-12 " 
                src='/assets/images/logo.svg'
                alt='logo'/>
                <div className = "ml-6 hackathon_title">
                MeiChu Hackthon
                </div>
                <nav className = " mr-5 flex">
                    <ul className="flex">
                        {menuItems.map((menu, index) => {
                        return <MenuItems items={menu} key={index} />;;
                        })}
                    </ul>    
                </nav>
                {/* <nav>
                    <ul>
                        <li><a href="#section1">Home</a></li>
                        <li className="dropdown">
                        <a href="#">Services</a>
                        <ul className="dropdown-content">
                            <li><a href="#">Service 1</a></li>
                            <li><a href="#">Service 2</a></li>
                            <li><a href="#">Service 3</a></li>
                        </ul>
                        </li>
                        <li><a href="#section2">About Us</a></li>
                    </ul>
                    </nav>     */}
            </div>
        </>
    );
}


function MenuItems({items}) {
    return (
        
    <li className="ml-14 bg-yellow">
      {items.submenu ? (
        <>
        <div>
          <button className = "text-lg" type="button" aria-haspopup="menu">
            {items.title}{' '}
          </button>
          <ul className="dropdown bg-black">
            {items.submenu.map((submenu, index) => (
                <li key={index} className="">
                <a href={submenu.url}>{submenu.title}</a>
                </li>
            ))}
            </ul>
        </div>
        </>
      ) : (
        <a className = "text-lg" href={items.url}>{items.title}</a>
      )}
    </li>
    );
}
function Dropdown({submenus}) {
    return (
    <ul className="dropdown bg-black">
        {submenus.map((items, index) => (
            <li key={index} className="">
            {/* <a href={items.submenu.url}>{items.submenu.title}</a> */}
            </li>
        ))}
    </ul>
    );
}