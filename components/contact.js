export default function ContactModal() {
    return (
        <div>
            <input type="checkbox" id="contactModal" className="modal-toggle" />
            <div className="modal">
                <div className="flex flex-col relative bg-white md:rounded-lg shadow max-w-7xl">
                    <div className="flex flex-col sm:flex-row md:pb-10 px-5 md:px-10">
                        <label htmlFor="contactModal" className="btn btn-sm btn-circle border-0 absolute right-2 top-2">✕</label>
                        <div className="w-full sm:w-1/2 lg:grid justify-center py-5 md:py-20">
                            <h5 className="text-hmGreen text-7xl mb-10 text-center">Say Hi,</h5>
                            <p className="text-hmDark text-center text-px-20  mb-5">We’re here to answer
                                any question you may have.</p>
                            <div className="flex flex-col lg:flex-row">
                                <div className="px-5 mb-5 lg:mb-0">
                                    <span className="font-bold text-hmsectionTitle text-px-15 mb-2">Address</span>
                                    <p className="font-sm text-hmsectionTitle mb-2">HEALTH MONDE INC. 8 THE GREEN, STE R
                                        19901 DOVER DELEWARE</p>
                                    <span className="font-bold text-hmsectionTitle text-px-15"><a
                                        href="mailto:hi@healthinmonde.com">hi@healthinmonde.com</a></span>
                                </div>
                                <div className="px-5">
                                    <span className="font-bold text-hmsectionTitle text-px-15 mb-2">Careers</span>
                                    <p className="font-sm text-hmsectionTitle mb-2">Would you like to join our growing
                                        team?</p>
                                    <span className="font-bold text-hmsectionTitle text-px-15"><a
                                        href="mailto:careers@healthinmonde.com">careers@healthinmonde.com</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full ld:w-1/2 py-5 mt-10 md:mt-0 md:py-20">
                            <h5 className="text-hmGreen text-7xl mb-10 text-center">Contact US!</h5>
                            <form className="flex flex-col sm:px-20">
                                <div className="grid grid-cols-2 mb-5">
                                    <div className="mr-5">
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-900">Your
                                            Name</label>
                                        <input type="text"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                               placeholder="Your Name" required />
                                    </div>
                                    <div>
                                        <label
                                            className="block mb-2 text-sm font-medium text-gray-900">Your
                                            Surname</label>
                                        <input type="text"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                               placeholder="Your Surname" required/>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Your
                                        E-Mail</label>
                                    <input type="email"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                           placeholder="example@domain.com" required/>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="message"
                                           className="block mb-2 text-sm font-medium text-gray-900">Your
                                        message</label>
                                    <textarea id="message" rows="4"
                                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                              placeholder="Leave a comment..."></textarea>
                                </div>
                                <div className="grid grid-cols-2 mb-5 justify-center items-center">
                                    <div className="flex items-center h-10">
                                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                        <label htmlFor="link-checkbox"className="ml-2 text-sm font-medium text-gray-900">
                                            I agree with the <a href="#" className="text-blue-600  hover:underline">terms and conditions</a>.
                                        </label>
                                    </div>
                                    <div className="grid justify-items-end  h-10">
                                        <button type="submit"
                                                className="text-white bg-hmGreen hover:bg-hmGreen/80 hover:shadow-lg transition ease-in font-medium rounded-lg text-sm px-4 py-2">Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}