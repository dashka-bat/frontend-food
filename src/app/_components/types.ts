export type CategoryType = {
  categoryName: any;
  _id: string;
};
export type foodType = {
  foodName: String;
  price: any;
  category: {
    categoryName: String;
  };
  image: any;
  ingerdients: String;
  _id: string;
};
