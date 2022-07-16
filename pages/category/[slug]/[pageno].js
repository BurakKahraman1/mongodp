import Head from "next/head";
import client from "../../../apollo-client";
import {PER_PAGE_FIRST, PER_PAGE_REST} from "../../../_helpers/pagination";
import Link from "next/link";
import Moment from "react-moment";

import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Pagination from "../../../components/pagination";
import BlogRightBarMenu from "../../../components/menu/blogRightBarMenu";
import AllCategoryPost from "../../../_queries/AllCategoryPost";
import Image from "next/image";

export default function Index({slug,mData,pageNo,posts}) {
    const nodes = posts.nodes;
    return (
        <section className="relative">
            <Head>
                <title>{slug} | {mData.companyName}</title>
            </Head>
            <Header/>
            <section className=" min-h-[100px] mb-5"> </section>
            <section className="container mx-auto my-10 px-2.5 xl:px-0 font-Poppins">
                <div className="w-full -fit flex flex-col lg:flex-row justify-between">
                    <div className="w-full flex flex-col lg:mr-5 justify-between">
                        <div className="flex flex-col md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-5 h-fit">
                            {nodes.map((post) => (
                                <div className="postCard basis-1/4 flex flex-col mb-5 rounded-2xl shadow-hmDefault hover:shadow-hmDefaultHover transition ease-in" key={post.postId}>
                                    <div className="w-full h-[200px]">
                                        <Link href={"/post/"+post.slug}>
                                            <a>
                                                {post.featuredImage != null && <Image src={post.featuredImage.node.mediaItemUrl+"?force_format=webp&w=300&h=200"} alt={post.title} title={post.title} width="300" height="200" className="object-cover w-full  h-[200px] rounded-tl-2xl rounded-tr-2xl" />}
                                                {post.featuredImage == null && <Image src="https://dummyimage.com/300x200/ffffff/000000&text=No+Image" alt={post.title} title={post.title} width="300" height="200" className="object-cover w-full  h-[200px] rounded-tl-2xl rounded-tr-2xl" />}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="px-2 flex h-full flex-col border rounded-bl-2xl rounded-br-2xl">
                                        <h5 className="text-hmDark min-h-[80px] flex items-center font-semibold text-px-15 py-4"><Link href={"/post/"+post.slug}>{post.title}</Link></h5>
                                        <div className="flex flex-col content-center md:grid md:grid-flow-col md:justify-items-stretch md:items-end md:columns-2 py-3">
                                            <div className="flex justify-between">
                                            <span className="flex items-center text-gray-500 hover:text-hmDark transition ease-in cursor-pointer">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path></svg>
                                                {post.commentCount == null && <span>0</span>}
                                                {post.commentCount != null && <span>{post.commentCount}</span>}
                                            </span>
                                                <span className="flex items-center text-sm text-gray-400 hover:text-hmDark transition ease-in cursor-pointer">
                                                <Moment format="dddd, MM YYYY">
                                                    {post.date}
                                                </Moment>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {posts.pageInfo.offsetPagination.total>=PER_PAGE_FIRST &&
                            <div className="mt-10 mx-auto mb-10 lg:mb-0">
                                <Pagination type="category" slug={slug} currentPageNo={pageNo} postCount={posts.pageInfo.offsetPagination.total}/>
                            </div>
                        }
                    </div>
                    <BlogRightBarMenu/>
                </div>
            </section>
            <Footer/>
        </section>
    )
}
export async function getServerSideProps(context) {
    const pageNo = context.params.pageno
    const { data } = await client.query({
        query: AllCategoryPost,
        variables: { size:PER_PAGE_FIRST,offset:pageNo*PER_PAGE_REST,slug:context.params.slug},
    });

    return {
        props:{
            slug:context.params.slug,
            pageNo: context.params.pageno,
            posts : data?.posts
        }
    }
}