import React, {Fragment, useState} from 'react';
import {Menu, Transition} from '@headlessui/react'
import {useRouter} from "next/router";
import Head from 'next/head'
import Header from "../components/header";
import PartnerFooter from "../components/partnerFooter";
import {useDropzone} from 'react-dropzone';
import updateAction from "../_helpers/updateAction";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import styles from '../styles/spsf.module.scss';
import Alert from "../components/sweetAlert2/Alert";
import Link from "next/link";

export default function Spsf({mData}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const {getRootProps, getInputProps} = useDropzone({
        maxFiles:1,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/jpg': []
        }
    });

    const { register, handleSubmit } = useForm();
    const { actions, state } = useStateMachine({ updateAction });

    const router = useRouter();
    const formStep = router.query.step ?? 0;
    const handlePost = async (formData) => {
        let response = await fetch('/api/hospital', {
            method: 'POST',
            body: JSON.stringify(formData),
        });
        let data = await response.json();
        if (data.success) {
            return setMessage(data.message);
        } else {
            return setError(data.message);
        }
    };
    const onSubmit = (data) => {
        actions.updateAction(data);
        if(formStep == 0){
            router.push(`?step=1`);
        }else if(formStep == 1){
            router.push(`?step=2`);
        }else if(formStep == 2){
            router.push(`?step=3`);
        }else if(formStep == 3){
            handlePost(state)
        }
    };

    const goToStep = (step) => {
        router.push(`?step=${step}`);
    };
    const advertisingagencyStep = [
        { id: 0, name: 'Select a Provider Type' },
        { id: 1, name: 'Person Detail' },
        { id: 2, name: 'Advertising Agency Details' },
        { id: 3, name: 'Result' }
    ]
    const tourismagencyStep = [
        { id: 0, name: 'Select a Provider Type' },
        { id: 1, name: 'Person Detail' },
        { id: 2, name: 'Tourism Agency Details' },
        { id: 3, name: 'Result' }
    ]
    const hospitalStep = [
        { id: 0, name: 'Select a Provider Type' },
        { id: 1, name: 'Person Detail' },
        { id: 2, name: 'Hospital Details' },
        { id: 3, name: 'Result' }
    ]
    const clinicStep = [
        { id: 0, name: 'Select a Provider Type' },
        { id: 1, name: 'Person Detail' },
        { id: 2, name: 'Clinic Details' },
        { id: 3, name: 'Result' }
    ]
    const doctorStep = [
        { id: 0, name: 'Select a Provider Type' },
        { id: 1, name: 'Person Detail' },
        { id: 2, name: 'Doctor Details' },
        { id: 3, name: 'Result' }
    ]
    const services = [
        { id: 0, name: 'Service 01' },
        { id: 1, name: 'Service 02' },
        { id: 2, name: 'Service 03' },
        { id: 3, name: 'Service 04' },
        { id: 4, name: 'Service 05' },
        { id: 5, name: 'Service 06' },
        { id: 6, name: 'Service 07' },
        { id: 7, name: 'Service 08' },
        { id: 8, name: 'Service 09' },
        { id: 9, name: 'Service 10' },
        { id: 10, name: 'Service 11' },
    ]
    const [phoneState, setPhoneState] = useState()
    const [startDate, setStartDate] = useState(new Date());
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <section className="relative min-h-screen">
            <Head>
                <title>Service provider submission form | {mData.companyName}</title>
            </Head>
            <Header/>
            <section className="pageHeader min-h-[250px] flex flex-row justify-center items-end bg-hmfooterBg mb-5">
                <h3 className="text-center my-10 py-0 md:py-5 font-semibold text-4xl text-hmGreen ">Service provider submission form</h3>
            </section>
            <div className={styles.Spsf+" container mx-auto px-2.5 mb-40"}>
                {formStep >= 1 &&
                    <div className="flex flex-row justify-center mb-4">
                        {state.accounttype == "advertising-agency" &&
                            <ul className="steps">
                                {Object.values(advertisingagencyStep).map((step) => (
                                    <li className={step.id <= formStep ? 'step step-success' : 'step'} key={step.id}>{step.name}</li>
                                ))}
                            </ul>
                        }
                        {state.accounttype == "tourism-agency" &&
                            <ul className="steps">
                                {Object.values(tourismagencyStep).map((step) => (
                                    <li className={step.id <= formStep ? 'step step-success' : 'step'} key={step.id}>{step.name}</li>
                                ))}
                            </ul>
                        }
                        {state.accounttype == "hospital" &&
                            <ul className="steps">
                                {Object.values(hospitalStep).map((step) => (
                                    <li className={step.id <= formStep ? 'step step-success' : 'step'} key={step.id}>{step.name}</li>
                                ))}
                            </ul>
                        }
                        {state.accounttype == "clinic" &&
                            <ul className="steps">
                                {Object.values(clinicStep).map((step) => (
                                    <li className={step.id <= formStep ? 'step step-success' : 'step'} key={step.id}>{step.name}</li>
                                ))}
                            </ul>
                        }
                        {state.accounttype == "doctor" &&
                            <ul className="steps">
                                {Object.values(doctorStep).map((step) => (
                                    <li className={step.id <= formStep ? 'step step-success' : 'step'} key={step.id}>{step.name}</li>
                                ))}
                            </ul>
                        }
                    </div>
                }
                {formStep == 0 && (
                    <div className="w-full xl:w-2/4 mx-auto rounded-2xl mb-5 py-5 px-5 bg-hmfooterBg">
                        <div className="flex flex-row items-center mb-5">
                            <span className="border-b border-hmDark/10 w-5/6"></span>
                            <span className="w-full text-center text-hmDark text-xl font-bold">Select a Provider Type</span>
                            <span className="border-b border-hmDark/10 w-5/6"></span>
                        </div>
                        <p className="text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat ultricies augue, ut suscipit magna accumsan quis. Vestibulum vehicula urna justo, at sodales nisi vestibulum sit amet. Duis mi lorem, tempor et tortor in, vestibulum tempus libero. Integer efficitur elit eu gravida placerat. Suspendisse eu felis id augue posuere ullamcorper. In vel massa tellus. Sed rhoncus urna et sagittis facilisis. Curabitur sollicitudin lacinia purus, a venenatis diam lacinia eu. Duis lobortis sagittis fringilla. Quisque fermentum vitae orci at accumsan. Maecenas gravida ex at orci sodales, ut bibendum mauris vestibulum.</p>
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" encType="multipart/form-data">
                    {formStep == 0 && (
                        <>
                            <div className="w-full xl:w-2/4 mx-auto rounded-2xl mb-5 py-10">
                                <div className="flex flex-col md:flex-row mb-5 justify-between" role="group">
                                    <Menu as="div" className="w-full h-[150px] relative mr-3 mb-3 md:mb-0">
                                        <Menu.Button className="w-full h-[150px] border rounded flex flex-col justify-center items-center transition ease-in">
                                            <div className="relative focus:outline-0">
                                                <div className='mb-3'>
                                                    <Image src="/agency.jpg" width="64px" height="64px"/>
                                                </div>
                                                <span className="text-2xl font-medium uppercase cursor-pointer">Agency</span>
                                            </div>
                                        </Menu.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    <div className={styles.rightcheck+" px-2 py-2 hover:bg-gray-100"}>
                                                        <input {...register("accounttype")} defaultValue={state.accounttype} type="radio" className="btncheck hidden" name="accounttype" value="advertising-agency" id="agency-02" autoComplete="off" />
                                                        <label htmlFor="agency-02"><a className="ml-3">Advertising Agency</a></label>
                                                    </div>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <div className={styles.rightcheck+" px-2 py-2 hover:bg-gray-100"}>
                                                        <input {...register("accounttype")} defaultValue={state.accounttype} type="radio" className="btncheck" name="accounttype" value="tourism-agency" id="agency-03" autoComplete="off" />
                                                        <label htmlFor="agency-03">  <a className="ml-2">Tourism & Travel Agency</a> </label>
                                                    </div>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    <div className={styles.accounttype+" w-full h-[150px] flex flex-row mr-3 mb-3 md:mb-0"}>
                                        <input {...register("accounttype")}  defaultValue={state.accounttype} type="radio" className="btncheck" name="accounttype" value="hospital" id="hospital-01" autoComplete="off" />
                                        <label htmlFor="hospital-01" className="w-full h-[150px] border rounded flex flex-col justify-center items-center transition ease-in">
                                            <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16.933 16.933">
                                                <g transform="translate(0 -280.067)">
                                                    <path fill="none" stroke="#00003a" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".529" d="M5.855718 280.59582c-1.1447391 0-2.0649578.91071-2.0649578 2.04356v13.83144h9.3518218v-13.83144c0-1.13285-.92022-2.04356-2.064977-2.04356zM2.8399138 285.41743H2.5941292c-1.1447431 0-2.06496273.91067-2.06496273 2.04352v9.00987H3.7907602"/>
                                                    <path fill="none" stroke="#00003a" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".529" d="M14.136491 285.41743h.202722c1.144743 0 2.064963.91067 2.064963 2.04352v9.00987h-3.261594M2.0212258 289.19905H3.79076M2.0212258 291.23698H3.79076M5.5857346 286.89629H7.3552688M5.5857346 288.53332H7.3552688M9.5780732 286.89629H11.347608M9.5780732 288.53332H11.347608M13.142582 289.19905h1.769534M13.142582 291.23698h1.769534M7.7964278 292.25609c-.5170363 0-.9332764.41624-.9332764.93327v3.28146h3.2070396v-3.28146c0-.51703-.4162403-.93327-.9332766-.93327zM5.5857346 290.4042H7.3552688M9.5780732 290.4042H11.347608"/>
                                                    <path fill="none" stroke="#00003a" strokeWidth=".529" d="m 8.2938067,281.99055 c -0.32104,0 -0.57929,0.25825 -0.57929,0.57929 v 0.47698 h -0.47697 c -0.32105,0 -0.5793,0.25824 -0.5793,0.57929 v 0.34571 c 0,0.32105 0.25825,0.5793 0.5793,0.5793 h 0.47697 v 0.47697 c 0,0.32105 0.25825,0.57929 0.57929,0.57929 h 0.34572 c 0.32104,0 0.57929,-0.25824 0.57929,-0.57929 v -0.47697 h 0.47697 c 0.3210503,0 0.5793003,-0.25825 0.5793003,-0.5793 v -0.34571 c 0,-0.32105 -0.25825,-0.57929 -0.5793003,-0.57929 h -0.47697 v -0.47698 c 0,-0.32104 -0.25825,-0.57929 -0.57929,-0.57929 z"/>
                                                </g>
                                            </svg>

                                            <span className="text-2xl font-medium uppercase cursor-pointer">Hospital</span>
                                        </label>
                                    </div>
                                    <div className={styles.accounttype+" w-full h-[150px] flex flex-row mr-3 mb-3 md:mb-0"}>
                                        <input {...register("accounttype")}  defaultValue={state.accounttype} type="radio" className="btn-check" name="accounttype" value="clinic" id="clinic-01" autoComplete="off" />
                                        <label htmlFor="clinic-01" className="w-full h-[150px] border rounded flex flex-col justify-center items-center transition ease-in">
                                            <div className='mb-3'>
                                                <Image src="/clinic.jpg" width="64px" height="64px"/>
                                            </div>
                                            <span className="text-2xl font-medium uppercase cursor-pointer">Clinic</span>
                                        </label>
                                    </div>
                                    <div className={styles.accounttype+" w-full h-[150px] flex flex-row mr-3 mb-3 md:mb-0"}>
                                        <input {...register("accounttype")}  defaultValue={state.accounttype} type="radio" className="btn-check" name="accounttype" value="doctor" id="doctor-01" autoComplete="off" />
                                        <label htmlFor="doctor-01" className="w-full h-[150px] border rounded flex flex-col justify-center items-center transition ease-in">
                                            <div className='mb-3'>
                                                <Image src="/doctor-icon.svg" width="64px" height="64px"/>
                                            </div>
                                            <span className="text-2xl font-medium uppercase cursor-pointer">Doctor</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-2/4 mx-auto mb-10">
                                <div className="flex md:justify-end">
                                    <button className="w-full md:w-auto px-10 py-2 rounded bg-hmGreen text-white font-medium hover:shadow-hmGreen transition ease-in" type="submit">Next</button>
                                </div>
                            </div>
                        </>
                    )}
                    {formStep == 1 && (
                        <div className="w-full xl:w-2/4 mx-auto rounded-2xl mb-10 py-5 px-5 bg-hmfooterBg">
                            <div className="flex flex-row items-center mb-5">
                                <span className="border-b border-hmDark/10 w-5/6"></span>
                                <span className="w-full text-center text-hmDark text-xl font-bold">Person Detail</span>
                                <span className="border-b border-hmDark/10 w-5/6"></span>
                            </div>
                            <div className="flex flex-col md:flex-row mb-5">
                                <div className="flex flex-col w-full mb-5 md:mb-0 lg:mr-5">
                                    <label className="text-hmsectionTitle mb-2">Name</label>
                                    <input required {...register("personname")} defaultValue={state.personname} type="text" placeholder="Name" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-hmsectionTitle mb-2">Surname</label>
                                    <input required {...register("personsurname")} defaultValue={state.personsurname} type="text" placeholder="Surname" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row mb-5">
                                <div className="flex flex-col w-full mb-5 md:mb-0 lg:mr-5">
                                    <label className="text-hmsectionTitle mb-2">Mobile Phone</label>
                                    <PhoneInput
                                        containerClass={"react-tel-input2"}
                                        inputStyle={{
                                            width: "100%",
                                            height: "40px",
                                            border:0,
                                        }}
                                        buttonStyle={{
                                            border:0,
                                            backgroundColor:'transparent'
                                        }}
                                        searchStyle={{
                                            height: "40px",
                                            border:0
                                        }}
                                        inputClass={"text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded"}
                                        enableSearch={"true"}
                                        country={"tr"}
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-hmsectionTitle mb-2">E-mail</label>
                                    <input required  {...register("personemail")} defaultValue={state.personemail} type="email" placeholder="E-mail" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button onClick={() => goToStep(formStep-1)} className="w-full md:w-auto px-10 py-2 rounded bg-hmDark text-white font-medium hover:shadow-hmDark transition ease-in" type="button" >Previous</button>
                                <button className="w-full md:w-auto px-10 py-2 rounded bg-hmGreen text-white font-medium hover:shadow-hmGreen transition ease-in" type="submit">Next</button>
                            </div>
                        </div>
                    )}
                    {formStep == 2 && (
                        <div className="w-full xl:w-2/4 mx-auto rounded-2xl mb-10 py-5 px-5 bg-hmfooterBg">
                            {state.accounttype == "advertising-agency" &&
                                <div className="flex flex-col mb-5">
                                    <div className="flex flex-row items-center mb-5">
                                        <span className="border-b border-hmDark/10 w-5/6"></span>
                                        <span className="w-full text-center text-hmDark text-xl font-bold">Advertising Agency Detail</span>
                                        <span className="border-b border-hmDark/10 w-5/6"></span>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col w-full mb-5">
                                            <label className="text-hmsectionTitle mb-2">Agency Name</label>
                                            <input required type="text" {...register("agencyname")} defaultValue={state.agencyname} className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                                        </div>
                                        <div className="flex flex-col w-full mb-5">
                                            <label className="text-hmsectionTitle mb-2">Agency Adress</label>
                                            <input required type="text" {...register("agencyadress")} defaultValue={state.agencyadress} className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                                        </div>
                                        <div className="flex flex-col md:flex-row mb-5">
                                            <div className="flex flex-col w-full mb-5 md:mb-0 lg:mr-5">
                                                <label className="text-hmsectionTitle mb-2">Agency Web Site</label>
                                                <input required
                                                       type="url"
                                                       {...register("agencywebsite")} defaultValue={state.agencywebsite}
                                                       className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded"
                                                       placeholder="https://"
                                                       pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
                                                />
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <label className="text-hmsectionTitle mb-2">Year of foundation</label>
                                                <DatePicker
                                                    {...register("agencyfoundation")} defaultValue={state.agencyfoundation}
                                                    className="w-full text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded"
                                                    selected={startDate}
                                                    name="agencyfoundation"
                                                    onChange={(date) => setStartDate(date)}
                                                    showYearPicker
                                                    dateFormat="yyyy"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col w-full mb-5">
                                            <div className="flex flex-row items-center">
                                                <label className="text-hmsectionTitle mb-2 mr-5">Services</label>
                                                <span className="border-b border-hmDark/10 w-full"></span>
                                            </div>
                                            <div className="flex flex-row flex-wrap">
                                                {Object.values(services).map((service) => (
                                                    <div className={styles.rightcheck+" px-2 py-2 hover:bg-gray-100"} key={service.id}>
                                                        <input {...register("services[]")} type="radio" value={service.id} id={"service-0"+service.id} />
                                                        <label htmlFor={"service-0"+service.id}>  <a className="ml-2">{service.name}</a> </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {state.accounttype == "tourism-agency" &&
                                <div className="flex flex-col mb-5">
                                    <div className="flex flex-row items-center mb-5">
                                        <span className="border-b border-hmDark/10 w-5/6"></span>
                                        <span className="w-full text-center text-hmDark text-xl font-bold">Tourism Agency Detail</span>
                                        <span className="border-b border-hmDark/10 w-5/6"></span>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col w-full mb-5">
                                            <label className="text-hmsectionTitle mb-2">Agency Name</label>
                                            <input required type="text" {...register("agencyname")} defaultValue={state.agencyname} className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                                        </div>
                                        <div className="flex flex-col w-full mb-5">
                                            <label className="text-hmsectionTitle mb-2">Agency Adress</label>
                                            <input required type="text" {...register("agencyadress")} defaultValue={state.agencyadress} className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                                        </div>
                                        <div className="flex flex-col md:flex-row mb-5">
                                            <div className="flex flex-col w-full mb-5 md:mb-0 lg:mr-5">
                                                <label className="text-hmsectionTitle mb-2">Agency Web Site</label>
                                                <input required type="url" {...register("agencywebsite")} defaultValue={state.agencywebsite} className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <label className="text-hmsectionTitle mb-2">Year of foundation</label>
                                                <DatePicker
                                                    {...register("agencyfoundation")} defaultValue={state.agencyfoundation}
                                                    className="w-full text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded"
                                                    selected={startDate}
                                                    name="agencyfoundation"
                                                    onChange={(date) => setStartDate(date)}
                                                    showYearPicker
                                                    dateFormat="yyyy"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col w-full mb-5">
                                            <label className="text-hmsectionTitle mb-2">Services</label>
                                            <textarea required {...register("agencyservices")} defaultValue={state.agencyservices} className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[100px] p-4 rounded" />
                                        </div>
                                    </div>
                                </div>
                            }
                            {state.accounttype == "hospital" &&
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center mb-5">
                                        <span className="border-b border-hmDark/10 w-5/6"></span>
                                        <span className="w-full text-center text-hmDark text-xl font-bold">Hospital Detail</span>
                                        <span className="border-b border-hmDark/10 w-5/6"></span>
                                    </div>
                                </div>
                            }
                            {state.accounttype == "clinic" &&
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center mb-5">
                                        <span className="border-b border-hmDark/10 w-5/6"></span>
                                        <span className="w-full text-center text-hmDark text-xl font-bold">Clinic Detail</span>
                                        <span className="border-b border-hmDark/10 w-5/6"></span>
                                    </div>
                                </div>

                            }
                            {state.accounttype == "doctor" &&
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center mb-5">
                                        <span className="border-b border-hmDark/10 w-5/6"></span>
                                        <span className="w-full text-center text-hmDark text-xl font-bold">Doctor Detail</span>
                                        <span className="border-b border-hmDark/10 w-5/6"></span>
                                    </div>
                                </div>
                            }
                            <div className="flex justify-between">
                                <button onClick={() => goToStep(formStep-1)} className="w-full md:w-auto px-10 py-2 rounded bg-hmDark text-white font-medium hover:shadow-hmDark transition ease-in" type="button" >Previous</button>
                                <button className="w-full md:w-auto px-10 py-2 rounded bg-hmGreen text-white font-medium hover:shadow-hmGreen transition ease-in" type="submit">Next</button>
                            </div>
                        </div>
                    )}
                    {formStep == "3" && (
                        <>
                            <div className="w-full xl:w-2/4 mx-auto rounded-2xl mb-10 py-5 px-5 bg-hmfooterBg">
                                <div className="flex flex-row items-center mb-5">
                                    <span className="border-b border-hmDark/10 w-5/6"></span>
                                    <span className="w-full text-center text-hmDark text-xl font-bold">Result</span>
                                    <span className="border-b border-hmDark/10 w-5/6"></span>
                                </div>
                                {error ? (
                                    <h3>{error}</h3>
                                ) : null}
                                {message ? (
                                    <div className="flex flex-col justify-center">
                                        <div className={styles.sa}>
                                            <div className="sa-success">
                                                <div className="sa-success-tip"></div>
                                                <div className="sa-success-long"></div>
                                                <div className="sa-success-placeholder"></div>
                                                <div className="sa-success-fix"></div>
                                            </div>
                                        </div>
                                        <h3 className="text-center text-lg text-hmGreen font-bold my-5">{message}</h3>
                                    </div>
                                ) : null}
                                <pre>{JSON.stringify(state, null, 2)}</pre>
                                <div className="flex justify-between">
                                    <button onClick={() => goToStep(formStep-1)} className="w-full md:w-auto px-10 py-2 rounded bg-hmDark text-white font-medium hover:shadow-hmDark transition ease-in" type="button" >Previous</button>
                                    <button className="w-full md:w-auto px-10 py-2 rounded bg-hmGreen text-white font-medium hover:shadow-hmGreen transition ease-in" type="submit">Submit</button>
                                </div>
                            </div>

                        </>
                    )}
                </form>
            </div>
            <PartnerFooter />
        </section>
    )
}
