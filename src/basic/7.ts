type Page = {
  title: string;
  likes: number;
  users: string[];
  status: "open" | "closed";
  metadata?: {
    createdOn: Date;
    updatedOn: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  users: ["Max", "Anton", "Nikita"],
  status: "open",
  metadata: {
    createdOn: new Date("2021-01-01"),
    updatedOn: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  users: ["Alex"],
  status: "closed",
};
