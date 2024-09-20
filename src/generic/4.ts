type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function saveUserDetails(partialData: Partial<User>) {
}

saveUserDetails({
  email: "user@mail.com",
  password: "password123",
});
