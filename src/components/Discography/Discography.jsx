import React, { useEffect,  useState } from 'react'
import {discographies} from './data'
import ReactPaginate from 'react-paginate'
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
import DiscoCard from './DiscoCard';

const Discography = ({initialPage,setInitialPage}) => {
  const [albums,setAlbums]=useState([])
  const [windowSize,setWindowSize]=useState([window.innerWidth,window.innerHeight]);
  
  useEffect(()=>{
    setAlbums([])
    for (const [key, value] of Object.entries(discographies)) {
      for(let v of value){
        setAlbums((a)=>[...a,{...v,"lang":key}])
      }
    }
  },[])
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const items=albums.sort((a,b)=> (a.release_date<b.release_date)?1:-1)
  console.log(items.length)
  const [itemsPerPage,setItemsPerPage]=useState()
  useEffect(()=>{
    if(windowSize[0]>=1280){
      setItemsPerPage(8)
    }else if(windowSize[0]<1280 && windowSize[0]>=500){
      setItemsPerPage(9)
    }else if(windowSize[0]<768 && windowSize[0]>=500){
      setItemsPerPage(6)
    }
    else if(windowSize[0]<500){
      setItemsPerPage(4)
    }
  },[windowSize])
  console.log(itemsPerPage)
  const pageCount=Math.ceil(items.length/itemsPerPage)

  const itemOffset = (initialPage * itemsPerPage) % items.length;
  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset);
  const handlePageClick = (event) => {
    console.log(event.selected)
    setInitialPage(event.selected)

  };

  return (
      <div className='py-32 h-100'>
        <h1 className='text-5xl text-center vinasans-font tracking-wider text-grad overflow-hidden'>Discography</h1>
        <div className="py-20 grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-[499px]:grid-cols-1 gap-10 px-5" currentitems={currentItems}>
          {
            currentItems.map((i)=>(
              <DiscoCard item={i} key={i.title} />
            ))
          }
            

        </div>
        <div className="">
          <ReactPaginate 
            breakLabel="..."
            initialPage={initialPage}
            nextLabel={<SlArrowRight />}
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={<SlArrowLeft />}
            renderOnZeroPageCount={null}
            className='flex justify-center items-center gap-3 '
            pageClassName='w-12 h-14 flex items-center justify-center border border-black rounded  text-custom-dark font-bold '
            previousClassName='w-12 h-14 flex items-center justify-center border border-black rounded text-xl text-custom-black'
            nextClassName='w-12 h-14 flex items-center justify-center border border-black rounded text-xl text-custom-black'
            activeClassName='bg-custom-dark text-custom-light'
            
          />
        </div>
      </div>
  )
}

export default Discography
