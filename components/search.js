import algoliasearch from 'algoliasearch/lite';
import {InstantSearch} from 'react-instantsearch-hooks-web';
import SearchBox from "./search/searchBox";
import Hits from "./search/Hits";

const searchClient = algoliasearch('V1MWROR4YL', '700a4adbfbe8a582ad0ed457dc37efc0');
export default function SearchModal() {
    return (
        <div>
            <input type="checkbox" id="searchModal" className="modal-toggle" />
            <div className="modal z-20">
                <div className="flex flex-col lg:w-1/3 relative bg-white rounded-lg shadow">
                    <div className="flex flex-col sm:flex-row">
                        <InstantSearch searchClient={searchClient} indexName="wp_searchable_posts">
                            <div className="flex flex-col w-full">
                                <SearchBox/>
                                <Hits/>
                            </div>
                        </InstantSearch>
                    </div>
                </div>
            </div>
        </div>
    )
}