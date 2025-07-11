// import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";
// // internal
// import ErrorMsg from "@/components/common/error-msg";
// import ShopColorLoader from "@/components/loader/shop/color-filter-loader";
// import { useGetAllProductsQuery } from "@/redux/features/productApi";
// import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";

// const ColorFilter = ({setCurrPage,shop_right=false}) => {
//   const { data: products, isError, isLoading } = useGetAllProductsQuery();
//   const router = useRouter();
//   const dispatch = useDispatch()

//   // handle color 
//   const handleColor = (clr) => {
//     setCurrPage(1)
//     router.push(
//       `/${shop_right?'shop-right-sidebar':'shop'}?color=${clr
//         .toLowerCase()
//         .replace("&", "")
//         .split(" ")
//         .join("-")}`
//     )
//     dispatch(handleFilterSidebarClose());
//   }
//   // decide what to render
//   let content = null;

//   if (isLoading) {
//     content = <ShopColorLoader loading={isLoading}/>;
//   }
//   if (!isLoading && isError) {
//     content = <ErrorMsg msg="There was an error" />;
//   }
//   if (!isLoading && !isError && products?.data?.length === 0) {
//     content = <ErrorMsg msg="No Products found!" />;
//   }
//   if (!isLoading && !isError && products?.data?.length > 0) {
//     const product_items = products.data;
//     let allColor = [];
//     product_items.forEach((product) => {
//       let uniqueColor = new Set(product.imageURLs.map((item) => item?.color));
//       allColor = [...new Set([...allColor, ...uniqueColor])];
//     });

//     let uniqueColors = [
//       ...new Map(allColor.map((color) => [color?.name, color])).values(),
//     ];
//     content = uniqueColors.map((item, i) => {
//       if (item) {
//         return (
//           <li key={i}>
//             <div className="tp-shop-widget-checkbox-circle">
//               <input
//                 type="checkbox"
//                 id={item.name}
//                 checked={
//                   router.query.color ===
//                   item.name.toLowerCase().replace("&", "").split(" ").join("-")
//                     ? "checked"
//                     : false
//                 }
//                 readOnly
//               />
//               <label
//                 onClick={() => handleColor(item.name)}
//                 htmlFor={item.name}
//               >
//                 {item.name}
//               </label>
//               <span
//                 style={{ backgroundColor: `${item.clrCode}` }}
//                 className="tp-shop-widget-checkbox-circle-self"
//               ></span>
//             </div>
//             <span className="tp-shop-widget-checkbox-circle-number">
//               {
//                 product_items
//                   .map((p) => p.imageURLs)
//                   .flat()
//                   .filter((i) => i?.color?.name === item?.name).length
//               }
//             </span>
//           </li>
//         );
//       }
//     });
//   }

//   return (
//     <>
//       <div className="tp-shop-widget mb-50">
//         <h3 className="tp-shop-widget-title">Filter by Color</h3>
//         <div className="tp-shop-widget-content">
//           <div className="tp-shop-widget-checkbox-circle-list">
//             <ul>{content}</ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ColorFilter;

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// internal
import ErrorMsg from "@/components/common/error-msg";
import ShopColorLoader from "@/components/loader/shop/color-filter-loader";
import { useGetAllProductsQuery } from "@/redux/features/productApi";
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";

const ColorFilter = ({ setCurrPage, shop_right = false }) => {
  const { data: products, isError, isLoading } = useGetAllProductsQuery();
  const router = useRouter();
  const dispatch = useDispatch();

  // — only these names will show —
  const allowedColors = [
    "Purple Brown",
    "Potters Clay",
    "Antique Brass",
    "Pale Taupe",
    "Burning Sand",
    "Pinkish Tan",
    "Barney",
    "Yellow Ochre",
    "Rich Electric Blue",
    "Lion",
    "Pickled Bean",
    "Tumbleweed",
    "Bullet Shell",
    "Rangoon Green",
    "Iridium",
    "Faded Green",
    "Summer Green",
    "Dark Green",
    "Flame"
  ];

  // handle color click
  const handleColor = (clr) => {
    setCurrPage(1);
    router.push(
      `/${shop_right ? "shop-right-sidebar" : "shop"}?color=${clr
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
    dispatch(handleFilterSidebarClose());
  };

  let content = null;

  if (isLoading) {
    content = <ShopColorLoader loading={isLoading} />;
  } else if (isError) {
    content = <ErrorMsg msg="There was an error" />;
  } else if (!products?.data?.length) {
    content = <ErrorMsg msg="No Products found!" />;
  } else {
    const product_items = products.data;

    // gather all color objects
    let allColor = [];
    product_items.forEach((product) => {
      const uniq = new Set(product.imageURLs.map((i) => i?.color));
      allColor = [...new Set([...allColor, ...uniq])];
    });

    // dedupe by name
    let uniqueColors = [
      ...new Map(allColor.map((c) => [c?.name, c])).values(),
    ];

    // **filter** to only your allowed list
    uniqueColors = uniqueColors.filter(
      (c) => c && allowedColors.includes(c.name)
    );

    // map the filtered list
    content = uniqueColors.map((item, i) => {
      const slug = item.name.toLowerCase().replace("&", "").split(" ").join("-");
      const count = product_items
        .flatMap((p) => p.imageURLs)
        .filter((img) => img.color?.name === item.name).length;

      return (
        <li key={i}>
          <div className="tp-shop-widget-checkbox-circle">
            <input
              type="checkbox"
              id={slug}
              checked={router.query.color === slug}
              readOnly
            />
            <label
              htmlFor={slug}
              onClick={() => handleColor(item.name)}
              style={{ cursor: "pointer" }}
            >
              {item.name}
            </label>
            {/* keep swatch circle */}
            <span
              className="tp-shop-widget-checkbox-circle-self"
              style={{ backgroundColor: item.clrCode }}
            />
          </div>
          <span className="tp-shop-widget-checkbox-circle-number">
            {count}
          </span>
        </li>
      );
    });
  }

  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Filter by Color</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-checkbox-circle-list">
          <ul>{content}</ul>
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
