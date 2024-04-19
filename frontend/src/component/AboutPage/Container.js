import React from "react";
import "./About.css";

const Container = () => {
  return (
    <>

<div class="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">

  <div data-theme="teal" class="mx-auto max-w-6xl">
    <h2 class="sr-only">Featured case study</h2>
    <section class="font-sans text-black">
      <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
        <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
          <div class="h-full">
            <article class="h-full">
              <div class="h-full">
                <img class="h-full object-cover"
                 src="/image.png" width="733" height="412" alt='""' typeof="foaf:Image" />
              </div>
            </article>
          </div>
        </div>
        <div class="p-6 bg-grey">
          <div class="leading-relaxed">
            <h2 class="leading-tight text-4xl font-bold about_class">TERRA FIRMA CONCRETE BLOCKS INDUSTRY</h2>
            <p class="mt-4">With great pleasure <span className="text-blue-700">"TERRA FIRMA</span> is proud to introduce new concrete
pavers and ..</p>
            <p class="mt-4">We have adopted this very new technology from Japan and Netherlands.
Experts had developed and tested these concrete pavers/tiles which
contain some additive which under the influence of sunlight binds the
nitrogen particles from the atmosphere</p>
            <p><a class="mt-4 button button--secondary" href="https://inviqa.com/cxcon-experience-transformation">Explore this event</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>


<div class="bg-white dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12 gallery_grc">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div class="flex items-center gap-12">
                <h2 class="text-2xl font-bold text-violet-800 about_class">Gallery</h2>

                <p class="hidden max-w-screen-sm text-black-700  md:block">
                Terra Firma
Terra Firma
TECHNICAL FEATURES
is a GRC-Glass reinforced concrete made from white
portland cement, alkali resistant glass fibers, UV resistant synthetic
inorganic pigments combined with a range of chemical additives.
The process of making is both a science and an art.
                </p>
            </div>

            <a href="#"
                class="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                More
            </a>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
    
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="/scroll_image/image_s_1.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>

            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="/scroll_image/image_s_2.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
            </a>
     
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg
                 bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="/scroll_image/image_s_5.jpg" loading="lazy" alt="Photo by Martin Sanchez" 
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 
                group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
          
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="/scroll_image/image_s_4.jpg" 
                loading="lazy" alt="Photo by Lorenzo Herrera"
                 class="absolute inset-0 h-full w-full object-cover object-center 
                 transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
       
        </div>
    </div>
</div>
    </>
  );
};

export default Container;