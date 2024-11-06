"use client"

import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './styles/css'

import { Autoplay, Pagination, } from 'swiper/modules'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Banner = () => {
  return (
    <>
      <div className='container'>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
          delay: 3000, disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true} modules={[Autoplay, Pagination,]} className='mySwiper'>
          <SwiperSlide>
            <div className='container md: pt-20 md: pb-10'>
              <div className='grid grid-cols-2'>
                <div className='relative'>
                  <h1 className='text-7xl font-bold py-4'>Document Signature
                  </h1>
                  <div className='absolute top-56 mt-1 right-32'>
                  {/* <Image src="/docs.jpg" width={80} height={80} alt='/' /> */}
                  </div>
                  <p className='py-4'>The Arweave network is like Bitcoin, but for data: A permanent and decentralized web inside an open ledger</p>
                  <div className='flex gap-4 py-6'> 
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-bold tracking-wide">Arweave</Button>
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-bold tracking-wide" variant="outline">ArConnect</Button>
                  </div>
                  {/*  */}
                </div>
                <div className='relative shadow-2xl'>
                  <Image src="/coffe.jpg" alt='/' width={600} height={600} />
                  <div className='absolute top-20 mt-1 right-0'>
                    {/* <Image src="/back.jpg" alt='/' width={120} height={120} /> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  )
}

export default Banner