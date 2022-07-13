import BlogRightBarLastPosts from "./blogRightBarLastPosts";
import BlogRightBarCategories from "./blogRightBarCategories";

export default function BlogRightBarMenu (){
    return (
        <div className="w-full flex flex-col md:flex-row lg:flex-col lg:w-1/4 h-fit sticky top-[120px]">
            <BlogRightBarCategories/>
            <BlogRightBarLastPosts/>
        </div>
    )
}