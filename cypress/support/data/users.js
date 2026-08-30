export const SEEDED_USER = {
  email: "customer@practicesoftwaretesting.com",
  password: "welcome01",
};

export const newUser = () => ({
  firstName: "Anna",
  lastName: "Test",
  dob: "1991-01-19",
  country: "US",
  postalCode: "44000",
  houseNumber: "44",
  street: "124th Ave W",
  city: "Illinois City",
  state: "Illinois",
  phone: "0501234567",
  email: `anna.test.${Date.now()}@example.com`,
  password: `Tst!${Date.now().toString().slice(-6)}Qz`,
});
