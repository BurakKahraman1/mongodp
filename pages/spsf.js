import React, {useState} from 'react';
import {useRouter} from "next/router";

import Head from 'next/head'
import Header from "../components/header";
import Footer from "../components/footer";
import {useDropzone} from 'react-dropzone';
import updateAction from "../_helpers/updateAction";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

import styles from '../styles/spsf.module.scss';
export default function Spsf({mData}) {
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
    const onSubmit = (data) => {
        actions.updateAction(data);
        if(formStep == 0){
            router.push(`?step=1`);
        }else if(formStep == 1){
            router.push(`?step=2`);
        }else if(formStep == 2){
            router.push(`?step=3`);
        }
    };

    const goToStep = (step) => {
        router.push(`?step=${step}`);
    };
    const agencyStep = [
        { id: 0, name: 'Select a Provider Type' },
        { id: 1, name: 'Person Detail' },
        { id: 2, name: 'Agency Details' },
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
  return (
    <section className="relative">
        <Head>
            <title>Service provider submission form | {mData.companyName}</title>
        </Head>
        <Header/>
        <section className="pageHeader min-h-[250px] flex flex-row justify-center items-end bg-hmfooterBg mb-5">
            <h3 className="text-center my-10 py-0 md:py-5 font-semibold text-4xl text-hmGreen ">Service provider submission form</h3>
        </section>
        <div className={styles.Spsf+" container mx-auto px-2.5"}>
            {formStep >= 1 &&
                <div className="flex flex-row justify-center mb-4">
                    {state.accounttype == "agency" &&
                        <ul className="steps">
                            {Object.values(agencyStep).map((step) => (
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
                <div className="w-full xl:w-2/4 mx-auto rounded-2xl mb-10 py-5 px-5 bg-hmfooterBg">
                <div className="flex flex-row items-center mb-5">
                    <span className="border-b border-hmDark/10 w-5/6"></span>
                    <span className="w-full text-center text-hmDark text-xl font-bold">Select a Provider Type</span>
                    <span className="border-b border-hmDark/10 w-5/6"></span>
                </div>
                <p className="text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat ultricies augue, ut suscipit magna accumsan quis. Vestibulum vehicula urna justo, at sodales nisi vestibulum sit amet. Duis mi lorem, tempor et tortor in, vestibulum tempus libero. Integer efficitur elit eu gravida placerat. Suspendisse eu felis id augue posuere ullamcorper. In vel massa tellus. Sed rhoncus urna et sagittis facilisis. Curabitur sollicitudin lacinia purus, a venenatis diam lacinia eu. Duis lobortis sagittis fringilla. Quisque fermentum vitae orci at accumsan. Maecenas gravida ex at orci sodales, ut bibendum mauris vestibulum.</p>
                <div className="hidden">
                    <div className="flex flex-col md:flex-row mb-5 justify-between" role="group">
                        <div className={styles.rightcheck+" flex flex-row items-center mb-3 md:mb-0"}>
                            <input type="radio" className="btncheck" name="accounttype" id="hospital" autoComplete="off" />
                            <label htmlFor="hospital">
                                <span className="ml-3 cursor-pointer">Hospital</span>
                            </label>
                        </div>
                        <div className={styles.rightcheck+" flex flex-row items-center mb-3 md:mb-0"}>
                            <input type="radio" className="btn-check" name="accounttype" id="doctor" autoComplete="off" />
                            <label htmlFor="doctor">
                                <span className="ml-3 cursor-pointer">Doctor</span>
                            </label>
                        </div>
                        <div className={styles.rightcheck+" flex flex-row items-center mb-3 md:mb-0"}>
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
                </div>
            </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" encType="multipart/form-data">
                {formStep == 0 && (
                    <>
                        <div className="w-full xl:w-2/4 mx-auto rounded-2xl mb-10 py-10">
                            <div className="flex flex-col md:flex-row mb-5 justify-between" role="group">
                                <div className={styles.accounttype+" w-full h-[150px] flex flex-row mr-3 mb-3 md:mb-0"}>
                                    <input {...register("accounttype")} defaultValue={state.accounttype} type="radio" className="btncheck" name="accounttype" value="agency" id="agency-01" autoComplete="off" />
                                    <label htmlFor="agency-01" className="w-full h-[150px] border rounded flex justify-center items-center transition ease-in">
                                        <span className="text-2xl font-medium uppercase cursor-pointer">Agency</span>
                                    </label>
                                </div>
                                <div className={styles.accounttype+" w-full h-[150px] flex flex-row mr-3 mb-3 md:mb-0"}>
                                    <input {...register("accounttype")}  defaultValue={state.accounttype} type="radio" className="btncheck" name="accounttype" value="hospital" id="hospital-01" autoComplete="off" />
                                    <label htmlFor="hospital-01" className="w-full h-[150px] border rounded flex justify-center items-center transition ease-in">
                                        <span className="text-2xl font-medium uppercase cursor-pointer">Hospital</span>
                                    </label>
                                </div>
                                <div className={styles.accounttype+" w-full h-[150px] flex flex-row mr-3 mb-3 md:mb-0"}>
                                    <input {...register("accounttype")}  defaultValue={state.accounttype} type="radio" className="btn-check" name="accounttype" value="clinic" id="clinic-01" autoComplete="off" />
                                    <label htmlFor="clinic-01" className="w-full h-[150px] border rounded flex justify-center items-center transition ease-in">
                                        <span className="text-2xl font-medium uppercase cursor-pointer">Clinic</span>
                                    </label>
                                </div>
                                <div className={styles.accounttype+" w-full h-[150px] flex flex-row mr-3 mb-3 md:mb-0"}>
                                    <input {...register("accounttype")}  defaultValue={state.accounttype} type="radio" className="btn-check" name="accounttype" value="doctor" id="doctor-01" autoComplete="off" />
                                    <label htmlFor="doctor-01" className="w-full h-[150px] border rounded flex justify-center items-center transition ease-in">
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
                                <input {...register("personname")} defaultValue={state.personname} type="text" placeholder="Name" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-hmsectionTitle mb-2">Surname</label>
                                <input {...register("personsurname")} defaultValue={state.personsurname} type="text" placeholder="Surname" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mb-5">
                            <div className="flex flex-col w-full mb-5 md:mb-0 lg:mr-5">
                                <label className="text-hmsectionTitle mb-2">Phone</label>
                                <input {...register("personphone")} defaultValue={state.personphone} type="text" placeholder="Phone" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-hmsectionTitle mb-2">E-mail</label>
                                <input {...register("personemail")} defaultValue={state.personemail} type="text" placeholder="E-mail" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
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
                        {
                            state.accounttype == "agency" &&
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center mb-5">
                                    <span className="border-b border-hmDark/10 w-5/6"></span>
                                    <span className="w-full text-center text-hmDark text-xl font-bold">Agency Detail</span>
                                    <span className="border-b border-hmDark/10 w-5/6"></span>
                                </div>
                            </div>
                        }
                        {
                            state.accounttype == "hospital" &&
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center mb-5">
                                    <span className="border-b border-hmDark/10 w-5/6"></span>
                                    <span className="w-full text-center text-hmDark text-xl font-bold">Hospital Detail</span>
                                    <span className="border-b border-hmDark/10 w-5/6"></span>
                                </div>
                            </div>
                        }
                        {
                            state.accounttype == "clinic" &&
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center mb-5">
                                    <span className="border-b border-hmDark/10 w-5/6"></span>
                                    <span className="w-full text-center text-hmDark text-xl font-bold">Clinic Detail</span>
                                    <span className="border-b border-hmDark/10 w-5/6"></span>
                                </div>
                            </div>
                        }
                        {
                            state.accounttype == "doctor" &&
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
                            <pre>{JSON.stringify(state, null, 2)}</pre>
                        </div>

                    </>
                )}
            </form>
        </div>
        <div className={styles.Spsf+" hidden container mx-auto px-2.5"}>
            <div className="w-full xl:w-2/4 bg-hmfooterBg mx-auto rounded-2xl mb-10 py-10 px-5">
                <form method="post" className="flex flex-col" encType="multipart/form-data">
                    <div className="flex flex-col md:flex-row mb-5 justify-between" role="group">
                        <div className={styles.rightcheck+" flex flex-row items-center mb-3 md:mb-0"}>
                            <input type="radio" className="btncheck" name="accounttype" id="hospital" autoComplete="off" />
                            <label htmlFor="hospital">
                                <span className="ml-3 cursor-pointer">Hospital</span>
                            </label>
                        </div>
                        <div className={styles.rightcheck+" flex flex-row items-center mb-3 md:mb-0"}>
                            <input type="radio" className="btn-check" name="accounttype" id="doctor" autoComplete="off" />
                            <label htmlFor="doctor">
                                <span className="ml-3 cursor-pointer">Doctor</span>
                            </label>
                        </div>
                        <div className={styles.rightcheck+" flex flex-row items-center mb-3 md:mb-0"}>
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
                    <div className="flex flex-col md:flex-row mb-5">
                        <div className="flex flex-col w-full mb-5 md:mb-0 lg:mr-5">
                            <label className="text-hmsectionTitle mb-2">Primary Phone</label>
                            <input type="text" name="" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Primary E-mail</label>
                            <input type="text" name="" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-5">
                        <div className="flex flex-col w-full mb-5 md:mb-0 lg:mr-5">
                            <label className="text-hmsectionTitle mb-2">Whatsapp #</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Telegram #</label>
                            <input type="text" placeholder="" className="text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in h-[40px] px-4 rounded" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-5">
                        <div className="flex flex-col w-full mb-5 md:mb-0 lg:mr-5">
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
                        <div className="flex flex-col w-full">
                            <label className="text-hmsectionTitle mb-2">Description</label>
                            <textarea className="flex flex-col py-2 px-3 min-h-[90px] border-gray-300  bg-white text-hmDark text-lg focus:outline-0 focus:ring focus:ring-2 focus:ring-hmGreen transition ease-in rounded" placeholder=""></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-5">
                        <div className="flex flex-col w-full mb-5 md:mb-0 lg:mr-5">
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
                    <div className="flex md:justify-end">
                        <button className="w-full md:w-auto px-10 py-2 rounded bg-hmGreen text-white font-medium hover:shadow-hmGreen transition ease-in" type="button">Send</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </section>
  )
}
