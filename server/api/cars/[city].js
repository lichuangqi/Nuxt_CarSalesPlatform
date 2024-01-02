import cars from "@/data/cars.json";
export default defineEventHandler((event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);
  let filteredCar = cars;
  filteredCar = filteredCar.filter((car) => {
    return car.city.toLowerCase() === city.toLowerCase();
  });
  if (make) {
    filteredCar = filteredCar.filter((car) => {
      return car.make.toLowerCase() === make.toLowerCase();
    });
  }
  if (minPrice) {
    filteredCar = filteredCar.filter((car) => {
      return car.price >= parseInt(minPrice);
    });
  }
  if (maxPrice) {
    filteredCar = filteredCar.filter((car) => {
      return car.price <= parseInt(maxPrice);
    });
  }
  return filteredCar;
});
