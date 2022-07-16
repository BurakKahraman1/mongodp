import {useQuery} from "@apollo/client";
import RightBarLastPosts from "../../_queries/RightBarLastPosts";
import Link from "next/link";
import Image from "next/image";

export default function BlogRightBarLastPosts (props){
    const { data, loading, error } = useQuery(RightBarLastPosts);
    if (error) {
        console.error(error);
    }
    return (
        <div className="w-full md:w-1/2 lg:w-full         mb-5 py-6 px-5 lg:mr-0 h-fit bg-hmfooterBg rounded-2xl shadow-hmDefault hover:shadow-hmDefaultHover transition ease-in">
            <h3 className="text-hmsectionTitle font-bold mb-5">Last post</h3>
            <hr className="border-gray-200 sm:mx-auto mb-4"/>
            {loading && <div>Loading</div>}
            <ul>
                {data?.posts?.nodes.map((post) => (
                    <li key={post.postId} className="mb-2">
                        <Link href={"/post/"+post.slug}>
                            <a className="flex flex-row justify-center items-center">
                                {post.featuredImage != null && <Image src={post.featuredImage.node.mediaItemUrl+"?force_format=webp&w=80&h=80"} alt={post.title} title={post.title} width="80" height="80" className="object-cover mr-3 w-[80px] h-[80px]" />}
                                {post.featuredImage == null && <Image src="https://dummyimage.com/80x80/ffffff/000000&text=No+Image" alt={post.title} title={post.title} width="80" height="80" className="object-cover mr-3 w-[80px] h-[80px]" />}
                                <span className="w-full text-sm text-hmDark hover:text-hmGreen transition ease-in">{post.title}</span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
