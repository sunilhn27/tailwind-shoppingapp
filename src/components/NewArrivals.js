import Image from 'next/image'
import React from 'react'
import Img1 from '@/asserts/images/Rectangle 20.png'
import Img2 from '@/asserts/images/Rectangle 21.png'
import Img3 from '@/asserts/images/Rectangle 22.png'

function NewArrivals() {


    const Arrivals = ({ image, title, para }) => {
        return (
            <div className='w-[400px] h-[700px] rounded-md'>
                <div className='flex flex-col'>
                    <Image src={image}></Image>
                    <div className='space-y-2 mt-5'>
                        <h1 className='font-bold text-3xl'>{title}</h1>
                        <p className='text-gray-500'>{para}</p>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className='w-full h-[6000px] mt-3'>


            <div>
                <h1 className='text-5xl font-extrabold p-16'>
                    NEW ARRIVALS
                </h1>

                <div className='flex justify-evenly'>
                    <Arrivals image={Img1} title={"Hoodies & Sweetshirt"}
                        para={"Explore Now!"} />
                    <Arrivals image={Img2} title={"Coats & Parkas"}
                        para={"Explore Now!"} />
                    <Arrivals image={Img3} title={"Tees & T-Shirt"}
                        para={"Explore Now!"} />

                </div>

            </div>

        </div>
    )
}

export default NewArrivals