// import React, { useState } from "react";

// const Shop = () => {
//   const [activeTab, setActiveTab] = useState("dogs"); // Manage active tab state

//   const dogItems = [
//     {
//       image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fshop-for-4-min.jpg",
//       title: "Dog Food",
//       subtitle: "Save up to 16%",
//       description: "on Branded Food",
//     },
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fshop-for-dog-toys-min.png",
  //     title: "Dog Toys",
  //     subtitle: "Engage and Entertain",
  //     description: "Your Pups",
  //   },
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fshop-for-dog-training-min.png",
  //     title: "Dog Training Accessories",
  //     subtitle: "Train Your Fido Like a Pro",
  //     description: "",
  //     colSpan: "lg:col-span-2",
  //   },
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fpet-potrait.png",
  //     title: "Pet Portraits",
  //     subtitle: "Joyful Memories on Display",
  //     description: "",
  //     colSpan: "lg:col-span-2",
  //   },
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fshop-for-8-v2-min.jpg",
  //     title: "Treats",
  //     subtitle: "Reward Your Lovely Dogs",
  //     description: "",
  //   },
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fshop-for-10-min.jpg",
  //     title: "Bowls",
  //     subtitle: "Feed with Love",
  //     description: "",
  //   },
  // ];

  // const catItems = [
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-food-min.jpg",
  //     title: "Cat Food",
  //     subtitle: "Save up to 20%",
  //     description: "on Branded Food",
  //   },
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-toys-min.png",
  //     title: "Cat Toys",
  //     subtitle: "Engage and Entertain",
  //     description: "Your Cats",
  //   },
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-accessories-min.png",
  //     title: "Cat Accessories",
  //     subtitle: "Perfect for Feline Friends",
  //     description: "",
  //     colSpan: "lg:col-span-2",
  //   },
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-beds-min.png",
  //     title: "Cat Beds",
  //     subtitle: "Comfort and Style",
  //     description: "",
  //     colSpan: "lg:col-span-2",
  //   },
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-treats-min.jpg",
  //     title: "Treats",
  //     subtitle: "Reward Your Lovely Cats",
  //     description: "",
  //   },
  //   {
  //     image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-bowls-min.jpg",
  //     title: "Bowls",
  //     subtitle: "Feed with Love",
  //     description: "",
  //   },
  // ];

//   const renderItems = (items) => (
//     <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className={`overflow-hidden col-span-1 row-span-1 bg-no-repeat bg-contain bg-center cursor-pointer rounded-md h-80 relative group ${item.colSpan}`}
//           style={{ backgroundImage: `url(${item.image})`, backgroundColor: item.colSpan ? 'rgb(242, 243, 250)' : 'rgb(255, 233, 236)' }}
//         >
//           <div className="h-full w-full relative p-5">
//             <h3 className="text-3xl font-medium mb-2.5 text-gray-700">{item.title}</h3>
//             <p className="text-sm lg:text-base text-gray-600">{item.subtitle}</p>
//             {item.description && <p className="text-sm lg:text-base text-gray-600">{item.description}</p>}
//             <button
//               type="button"
//               className="h-10 rounded-md my-2 min-w-[250px] px-5 text-sm normal-case bg-primary hover:bg-primary-hover text-white mt-10"
//               style={{ backgroundColor: "rgb(249, 17, 85)" }}
//             >
//               <div className="flex items-center">
//                 <div className="flex-1 flex items-center justify-center">Shop Now</div>
//               </div>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <section className="w-full py-10 px-5">
//       <div className="flex justify-center space-x-10" role="tablist" aria-orientation="horizontal">
//         <button
//           className={`text-lg md:text-xl pb-3 border-b-2 outline-none ${activeTab === 'dogs' ? 'text-accent border-b-accent' : 'text-gray-800 border-b-transparent'}`}
//           id="shop-dogs-tab"
//           role="tab"
//           aria-selected={activeTab === 'dogs'}
//           tabIndex="0"
//           aria-controls="shop-dogs-panel"
//           onClick={() => setActiveTab("dogs")}
//         >
//           Shop for Dogs
//         </button>
//         <button
//           className={`text-lg md:text-xl pb-3 border-b-2 outline-none ${activeTab === 'cats' ? 'text-accent border-b-accent' : 'text-gray-800 border-b-transparent'}`}
//           id="shop-cats-tab"
//           role="tab"
//           aria-selected={activeTab === 'cats'}
//           tabIndex="0"
//           aria-controls="shop-cats-panel"
//           onClick={() => setActiveTab("cats")}
//         >
//           Shop for Cats
//         </button>
//       </div>

