import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";

import client from "../../apollo-client";
import GetOnePost from "../../_queries/GetOnePost";
import BlogRightBarMenu from "../../components/menu/blogRightBarMenu";
import Image from "next/image";

export default function Post({post,slug}) {
    const editSlug = "https://healthinmonde.com/post/"+slug;
    const robots = post.seo.metaRobotsNoindex+", "+post.seo.metaRobotsNofollow;
    return (
        <section className="relative">
            <Head>
                <title>{post.seo.title}</title>
                <link rel="canonical" href={editSlug}/>
                <meta name="title" content={post.seo.title}/>
                <meta name="description" content={post.seo.metaDesc}/>
                <meta name="keywords" content={post.seo.metaKeywords}/>
                <meta name="robots" content={robots}/>
                <meta property="og:title" content={post.seo.opengraphTitle}/>
                <meta property="og:description" content={post.seo.opengraphDescription} />
                <meta property="og:type" content={post.seo.opengraphType}/>
                <meta property="og:url" content={editSlug} />
                <meta property="og:image" content={post.seo.opengraphImage.mediaItemUrl}/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content={post.seo.twitterTitle}/>
                <meta property="twitter:description" content={post.seo.twitterDescription} />
                <meta property="twitter:url" content={editSlug}/>
                <meta property="twitter:image" content={post.seo.opengraphImage?.mediaItemUrl}/>
            </Head>
            <Header/>
            <section className="Slider min-h-[100px] mb-5 relative">
                {post.featuredImage != null &&
                    <Image src={post.featuredImage.node.mediaItemUrl+"?force_format=webp&w=1920&h=600"}  alt={post.title} title={post.title} width="1920" height="600" className="object-cover w-full h-[600px] rounded-tl-2xl rounded-tr-2xl" />
                }
                <div className="container mx-auto z-10 relative px-1.5 lg:px-0 lg:text-left text-center">
                    <h1 className="py-5 text-2xl md:text-4xl font-semibold text-white absolute bottom-10">{post.title}</h1>
                </div>
            </section>
            <section className="container mx-auto my-10 px-2.5 xl:px-0 font-Poppins">
                <div className="flex flex-col lg:flex-row">
                    <div
                        className="w-full h-fit flex flex-col lg:mr-5 mb-5 md:mb-0 bg-hmfooterBg rounded-2xl shadow-hmDefault">
                        <div className="py-2.5 px-1 md:p-5 text-px-15 font-normal leading-7" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>
                    <BlogRightBarMenu/>
                </div>
            </section>
            <Footer/>
        </section>
    )
}
export async function getServerSideProps(context) {
    const { data } = await client.query({
        query: GetOnePost,
        variables: { id:context.params.slug},
    });
    return {
        props: {
            slug:context.params.slug,
            post: data?.post
        },
    };
}