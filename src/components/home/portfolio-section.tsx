import Image from 'next/image'
import React from 'react'
import { Card } from '../ui/card'
import background2 from '@/assets/overture_render2.png'
import { Tektur, Syncopate, Afacad } from 'next/font/google'

const tektur = Tektur({ weight: ['400', '700'], variable: '--font-tektur', subsets: ['latin'] })
const syncopate = Syncopate({ weight: ['400', '700'], variable: '--font-syncopate', subsets: ['latin'] })
const afacad = Afacad({ weight: ['400', '700'], variable: '--font-afacad', subsets: ['latin'] })

export default function portfolioSection() {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>

        <div className="w-full gap-4 flex flex-col items-center justify-center mb-20 max-w-7xl mx-auto">
          <div className="w-fit h-fit p-2 bg-zinc-200 rounded-full px-4">
            <h2 className={`${tektur.className} 
                tracking-widest relative text-left z-10 text-md sm:text-sm text-black`}>
                Portfolio  
            </h2>
          </div>
          <h1 className={`${syncopate.className} 
                tracking-widest relative text-center w-2xl z-10 text-md sm:text-xl font-bold text-black`}>
                Our Portfolio: projects that speak for themselves
          </h1>
        </div>

        <section className='flex flex-row items-center gap-2 justify-center w-full h-full px-80'>
            <div className='flex flex-col items-start h-full w-full justify-center'>
                <h1 className={`${tektur.className} tracking-wide py-2 relative text-left z-10 text-lg sm:text-lg text-black`}>
                    <span className="text-primary font-bold">FUSE</span> - A well designed ecommerce website.
                </h1>
                <div className='grid grid-cols-2 items-center gap-2 h-full w-full justify-center'>
                    <Card className="w-full h-full z-10 p-0 bg-transparent border-none shadow-none">
                        <Image src={background2} width={1000} height={1000} quality={100} alt="linear demo image" className=" object-cover w-100 h-70 rounded-2xl" />
                    </Card>
                    <Card className='flex flex-col items-center w-full h-full justify-between rounded-3xl border-none bg-zinc-100 p-5 py-6'>
                        <h1 className={`${syncopate.className} text-black text-left w-full font-bold text-xl capitalize`}>FUSE</h1>
                        <h2 className={`${afacad.className} text-black text-sm w-full capitalize`}>
                            Our portfolio showcases a fusion of art and science, where aesthetics meet unparalleled user experience. 
                            Discover how we craft digital solutions that not only look stunning but also drive results.
                        </h2>
                        <div className='w-full h-fit flex items-center gap-2 justify-start flex-row'>
                            <div className='w-8 h-8 rounded-3xl bg-zinc-300'/>
                            <div>
                                <h3 className='text-black text-xs font-medium'>Areohone Matodzi</h3>
                                <h4 className='text-black text-xs font-medium'>CEO, Areohone Matodzi</h4>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className='flex flex-col items-start h-full w-full justify-center'>
                <h1 className={`${tektur.className} tracking-wide py-2 relative text-left z-10 text-lg sm:text-lg text-black`}>
                    <span className="text-primary font-bold">FUSE</span> - A well designed ecommerce website.
                </h1>
                <div className='grid grid-cols-2 items-center gap-2 h-full w-full justify-center'>
                    <Card className="w-full h-full z-10 p-0 bg-transparent border-none shadow-none">
                        <Image src={background2} width={1000} height={1000} quality={100} alt="linear demo image" className=" object-cover w-100 h-70 rounded-2xl" />
                    </Card>
                    <Card className='flex flex-col items-center w-full h-full justify-between rounded-3xl border-none bg-zinc-100 p-5 py-6'>
                        <h1 className={`${syncopate.className} text-black text-left w-full font-bold text-xl capitalize`}>FUSE</h1>
                        <h2 className={`${afacad.className} text-black text-sm w-full capitalize`}>
                            Our portfolio showcases a fusion of art and science, where aesthetics meet unparalleled user experience. 
                            Discover how we craft digital solutions that not only look stunning but also drive results.
                        </h2>
                        <div className='w-full h-fit flex items-center gap-2 justify-start flex-row'>
                            <div className='w-8 h-8 rounded-3xl bg-zinc-300'/>
                            <div>
                                <h3 className='text-black text-xs font-medium'>Areohone Matodzi</h3>
                                <h4 className='text-black text-xs font-medium'>CEO, Areohone Matodzi</h4>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
        <section className='flex flex-row items-center gap-1 justify-center w-full h-full px-80'>
            <div className='flex flex-col items-start h-full w-full justify-center'>
                <h1 className={`${tektur.className} tracking-wide py-2 relative text-left z-10 text-lg sm:text-lg text-black`}>
                    <span className="text-primary font-bold">FUSE</span> - A well designed ecommerce website.
                </h1>
                <div className='grid grid-cols-2 items-center gap-2 h-full w-full justify-center'>
                    <Card className="w-full h-full z-10 p-0 bg-transparent border-none shadow-none">
                        <Image src={background2} width={1000} height={1000} quality={100} alt="linear demo image" className=" object-cover w-100 h-70 rounded-2xl" />
                    </Card>
                    <Card className='flex flex-col items-center w-full h-full justify-between rounded-3xl border-none bg-zinc-100 p-5 py-6'>
                        <h1 className={`${syncopate.className} text-black text-left w-full font-bold text-xl capitalize`}>FUSE</h1>
                        <h2 className={`${afacad.className} text-black text-sm w-full capitalize`}>
                            Our portfolio showcases a fusion of art and science, where aesthetics meet unparalleled user experience. 
                            Discover how we craft digital solutions that not only look stunning but also drive results.
                        </h2>
                        <div className='w-full h-fit flex items-center gap-2 justify-start flex-row'>
                            <div className='w-8 h-8 rounded-3xl bg-zinc-300'/>
                            <div>
                                <h3 className='text-black text-xs font-medium'>Areohone Matodzi</h3>
                                <h4 className='text-black text-xs font-medium'>CEO, Areohone Matodzi</h4>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className='flex flex-col items-start h-full w-full justify-center'>
                <h1 className={`${tektur.className} tracking-wide py-2 relative text-left z-10 text-lg sm:text-lg text-black`}>
                    <span className="text-primary font-bold">FUSE</span> - A well designed ecommerce website.
                </h1>
                <div className='grid grid-cols-2 items-center gap-2 h-full w-full justify-center'>
                    <Card className="w-full h-full z-10 p-0 bg-transparent border-none shadow-none">
                        <Image src={background2} width={1000} height={1000} quality={100} alt="linear demo image" className=" object-cover w-100 h-70 rounded-2xl" />
                    </Card>
                    <Card className='flex flex-col items-center w-full h-full justify-between rounded-3xl border-none bg-zinc-100 p-5 py-6'>
                        <h1 className={`${syncopate.className} text-black text-left w-full font-bold text-xl capitalize`}>FUSE</h1>
                        <h2 className={`${afacad.className} text-black text-sm w-full capitalize`}>
                            Our portfolio showcases a fusion of art and science, where aesthetics meet unparalleled user experience. 
                            Discover how we craft digital solutions that not only look stunning but also drive results.
                        </h2>
                        <div className='w-full h-fit flex items-center gap-2 justify-start flex-row'>
                            <div className='w-8 h-8 rounded-3xl bg-zinc-300'/>
                            <div>
                                <h3 className='text-black text-xs font-medium'>Areohone Matodzi</h3>
                                <h4 className='text-black text-xs font-medium'>CEO, Areohone Matodzi</h4>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
        <section className="mb-10">

        </section>

    </div>
  )
}
