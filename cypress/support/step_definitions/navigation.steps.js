import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/login.page.js";
import RegisterPage from "../pages/register.page.js";
import HomePage from "../pages/home.page.js";

Given("the user is on the sign-in page", () => {
  LoginPage.visit();
});
Given("the user is on the registration page", () => {
  RegisterPage.visit();
});
Given("the user is on the home page", () => {
  HomePage.visit();
});
