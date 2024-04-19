import React from 'react'

const Stepper = () => {
  return (
    <div>

        <div className="material " style={{marginTop:"4rem"}} >
            <h1 style={{textDecoration:"underline",paddingTop:"4rem"}} className='font-bold text-blue-700'>Materail GRC Provide</h1>
        </div>
<ol className="relative border-s border-gray-200 dark:border-gray-700 " style={{marginBottom:"2rem",marginLeft:"5rem"}}>                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-bold leading-none text-gray-600 dark:text-gray-500 ">GRC Wall Cladding</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-blue">A. Natural Ashlar Series </h3>
        <pre className='font-normal'>
        {'A1. Natural Ashlar - Thunder.\nA2. Natural Ashlar - Harbor Gray.\n'}
        {'A3. Natural Ashlar - Silvery.\nA4. Natural Ashlar - Winter Melon.'}
</pre>
        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3
         h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">GRC designs</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <pre className='font-normal'>
        {'B.Mansion stone C.Maple stone D.Zion Stone.\nE.German Brick F.Intra Walling G.Greenwood Stone.\n'}
        {'H.Dutch Brick I.Persian Brick- Graphite J.Persian Brick- Polished K.Chestnut Brick\n'}
       { 'L.Carved Stone M.Furbrick N.Vintage Brick O.Keramic Walling P.Classic Wallingq\n'}
       { 'Q.Fireplace Brick R.Pixy Stone S.Bubble Stone T.Grey Stone\n'}
       { 'U.Bamboo Brick  V.Greco Walling W.Wine Brick X.Farm Stone Y.Slash stone walling'}
</pre>   
    </li>
    <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-bold leading-none text-gray-400 dark:text-gray-500">Concrete floor tiles </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <pre className='font-normal'>
        {'1.Mini grid Tile 2.Diamond Checker 3.Harvest Gold  4.Walkway 5.Climevale 6.Canvas 7.Jaipur Stone.\n'}
        {'8.Checkered Board 9.Wave Block 10.Triangular 11.Round Dumble Paver 12. Trihex Groove  13. Harbour 14. Round Dumble \n'}
       { '15.Cross-board 16.Rectangle Staircase 17.Cube Staircase 18.Brick Basket 19.Basket Weave 20.Troop 21.Allusion\n'}
       { '22.Shel 23.Promenade 24.Diagonal Subway 25.Rome Cobble 26. Florence Cobble 27. Scottish Cobble 28.Trihex Board\n'}
       { '29.Gilbert Stone 30.Antique Bluestone 31.Arcade'}
</pre>    
    </li>
</ol>

 </div>
  )
}

export default Stepper