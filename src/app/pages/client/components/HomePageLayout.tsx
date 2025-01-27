// import { useGetCategoriesQuery } from "~/app/store/api/categories/merchantCategoriesApi";
// import NyxTabs from "../../../../base/components/NyxTabs";
// import { CategoryType } from "~/base/enums";
// import { useNavigate } from "react-router-dom";
// import { Parent } from "~/app/store/types";
// import _ from "~/base/core/lodash";

// export default function HomePageLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const navigate = useNavigate();
//   const { data } = useGetCategoriesQuery({
//     type: CategoryType.BRAND,
//   });

//   const tabsData = _.uniqBy(
//     (data?.data ?? []).map((item) => item.parent as Parent),
//     "title",
//   ).map((item) => {
//     return { label: item.title, value: item._id };
//   });
//   const tabs: { label: string; value: string }[] = [
//     { label: "Home", value: "Home" },
//     ...(tabsData as { label: string; value: string }[]),
//   ];

//   function handleTabClick(tab: string) {
//     const title = tab === "Home" ? "home" : tab.replace(/\s+/g, "-");
//     navigate(`/merchant/${title}`);
//   }

//   return (
//     <div className="flex max-h-fit w-full flex-col gap-9 p-4 pb-20 lg:px-8">
//       <NyxTabs tabs={tabs} onClick={handleTabClick} />
//       <div>{children}</div>
//     </div>
//   );
// }
