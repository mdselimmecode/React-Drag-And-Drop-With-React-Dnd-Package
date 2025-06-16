import React from 'react';

const Header = ({ text, bg, count }) => {
    return (
        <div>
            <h2 className={`${bg} text-white py-4 text-center uppercase text-xl font-bold`}>{text} <span className='bg-white rounded-full w-5 p-2 ml-4 h-5 text-black'>{count}</span></h2>
        </div>
    );
};

export default Header;