// import React from 'react'

// export const UiTreq = () => {
//   return (
//    <>
//      <main class="container mx-auto px-4 py-8 my-24">
//         <div class="grid md:grid-cols-2 gap-8">
//             <!-- Product Images -->
//             <div class="space-y-4">
//                 <div class="aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
//                     <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Reebok Zig Kinetica 3" class="w-full h-full object-cover"/>
//                 </div>
//                 <div class="grid grid-cols-4 gap-4">
//                     <button class="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-primary">
//                         <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Thumbnail 1" class="w-full h-full object-cover"/>
//                     </button>
//                     <button class="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
//                         <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Thumbnail 2" class="w-full h-full object-cover"/>
//                     </button>
//                     <button class="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
//                         <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Thumbnail 3" class="w-full h-full object-cover"/>
//                     </button>
//                     <button class="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative group">
//                         <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Thumbnail 4" class="w-full h-full object-cover"/>
//                         <div class="absolute inset-0 bg-black/50 flex items-center justify-center text-white">+4</div>
//                     </button>
//                 </div>
//             </div>

//             <!-- Product Info -->
//             <div class="space-y-6">
//                 <div class="flex items-start justify-between">
//                     <div>
//                         <div class="flex items-center gap-2 mb-2">
//                             <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Reebok" class="w-6 h-6 rounded-full"/>
//                             <span class="font-medium">Zudio</span>
//                         </div>
//                         <h1 class="text-3xl font-bold mb-2">Shoes Zudio 1299</h1>
//                         <div class="flex items-center gap-2">
//                             <div class="flex items-center">
//                                 <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                                 </svg>
//                                 <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                                 </svg>
//                                 <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                                 </svg>
//                                 <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                                 </svg>
//                                 <svg class="w-5 h-5 text-gray-300 dark:text-gray-600 fill-current" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                                 </svg>
//                             </div>
//                             <span class="text-sm text-gray-500 dark:text-gray-400">(42 reviews)</span>
//                         </div>
//                     </div>
//                     <div class="text-3xl font-bold">₹1299.00</div>
//                 </div>

//                 <!-- Color Selection -->
//                 <div>
//                     <h3 class="font-medium mb-3">Color</h3>
//                     <div class="flex gap-3">
//                         <button class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-primary p-0.5">
//                             <span class="block w-full h-full bg-white rounded"></span>
//                         </button>
//                         <button class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 p-0.5">
//                             <span class="block w-full h-full bg-gray-200 rounded"></span>
//                         </button>
//                         <button class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 p-0.5">
//                             <span class="block w-full h-full bg-black rounded"></span>
//                         </button>
//                     </div>
//                 </div>

//                 <!-- Size Selection -->
//                 <div>
//                     <div class="flex items-center justify-between mb-3">
//                         <h3 class="font-medium">Size</h3>
//                         <button class="text-primary text-sm">Size guide</button>
//                     </div>
//                     <div class="grid grid-cols-4 gap-2">
//                         <button class="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">40.5</button>
//                         <button class="py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-primary text-white">41</button>
//                         <button class="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">42</button>
//                         <button class="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">43</button>
//                         <button class="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">43.5</button>
//                         <button class="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">44</button>
//                         <button class="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">44.5</button>
//                         <button class="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">45</button>
//                     </div>
//                 </div>

//                 <!-- Add to Cart -->
//                 <div class="flex gap-4">
//                     <button class="flex-1 bg-[#d68561] text-white py-4 rounded-xl hover:bg-orange-800">
//                     <a href="https://abhirajk.vercel.app/">
//                       Add to cart
//                       </a>
//                   </button>
//                     <button class="w-14 h-14 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary">
//                         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
//                         </svg>
//                     </button>
//                 </div>

//                 <!-- Shipping Info -->
//                 <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
//                     </svg>
//                      <a href="https://abhirajk.vercel.app/">
//                        Free delivery on orders over rs: 300.0
//                       </a>
                   
//                 </div>
//             </div>
//         </div>

//         <!-- Reviews Section -->
//         <div class="mt-16">
//             <div class="border-b border-gray-200 dark:border-gray-800">
//                 <div class="flex gap-8">
//                     <button class="px-4 py-2 text-primary border-b-2 border-primary">Details</button>
//                     <button class="px-4 py-2 text-gray-500 dark:text-gray-400">Reviews</button>
//                     <button class="px-4 py-2 text-gray-500 dark:text-gray-400">Discussion</button>
//                 </div>
//             </div>

//             <div class="mt-8 grid md:grid-cols-2 gap-8">
//                 <div class="space-y-6">
//                     <div class="flex items-start gap-4">
//                         <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg" alt="Reviewer" class="w-10 h-10 rounded-full"/>
//                         <div class="flex-1">
//                             <div class="flex items-center justify-between mb-1">
//                                 <h4 class="font-medium">ARK customer</h4>
//                                 <span class="text-sm text-gray-500 dark:text-gray-400">Yesterday</span>
//                             </div>
//                             <div class="flex items-center mb-2">
//                                 <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                                 </svg>
//                                 <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                                 </svg>
//                                 <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                                 </svg>
//                                 <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                                 </svg>
//                             </div>
//                             <p class="text-gray-600 dark:text-gray-300">Excellent running shoes. It turns very sharply on the foot. good to buy from Zudioo.</p>
//                             <div class="flex items-center gap-4 mt-4">
//                                 <button class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
//                                     <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
//                                     </svg>
//                                     42
//                                 </button>
//                                 <button class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
//                                     <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 11v-9m-7 10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
//                                     </svg>
//                                     0
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="space-y-6">
//                     <div class="flex items-center gap-4">
//                         <div class="text-5xl font-bold text-primary">4.8</div>
//                         <div class="flex-1">
//                             <div class="flex items-center gap-2 mb-1">
//                                 <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                                     <div class="h-full bg-primary" style="width: 90%"></div>
//                                 </div>
//                                 <span class="text-sm text-gray-500 dark:text-gray-400">28</span>
//                             </div>
//                             <div class="flex items-center gap-2 mb-1">
//                                 <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                                     <div class="h-full bg-primary" style="width: 70%"></div>
//                                 </div>
//                                 <span class="text-sm text-gray-500 dark:text-gray-400">9</span>
//                             </div>
//                             <div class="flex items-center gap-2 mb-1">
//                                 <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                                     <div class="h-full bg-primary" style="width: 40%"></div>
//                                 </div>
//                                 <span class="text-sm text-gray-500 dark:text-gray-400">4</span>
//                             </div>
//                             <div class="flex items-center gap-2 mb-1">
//                                 <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                                     <div class="h-full bg-primary" style="width: 20%"></div>
//                                 </div>
//                                 <span class="text-sm text-gray-500 dark:text-gray-400">1</span>
//                             </div>
//                             <div class="flex items-center gap-2">
//                                 <div class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//                                     <div class="h-full bg-primary" style="width: 10%"></div>
//                                 </div>
//                                 <span class="text-sm text-gray-500 dark:text-gray-400">1</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 </div>
//             </div>
//         </div>
//     </main>
//    </>
//   )
// }
