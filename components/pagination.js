import {totalPagesCount, createPaginationLinks, PER_PAGE_FIRST} from "../_helpers/pagination"
import Link from "next/link";

export default function pagination(props) {
    const totalPage = totalPagesCount(props.postCount)
    const paginationLinks = createPaginationLinks(props.currentPageNo,totalPage)
    return (
      <div>
          {props.type=="blog" &&
              <div className="btn-group">
                  {paginationLinks.map((link) => {
                      return (
                          <Link href={link!="..." ? link!=props.currentPageNo ? '/blog/'+link : '' : ''} key={link}>
                              <a className={link == props.currentPageNo ? 'btn btn-hmDark border-hmsectionTitle' : 'btn btn-ghost border-hmsectionTitle'}>{link}</a>
                          </Link>
                      )
                  })}
              </div>
          }
          {props.type=="category" &&
              <div className="btn-group">
                  {paginationLinks.map((link) => {
                      return (
                          <Link href={link!="..." ? link!=props.currentPageNo ? '/category/'+props.slug+'/'+link : '/category/'+props.slug : '/category/'+props.slug} key={link}>
                              <a className={link == props.currentPageNo ? 'btn btn-hmDark border-hmsectionTitle' : 'btn btn-ghost border-hmsectionTitle'}>{link}</a>
                          </Link>
                      )
                  })}
              </div>
          }

      </div>
    )
}
