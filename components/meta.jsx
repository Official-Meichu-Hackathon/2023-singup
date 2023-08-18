"use client";
import React, { useState } from 'react';
import useCollapse from 'react-collapsed'
import '@styles/animation.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Meta = () =>{
    return(
        <>
            <img src='/assets/images/meta3.jpg' id='meta'/>
        </>
    );
} 
export default Meta;
