import React, { useEffect, useState } from 'react'
import flag from "../assets/flag.png"

const IndependenceCard = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => setShow(true), 100);
    }, []);
    return (
        <div className="bg-[#032e15] h-screen w-full flex flex-col justify-center items-center" >
            <div className='flex gap-2 justify-center items-center'>
                <img src={flag} className={`h-40 w-20 transition-all duration-3000 delay-200 transform animate-fade-in ${show ? "opacity-100" : "opacity-0"
                    }`}
                />
                
                    <h2 className={`text-[40px] text-[#fff] leading-30 font-semibold text-right transition-all duration-2500 delay-700 transform ease-in-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}>یومِ آزادی مبارک</h2>

                
            </div>
            <div className={`text-right transition-all duration-2500 delay-700 transform ease-in-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}>
                <p className='text-[#fff] leadin-10'>آزادی ایک انمول نعمت ہے، اسے کبھی معمولی نہ سمجھیں۔
                </p>
                <p className='text-[#fff] leading-10'>
                    ہمارے بزرگوں کی قربانیوں
                    کا احترام کریں اور پاکستان کی</p>
                <p className='text-[#fff] leading-8'> خدمت میں اپنا کردار ادا کریں
                </p>
                <h3 className='text-center text-[#fff] text-[23px] leading-10'>        سمن اسرار
                </h3>
            </div>
        </div>
    )
}

export default IndependenceCard