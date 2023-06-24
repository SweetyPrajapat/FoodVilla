export function filterData(searchText, restaurants) {
  const filterData1 = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  //console.log(restaurants);
  // console.log(filterData1);
  return filterData1;
}
