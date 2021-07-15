import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <>
            <div className="flex flex-col h-screen font-mono  mb-8 align-center items-center">
                <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/20/1494967383-ghk060117bobrecipes02.jpg" alt="" className="h-50 w-80 rounded md-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">
                        Potato Salad
                    </h2>
                    <h4 className="mb-2">Crispy, delicious, nutrition</h4>
                    <span>$40</span>
                    <Link to="/" className="bg-yellow-500 hover:bg-yellow-300 py-4 px-8 rounded-full text-2xl transition duration-300 ease-in-out flex items-center ">Order Now <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                    </svg></Link>
                </div>
            </div>
            <div className="flex flex-col h-screen font-mono py-20 align-center items-center">
                <img src="https://1.bp.blogspot.com/-MYQVdLK5urw/XbIEIVTuf_I/AAAAAAAAHzI/0xXRSwV764civ0Qyd-xsLTpHhOi5MSOjgCLcBGAsYHQ/s1600/Hasselback+Potatoes+with+Garlic.JPG" alt="" className="h-50 w-80 rounded md-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">
                        Roast Potato
                    </h2>
                    <h4 className="mb-2">Crispy, delicious, nutrition</h4>
                    <span>$30</span>
                    <Link to="/" className="bg-yellow-500 hover:bg-yellow-300 py-4 px-8 rounded-full text-2xl transition duration-300 ease-in-out flex items-center ">Order Now <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                    </svg></Link>
                </div>
            </div>

        </>
    );
};

export default Content;