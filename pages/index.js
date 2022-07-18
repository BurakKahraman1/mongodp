import Head from 'next/head'
import Header from "../components/header";
import Footer from "../components/footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";

export default function Home({mData}) {
  return (
    <section className="relative">
        <Head>
            <title>{mData.companyName}</title>
        </Head>
        <Header/>
        <section className="Slider relative w-full h-[600px] bg-top bg-cover bg-no-repeat bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/bg-01.jpg?force_format=webp&w=1920&h=600')]">
            <div
                className="container mx-auto z-10 relative h-full flex flex-col justify-end sm:justify-center pb-10 px-10">
                <h1 className="text-hmGreen text-3xl text-center font-bold sm:text-5xl sm:w-1/2 sm:mx-auto leading-normal">Pay
                    up to 90% less on yourhealthcare expenses</h1>
                <h2 className="sm:w-1/2 sm:mx-auto sm:my-5 text-white text-center-400 leading-normal">Healthmonde
                    is on a mission to bring quality health care to everyone, regardless of where they live or how much
                    money they have. We do this by connecting patients with hospitals and clinics around the world that
                    offer high-quality, affordable care.</h2>
            </div>
        </section>
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-5 md:px-0">
                <div className="sectionHeader container md:py-9 md:blur-md md:invert md:drop-shadow-xl md:filter-none">
                    <h5 className="text-center text-5xl mb-5 font-bold text-hmDark text-px-35">Compare Healthcare to get the best deal</h5>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full mx-auto mt-10 whitespace-nowrap divide-y divide-gray-300 overflow-hidden text-sm text-left text-gray-500 md:w-9/12">
                        <thead className="text-xs text-gray-700 uppercase text-center ">
                        <tr>
                            <th scope="col" className="px-6 py-3"></th>
                            <th scope="col" className="px-6 py-3 text-px-15 text-hmDark">
                                Healthmonde
                            </th>
                            <th scope="col" className="px-6 py-3 text-px-15 text-hmDark">
                                Other Companies
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        <tr className="border-b hover:bg-gray-50 transition ease-in">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Fast Medical Visa</th>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </td>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 transition ease-in">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">No surprise invoices</th>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </td>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr className="border-b  hover:bg-gray-50 transition ease-in">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Virtual Care</th>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </td>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr className="border-b  hover:bg-gray-50 transition ease-in">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Detailed Treatment Invoice</th>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </td>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr className="border-b  hover:bg-gray-50 transition ease-in">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Your sensitive health data is in your control</th>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </td>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr className="border-b  hover:bg-gray-50 transition ease-in">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Post-treatment prescription and satisfaction check</th>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </td>
                            <td className="text-center px-6 py-4">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section className="py-10">
            <div className="container mx-auto px-5 md:px-0">
                <div className="sectionHeader container md:py-9 md:blur-md md:invert md:drop-shadow-xl md:filter-none">
                    <h5 className="text-center text-5xl mb-5 font-bold text-hmDark text-px-35">Procedures</h5>
                    <p className="text-center my-10 text-px-20 text-hmDark">With Healthmonde, you can choose from a variety of hospitals and clinics around the world, each offering quality care at a fraction of the cost you would pay at home.</p>
                </div>
            </div>
            <Swiper className="mx-10"
            breakpoints={
                {
                    0: { slidesPerView: 1, spaceBetween: 20 },
                    480: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20},
                    980: { slidesPerView: 3, spaceBetween: 20 },
                    1280: { slidesPerView: 5, spaceBetween: 20 }
                }
            }>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/rhinoplasty.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Rhinoplasty</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/plastic-surgery.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Plastic Surgery</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/pediatric-dental.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Pediatric Dental</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/health-insurance.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Health Insurance</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/rhinoplasty.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Rhinoplasty</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/plastic-surgery.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Plastic Surgery</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/pediatric-dental.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Pediatric Dental</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/health-insurance.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Health Insurance</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/rhinoplasty.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Rhinoplasty</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/plastic-surgery.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Plastic Surgery</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/pediatric-dental.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Pediatric Dental</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height:'350px'}} className="procedures rounded relative bg-cover bg-[url('https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/health-insurance.jpg?force_format=webp&w=350&h=350')]">
                    <div className="flex flex-col px-5 z-10 absolute bottom-10">
                        <a href="#" className="text-sm text-white">HEALTHCARE</a>
                        <a href="#" className="text-3xl text-white">Health Insurance</a>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    </section>
        <section className="py-10">
            <div className="flex flex-col mx-10 mb-20 rounded-md bg-gray-100 lg:w-3/5 lg:mx-auto lg:flex-row">
                <div className="w-full flex flex-col p-5 mb-10 lg:w-1/2 lg:p-10">
                    <p className="text-2xl text-center py-10 font-bold text-hmDark lg:text-px-35 lg:text-left">Request an Treatment.</p>
                    <p className="text-center text-px-20 text-hmsectionTitle lg:w-3/4 lg:text-left">Healthmonde is committed to offering equality in healthcare, so you can rest assured that you`ll be receiving the same high-quality treatment as anyone else.</p>
                    <label className="w-full mt-10 py-2.5 cursor-pointer font-Poppins rounded-full lg:w-3/6 text-white text-center bg-hmGreen hover:shadow-lg transition ease-in transition ease-in" htmlFor="contactModal">Request a Quote</label>
                </div>
                <div className="w-full lg:w-1/2 h-auto rounded-tr-md rounded-br-md">
                    <Image src="https://awnhwjglcr.cloudimg.io/cansariyar.com/works/demo-wp/wp-content/uploads/2022/06/img-04.jpg?force_format=webp&w=571&h=478" width="571" height="478" alt="Request an Treatment." className="w-full rounded-tr-md rounded-br-md" />
                </div>
            </div>
        </section>
        <Footer />
    </section>
  )
}
