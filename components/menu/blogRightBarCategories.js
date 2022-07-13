import {useQuery} from "@apollo/client";
import RightBarCategories from "../../_queries/RightBarCategories";
import Link from "next/link";

export default function BlogRightBarCategories (props){
    const { data, loading, error } = useQuery(RightBarCategories);
    if (error) {
        console.error(error);
    }
    return (
        <div className="w-full md:w-1/2 lg:w-full md:mr-5 mb-5 py-6 px-5 lg:mr-0 h-fit bg-hmfooterBg rounded-2xl shadow-hmDefault hover:shadow-hmDefaultHover transition ease-in">
            <h3 className="text-hmsectionTitle font-bold mb-5 ">Categories</h3>
            <hr className="border-gray-200 sm:mx-auto mb-4"/>
            {loading && <div>Loading</div>}
            <ul>
                {data?.categories?.nodes.map((cat) => (
                    <li key={cat.databaseId} className="mb-2">
                        <Link href={"/category/"+cat.slug}>
                            <a className="text-sm text-hmDark hover:text-hmGreen transition ease-i">
                                {cat.name}
                                {cat.count != null && <span className="font-bold">({cat.count})</span>}
                                {cat.count == null && <span>(0)</span>}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}
