export const PER_PAGE_FIRST = 20;
export const PER_PAGE_REST = 20;

export const getPageOffset = ( pageNo ) => {
    let offset = 0;
    pageNo = Number( pageNo );
    if ( 1 === pageNo ) {
        offset = 0;
    } else if ( 2 === pageNo ) {
        offset = PER_PAGE_FIRST;
    } else {
        offset = PER_PAGE_FIRST + ( ( pageNo - 2 ) * PER_PAGE_REST );
    }
    return offset;
};

export const totalPagesCount = ( totalPostsCount ) => {
    return Math.ceil( ( totalPostsCount - PER_PAGE_FIRST ) / PER_PAGE_REST );
};
export const createPaginationLinks = ( currentPage, totalPages ) => {
    const cpage = Number(currentPage)
    const paginationArray = [];
    let countOfDotItems = 0;

    // If there is only one page, return an empty array.
    if ( ! totalPages && 1 >= totalPages ) {
        return paginationArray;
    }
    if ( 0 < cpage - 2 ) {
        paginationArray.push( cpage - 2 );
    }

    if ( 0 < cpage - 1 ) {
        paginationArray.push( cpage - 1 );
    }
    paginationArray.push( cpage );
    if ( totalPages >= cpage + 1 ) {
        paginationArray.push( cpage + 1 );
    }
    if ( totalPages >= cpage + 2 ) {
        paginationArray.push( cpage + 2 );
    }
    if ( 1 < paginationArray[0] - 1 ) {
        paginationArray.unshift( '...' );
        countOfDotItems += 1;
    }

    if ( 2 < totalPages - paginationArray[paginationArray.length - ( 2 - countOfDotItems )] ) {
        paginationArray.push( '...' );
    }
    if ( -1 === paginationArray.indexOf( 1 ) ) {
        paginationArray.unshift( 1 );
    }
    if ( -1 === paginationArray.indexOf( totalPages ) ) {
        paginationArray.push( totalPages );
    }
    return paginationArray;
};
