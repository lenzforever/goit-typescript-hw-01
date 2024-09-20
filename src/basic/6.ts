interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "mango@example.com",
  address: {
    city: "Los Angeles",
    country: "USA",
  },
};

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
