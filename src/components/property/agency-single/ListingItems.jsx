
'use client'


import React, { useEffect, useState } from 'react'
import ListingItems from '../ListingItems'
import listings from '@/data/listings'
import Link from 'next/link'
export default function ListingItemsContainer({agentProp, totalListing}) {
//console.log(totalListing);
    const [currentCategory, setCurrentCategory] = useState('All')
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
      
        switch (currentCategory) {
            case 'All':
                 setPageData(agentProp.slice(0,4))
                //setPageData(agentProp)
                break;
            case 'rent':
                // setPageData(listings.filter(elm=>elm.forRent).slice(0,4))
                setPageData(agentProp.filter(item=>item.property_status.toLowerCase() === "rent").slice(0,4))
                break;
            case 'sale':
                setPageData(agentProp.filter(item=>item.property_status.toLowerCase() === "sale").slice(0,4))
                break;
            default:
              setPageData(agentProp.slice(0,4))
                break;
        }
      
    }, [currentCategory])
    
  return (
<div className="row align-items-center mt20">
                <div className="col-sm-4">
                  <h6 className="fz17">Listing {totalListing}</h6>
                </div>
                {/* End .col-4 */}

                <div className="col-sm-8">
                  <div className="dark-light-navtab style4 mt-0 mt-lg-4 mb30">
                    <ul
                      className="nav nav-pills justify-content-start justify-content-sm-end"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className={currentCategory == 'All'? "nav-link active":'nav-link'}
                          
                          onClick={()=>setCurrentCategory('All')}
                        >
                          All
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={currentCategory == 'rent'?"nav-link active":'nav-link'}
                          
                          onClick={()=>setCurrentCategory('rent')}
                        >
                          For Rent
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                        className={currentCategory == 'sale'?"nav-link me-0 active":'nav-link me-0'}
             
                          
                          onClick={()=>setCurrentCategory('sale')}
                        >
                          For Sale
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End .col-8 */}

                <div className="col-lg-12">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="row">
                        {/* {currentCategory != undefined &&  pageData != undefined ?<ListingItems data={pageData} />  : ""} */}
                        <ListingItems data={pageData != "" ? pageData : agentProp} />
                      </div>
                    </div>
                    {/* End tab-pane */}

                   
                    {/* End tab-pane */}
                  </div>
                  {/* End tab-content */}

                  <div className="d-grid pb30 bdrb1">
                    <Link href="/all-properties" className="ud-btn btn-white2">
                      Show all property
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
  )
}
