import Image from 'next/image'
import PageComp from '../componets/page'
import filterL from '../assets/filter-left.svg'
import filterR1 from '../assets/filter-right-1.svg';
import filterR2 from '../assets/filter-right-2.svg';
import filterR3 from '../assets/filter-right-3.svg';
import Product from '../product/page';
import Feature from '../componets/feature';

function Page() {
  return (
    <div>
        <div>
            <PageComp pageName="Shop" />
        </div>
        <div className='bg-rose-200 h-[100px] flex items-center justify-between mt-1'>
            <div className='flex items-center gap-[25px] ml-24'>
                <Image src={filterL} alt='left' />
                <p className='text-xl font-normal'>Filter</p>
                <Image src={filterR1} alt='right' />
                <Image src={filterR2} alt='right' />
                <Image src={filterR3} alt='right' />
                <p className='text-base font-normal text-black'>Showing 1-16 of 32 results</p>
            </div>
            <div className='flex items-center gap-5 mr-24'>
                <p className='text-xl font-normal'>Show</p>
                <button className='w-[55px] h-[55px] bg-white text-gray-300'>16</button>
                <p className='text-xl font-normal'>Short by</p>
                <button className='w-[188px] h-[55px] bg-white text-gray-300 text-left pl-5'>Default</button>
            </div>
        </div>
        <div className='my-20'>
            <Product />
        </div>
        <div>
            <Feature />
        </div>
    </div>
  )
}

export default Page