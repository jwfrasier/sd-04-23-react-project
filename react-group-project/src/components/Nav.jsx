import React from 'react'
import { useState } from 'react'
import NavLink from './NavLink'
import {FaHome, FaReact} from "react-icons/fa"
import {PiNumberOneBold, PiNumberTwoBold} from "react-icons/pi"

const Nav = ({isSelected, setIsSelected}) => {
    const links = [
        {text: "Home", icon: <FaHome />},
        {text: "Team 1", icon: <PiNumberOneBold />},
        {text: "Team 2", icon: <PiNumberTwoBold />},
    ]

    const handleLinkClick = (linkName) => {
        setIsSelected(linkName)
    }
  return (
		<nav className="absolute bottom-0 w-full bg-gray-200 h-20  text-slate-800 flex items-center nav_shadow lg:relative lg:justify-between">
			<div className='hidden lg:flex items-center gap-3'>
				<span className='text-4xl'>
					<FaReact />
				</span>
                <h1 className='text-2xl'>React Project</h1>
			</div>
			<ul className="flex w-full justify-evenly lg:w-1/4">
				{links.map((link, index) => (
					<NavLink
						link={link}
						key={index}
						isSelected={isSelected}
						setIsSelected={setIsSelected}
						handleLinkClick={handleLinkClick}
					/>
				))}
			</ul>
		</nav>
  );
}

export default Nav