import { useSearchBox } from "react-instantsearch-hooks-web"
export default function SearchBox(props) {
    const { refine} = useSearchBox(props);
    return (
        <div className="w-full border-b flex flex-row flex-grow justify-center items-center h-fit py-4">
            <span className="px-5 fill-hmLogoGreen">
                <svg id="Search" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.037 14.037">
                    <path id="Path_2" data-name="Path 2" d="M1.755,6.141A4.344,4.344,0,0,1,6.141,1.755a4.344,4.344,0,0,1,4.386,4.386,4.344,4.344,0,0,1-4.386,4.386A4.344,4.344,0,0,1,1.755,6.141Zm10.791,7.632a.868.868,0,0,0,1.228-1.228l-2.72-2.72a6.007,6.007,0,0,0,1.228-3.685A6.1,6.1,0,0,0,6.141,0,6.1,6.1,0,0,0,0,6.141a6.1,6.1,0,0,0,6.141,6.141,6.007,6.007,0,0,0,3.685-1.228Z"></path>
                </svg>
            </span>
            <input id="algolia_search" onChange={(e) => refine(e.currentTarget.value)} className="input w-full h-full border-0 px-1 py-2.5 focus:outline-0 font-Poppins text-hmDark text-sm" type="search" placeholder="Search..." />

            <label className="kbd cursor-pointer mr-5" htmlFor="searchModal">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="fill-hmGreen">
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                </svg>
            </label>
        </div>
    )
}