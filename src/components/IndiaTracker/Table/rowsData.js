import { fetchIndianData } from "../../../api";

async function fetchData() {
  const data = await fetchIndianData();
  console.log(data);
  const state = Array(Object.keys(data));
  console.log(state[0][0]);
  const rowData = state[0].map((name) => {
    return [
      {
        area_name: name,
        total_cases: "9",
        total_active: "4",
        total_recovered: "4",
        total_deaths: "1",
      },
    ];
  });
  return rowData;
}
export default fetchData;
// const rowData = [
//   {
//     area_name: "Mira-Bhayandar",
//     total_cases: "9",
//     total_active: "4",
//     total_recovered: "4",
//     total_deaths: "1",
//   },
//   {
//     area_name: "Dongri",
//     total_cases: "4",
//     total_active: "0",
//     total_recovered: "3",
//     total_deaths: "1",
//   },
//   {
//     area_name: "Bandra",
//     total_cases: "1",
//     total_active: "1",
//     total_recovered: "0",
//     total_deaths: "0",
//   },
//   {
//     area_name: "Govandi",
//     total_cases: "1",
//     total_active: "1",
//     total_recovered: "0",
//     total_deaths: "0",
//   },
//   {
//     area_name: "Pune",
//     total_cases: "0",
//     total_active: "0",
//     total_recovered: "0",
//     total_deaths: "",
//   },
// ];

// export default rowData;
