import { Banner } from "./Banner";


import './Banner.css';

const images = [
    "https://5.imimg.com/data5/IOS/Default/2021/7/OY/ZW/UT/12472122/product-jpeg-1000x1000.png",
    "https://5.imimg.com/data5/TK/LU/MY-993621/interlocking-pavers-250x250.jpg",
    "https://3.imimg.com/data3/TG/EJ/MY-813707/concrete-paver-1000x1000.jpg",
    "https://5.imimg.com/data5/IOS/Default/2021/7/SJ/HW/IU/12472122/product-jpeg-1000x1000.png",
    "https://5.imimg.com/data5/SELLER/Default/2021/12/KI/GC/HK/135770529/zigzag-interlocking-tiles-3-500x500.jpg",
    "https://2.imimg.com/data2/ES/DG/MY-3526889/pavers-250x250.jpg",
    "https://3.imimg.com/data3/SE/CN/MY-2978396/cement-concrete-pavers-1000x1000.jpg",
    "https://imgs.indiamarketplaces.com/t_images/2749_14325_grc-screens.jpg",
"https://tiimg.tistatic.com/fp/1/003/905/grc-planter-520.jpg",
    "https://images.jdmagicbox.com/rep/b2b/grc-screen/grc-screen-1.jpg"
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));
  
  export default function App() {
    return (
      <div className="App" style={{marginTop:"2rem"}}>
   
        <Banner images={images} speed={8000} />
<div className="rating_bar"style={{width:"80vw",margin:"3rem"}}>
        <div class="flex items-center mb-5 " >
    <p class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">8.7</p>
    <p class="ms-2 font-medium text-gray-900 dark:text-white">Excellent</p>
    <span class="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">376 reviews</p>
    <a href="#" class="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read all reviews</a>
</div>
<div class="gap-8 sm:grid sm:grid-cols-2">
    <div>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Staff</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"  style={{width:"89%"}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Comfort</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"  style={{width:"89%"}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Free WiFi</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"  style={{width:"89%"}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Facilities</dt>
            <dd class="flex items-center">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"  style={{width:"74%"}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">7.4</span>
            </dd>
        </dl>
    </div>
    <div>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Value for money</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"  style={{width:"89%"}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Cleanliness</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"  style={{width:"70%"}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">7.0</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
            <dd class="flex items-center">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{width:"89%"}}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
            </dd>
        </dl>
    </div>
</div>
</div>
        
      </div>
    );
  }
  