import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { NavbarKelas } from "../assets/components/NavbarKelas";
import { CardKursus } from "../assets/components/CardKursus";

export const KelasSaya = () => {
  return (
    <div className="bg-secondary h-full flex flex-col justify-between">
      <div className="flex flex-col justify-center pt-28 px-48">
        {/* Search */}
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold px-4 py-6">Kelas Berjalan</div>
          <div className="flex items-center relative">
            <input
              type="text"
              className="py-2 px-4 border-2 border-primary rounded-3xl cursor-pointer"
              placeholder="Cari Kelas..."
            />
            <BiSearchAlt
              size={25}
              className="absolute text-white bg-primary rounded-lg inset-y-2 right-4 p-1 cursor-pointer"
            />
          </div>
        </div>

        {/* Filter */}
        <div className="flex justify-between items-start pl-4 py-4">
          <div className="flex flex-col bg-white rounded-xl w-[30%]">
            {/* Filter */}
            <div className="flex text-xl font-bold px-4 pt-3 pb-4">Filter</div>
            <div className="flex flex-col space-y-3 font-medium">
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Paling Baru
              </div>
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Paling Populer
              </div>
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Promo
              </div>
            </div>

            {/* Kategori */}
            <div className="flex text-xl font-bold px-4 py-3">Kategori</div>
            <div className="flex flex-col space-y-3 font-medium">
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                UI/UX Design
              </div>
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Web Development
              </div>
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Android Development
              </div>
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Data Science
              </div>
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Business Intelligence
              </div>
            </div>

            {/* Level Kesulitan */}
            <div className="flex text-xl font-bold px-4 py-3">
              Level Kesulitan
            </div>
            <div className="flex flex-col space-y-3 font-medium">
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Semua Level
              </div>
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Beginner Level
              </div>
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Intermediate Level
              </div>
              <div className="px-6">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Advanced Level
              </div>
            </div>

            {/* Hapus Filter */}
            <button className="text-red-500 font-medium py-10">
              Hapus Filter
            </button>
          </div>

          {/* Button */}
          <div className="flex flex-wrap justify-between items-center font-semibold w-[65%]">
            <div className="bg-white px-16 py-2 rounded-xl cursor-pointer hover:bg-primary hover:text-white">
              <button>All</button>
            </div>
            <div className="bg-white px-28 py-2 rounded-xl cursor-pointer hover:bg-primary hover:text-white">
              <button>In Progress</button>
            </div>
            <div className="bg-white px-20 py-2 rounded-xl cursor-pointer hover:bg-primary hover:text-white">
              <button>Selesai</button>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-2 gap-10 py-4">
            {/* Card Item */}
            <CardKursus
              category={'UI/UX Design'}
              rating={4.7}
              title={'Belajar Web Design dengan Figma'}
              author={'Angela Doe'}
              level={'Intermediate'}
              modul={10}
              duration={120}
              price={'249.000'}
            />

            {/* Card Item */}
            <CardKursus
              category={'UI/UX Design'}
              rating={4.7}
              title={'Belajar Web Design dengan Figma'}
              author={'Angela Doe'}
              level={'Intermediate'}
              modul={10}
              duration={120}
              price={'249.000'}
            />

             {/* Card Item */}
             <CardKursus
              category={'UI/UX Design'}
              rating={4.7}
              title={'Belajar Web Design dengan Figma'}
              author={'Angela Doe'}
              level={'Intermediate'}
              modul={10}
              duration={120}
              price={'249.000'}
            />
          </div>
          </div>
        </div>
      </div>
      <NavbarKelas style={{ zIndex: 1 }} />
    </div>
  );
};