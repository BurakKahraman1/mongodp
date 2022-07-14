import { useHits } from "react-instantsearch-hooks-web"

export default function Hits(props) {
    const { hits, results } = useHits(props);
    return (
        <div className="flex flex-col bg-hmfooterBg rounded-bl-lg rounded-br-lg w-full min-h-[350px] py-4 px-5">
            {hits != "" &&
                <ul className="overflow-y-scroll h-[400px]">
                    {hits.map((hit) => (
                        <li className="flex bg-white border-hmDark/90 rounded shadow-sm mb-3 hover:shadow-md transition ease-in" key={hit.post_id}>
                            <a href={"/post/"+hit.post_name} className="w-full h-full p-3">{hit.post_title}</a>
                        </li>
                    ))}
                </ul>
            }
            {hits == "" &&
                <div className="flex flex-col items-center justify-center h-fit">
                    <span className="text-hmsectionTitle my-10">
                        <svg width="40" height="40" viewBox="0 0 20 20" fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path>
                        </svg>
                    </span>
                    <span className="w-full px-10 text-ellipsis overflow-hidden text-hmsectionTitle text-center my-6 text-2xl font-semibold ">No results <b>{results.query}</b></span>
                </div>
            }
        </div>
    )
}