//       <div className="mt-5 w-full">
//         <div id="shop-dogs-panel" role="tabpanel" tabIndex="0" aria-labelledby="shop-dogs-tab">
//           {activeTab === "dogs" && renderItems(dogItems)}
//         </div>
//         <div id="shop-cats-panel" role="tabpanel" tabIndex="0" aria-labelledby="shop-cats-tab">
//           {activeTab === "cats" && renderItems(catItems)}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Shop;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Shop = () => {
  const [activeTab, setActiveTab] = useState("dogs"); // Manage active tab state
  const navigate = useNavigate();  // Initialize navigation

  const dogItems = [
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fshop-for-4-min.jpg",
      title: "Dog Food",
      subtitle: "Save up to 16%",
      description: "on Branded Food",
      link: "/dog-food",  // Add link to navigate
    },
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fshop-for-dog-toys-min.png",
      title: "Dog Toys",
      subtitle: "Engage and Entertain",
      description: "Your Pups",
      link:"/dog-food",
    },
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fshop-for-dog-training-min.png",
      title: "Dog Training Accessories",
      subtitle: "Train Your Fido Like a Pro",
      description: "",
      colSpan: "lg:col-span-2",
    },
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fpet-potrait.png",
      title: "Pet Portraits",
      subtitle: "Joyful Memories on Display",
      description: "",
      colSpan: "lg:col-span-2",
    },
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fshop-for-8-v2-min.jpg",
      title: "Treats",
      subtitle: "Reward Your Lovely Dogs",
      description: "",
    },
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fshop-for-10-min.jpg",
      title: "Bowls",
      subtitle: "Feed with Love",
      description: "",
    },
  ];

  const catItems = [
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-food-min.jpg",
      title: "Cat Food",
      subtitle: "Save up to 20%",
      description: "on Branded Food",
    },
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-toys-min.png",
      title: "Cat Toys",
      subtitle: "Engage and Entertain",
      description: "Your Cats",
    },
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-accessories-min.png",
      title: "Cat Accessories",
      subtitle: "Perfect for Feline Friends",
      description: "",
      colSpan: "lg:col-span-2",
    },
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-beds-min.png",
      title: "Cat Beds",
      subtitle: "Comfort and Style",
      description: "",
      colSpan: "lg:col-span-2",
    },
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-treats-min.jpg",
      title: "Treats",
      subtitle: "Reward Your Lovely Cats",
      description: "",
    },
    {
      image: "https://cdn.petsworld.network/v1/b/assets.petsworld.network/o/images%2Fhome%2Fshop-for%2Fcat-bowls-min.jpg",
      title: "Bowls",
      subtitle: "Feed with Love",
      description: "",
    },
  ];

  const renderItems = (items) => (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`overflow-hidden col-span-1 row-span-1 bg-no-repeat bg-contain bg-center cursor-pointer rounded-md h-80 relative group ${item.colSpan}`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundColor: item.colSpan ? 'rgb(242, 243, 250)' : 'rgb(255, 233, 236)'
          }}
        >
          <div className="h-full w-full relative p-5">
            <h3 className="text-3xl font-medium mb-2.5 text-gray-700">{item.title}</h3>
            <p className="text-sm lg:text-base text-gray-600">{item.subtitle}</p>
            {item.description && <p className="text-sm lg:text-base text-gray-600">{item.description}</p>}
            <button
              type="button"
              className="h-10 rounded-md my-2 min-w-[250px] px-5 text-sm normal-case bg-primary hover:bg-primary-hover text-white mt-10"
              style={{ backgroundColor: "rgb(249, 17, 85)" }}
              onClick={() => navigate(item.link)}  // Navigate to the specific page
            >
              <div className="flex items-center">
                <div className="flex-1 flex items-center justify-center">Shop Now</div>
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="shopC">
    <section className="w-full py-10 px-5">
      <div className="flex justify-center space-x-10" role="tablist" aria-orientation="horizontal">
        <button
          className={`text-lg md:text-xl pb-3 border-b-2 outline-none ${activeTab === 'dogs' ? 'text-accent border-b-accent' : 'text-gray-800 border-b-transparent'}`}
          id="shop-dogs-tab"
          role="tab"
          aria-selected={activeTab === 'dogs'}
          tabIndex="0"
          aria-controls="shop-dogs-panel"
          onClick={() => setActiveTab("dogs")}
        >
          Shop for Dogs
        </button>
        <button
          className={`text-lg md:text-xl pb-3 border-b-2 outline-none ${activeTab === 'cats' ? 'text-accent border-b-accent' : 'text-gray-800 border-b-transparent'}`}
          id="shop-cats-tab"
          role="tab"
          aria-selected={activeTab === 'cats'}
          tabIndex="0"
          aria-controls="shop-cats-panel"
          onClick={() => setActiveTab("cats")}
        >
          Shop for Cats
        </button>
      </div>

      <div className="mt-5 w-full">
        <div id="shop-dogs-panel" role="tabpanel" tabIndex="0" aria-labelledby="shop-dogs-tab">
          {activeTab === "dogs" && renderItems(dogItems)}
        </div>
        <div id="shop-cats-panel" role="tabpanel" tabIndex="0" aria-labelledby="shop-cats-tab">
          {activeTab === "cats" && renderItems(catItems)}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Shop;
