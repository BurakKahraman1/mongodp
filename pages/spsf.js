import Head from 'next/head'
import Header from "../components/header";
import Footer from "../components/footer";
import styles from '../styles/spsf.module.scss';
import React from 'react';
import {useDropzone} from 'react-dropzone';
export default function Spsf({mData}) {
    const {getRootProps, getInputProps} = useDropzone({
        maxFiles:1,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/jpg': []
        }
    });

  return (
    <section className="relative">
        <Head>
            <title>Service provider submission form | {mData.companyName}</title>
        </Head>
        <Header/>
        <section className="pageHeader min-h-[250px] flex flex-row justify-center items-end bg-hmfooterBg mb-5">
            <h3 className="text-center my-10 py-5 font-semibold text-4xl text-hmGreen ">Service provider submission form</h3>
        </section>
        <div className={styles.Spsf+" container mx-auto px-2.5"}>
            <div className="w-full xl:w-2/4 bg-hmfooterBg mx-auto rounded-2xl mb-10 py-10 px-5">
                <form method="post" className="flex flex-col" encType="multipart/form-data">
                    <div className="flex flex-row mb-5 justify-between" role="group">
                        <div className={styles.rightcheck+" flex flex-row items-center"}>
                            <input type="radio" className="btncheck" name="accounttype" id="hospital" autoComplete="off" />
                            <label htmlFor="hospital">
                                <span className="ml-3 cursor-pointer">Hospital</span>
                            </label>
                        </div>
                        <div className={styles.rightcheck+" flex flex-row items-center"}>
                            <input type="radio" className="btn-check" name="accounttype" id="doctor" autoComplete="off" />
                            <label htmlFor="doctor">
                                <span className="ml-3 cursor-pointer">Doctor</span>
                            </label>
                        </div>
                        <div className={styles.rightcheck+" flex flex-row items-center"}>
                            <input type="radio" className="btn-check" name="accounttype" id="medical-center" autoComplete="off" />
                            <label htmlFor="medical-center">
                                <span className="ml-3 cursor-pointer">Medical Center</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Name</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Founded/ started at</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Specialities</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Offered treatments</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Working time</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Address</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full mr-5">
                            <label className="text-hmsectionTitle mb-2">Primary Phone</label>
                            <input type="text" name="" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Primary E-mail</label>
                            <input type="text" name="" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full mr-5">
                            <label className="text-hmsectionTitle mb-2">Whatsapp #</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Telegram #</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full mr-5">
                            <label className="text-hmsectionTitle mb-2">Facebook #</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Twitter #</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Lead video (YouTube)</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Website</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Supported languages</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full mr-5">
                            <label className="text-hmsectionTitle mb-2">Cover photo</label>
                            <div className="flex flex-col p-4 text-center text-md border border-dashed border-gray-300 justify-center items-center bg-white text-hmsectionTitle text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in rounded" {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p className="">Drag `n drop some files here, or click to select files</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Profile photo</label>
                            <div className="flex flex-col p-4 text-center text-md border border-dashed border-gray-300 justify-center items-center bg-white text-hmsectionTitle text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in rounded" {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p className="">Drag `n drop some files here, or click to select files</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Supported languages</label>
                            <textarea className="flex flex-col py-2 px-3 min-h-[90px] border-gray-300  bg-white text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in rounded" placeholder=""></textarea>
                        </div>
                    </div>
                    <div className="flex flex-row items-center mb-5">
                        <span className="mr-4 w-1/6 text-hmsectionTitle font-medium">Contact Person</span>
                        <span className="border-b border-hmDark/10 w-5/6"></span>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full mr-5">
                            <label className="text-hmsectionTitle mb-2">Name</label>
                            <input type="text" name="" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Surname</label>
                            <input type="text" name="" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="flex flex-col w-full mr-5">
                            <label className="text-hmsectionTitle mb-2">Phone</label>
                            <input type="text" name="" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">E-mail</label>
                            <input type="text" name="" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="px-10 py-2 rounded bg-hmGreen text-white font-medium hover:shadow-hmGreen transition ease-in" type="button">Send</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </section>
  )
}
