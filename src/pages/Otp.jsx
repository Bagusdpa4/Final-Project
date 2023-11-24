import React from 'react'
import { useNavigate } from 'react-router-dom';
import BrandLogo from '../assets/img/brain.webp';
import { GoArrowLeft } from "react-icons/go";



export const Otp = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">      
        <div className="w-3/5">
        <div className="flex flex-col  w-[30rem] mx-auto">
          <div className='absolute top-[120px] left-[108px]'>
            <GoArrowLeft size={25} className="items-center" 
            onClick={() => {
                  navigate('/Register');
                }}/>
          </div>
          <span className="items-center pb-10 text-3xl font-bold text-primary">Masukkan OTP</span>

          {/* Masukkan Kode OTP */}
          <div className="flex flex-col gap-2">
            <span className="text-lg text-center pb-5">Ketik 6 digit kode yang dikirim ke bingwa@gmail.com</span>
            
            <div className="flex gap-4 items-center justify-center">
              <div className="w-[42px] h-[42px] border-2 rounded-xl"> 
                <input
                  placeholder=""
                  className="rounded-xl w-full h-full text-center font-semibold"
                  type="text"
                />
              </div>
              <div className="w-[42px] h-[42px] border-2 rounded-xl"> 
                <input
                  placeholder=""
                  className="rounded-xl w-full h-full text-center font-semibold"
                  type="text"
                />
              </div>
              <div className="w-[42px] h-[42px] border-2 rounded-xl"> 
                <input
                  placeholder=""
                  className="rounded-xl w-full h-full text-center font-semibold"
                  type="text"
                />
              </div>
              <div className="w-[42px] h-[42px] border-2 rounded-xl"> 
                <input
                  placeholder=""
                  className="rounded-xl w-full h-full text-center font-semibold"
                  type="text"
                />
              </div>
              <div className="w-[42px] h-[42px] border-2 rounded-xl"> 
                <input
                  placeholder=""
                  className="rounded-xl w-full h-full text-center font-semibold"
                  type="text"
                />
              </div>
              <div className="w-[42px] h-[42px] border-2 rounded-xl"> 
                <input
                  placeholder=""
                  className="rounded-xl w-full h-full text-center font-semibold"
                  type="text"
                />
              </div>
            </div>

            <span className="text-lg text-center pb-5">Kirim ulang OTP dalam 60 detik</span>
          </div>



          {/* Button Simpan */}
          <div className="flex flex-col py-4">
            <button
              type="button"
              className="py-3 mt-2 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-2/5 h-screen bg-primary">
        <div className="flex items-center justify-center gap-6">
          <img src={BrandLogo} alt="Brand Logo" className="w-[15%]" />
          <span className="font-sans text-6xl text-center text-white">Bingwa</span>
        </div>
      </div>
      
    </div>
  )
}

