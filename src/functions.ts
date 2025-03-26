import { UserDetails } from "./types/index";

export function sayHello(userDetails: UserDetails) {
  console.log(`Hello ${userDetails.firstName}`);

  if (userDetails.lastName) {
    console.log(`Your last name is ${userDetails.lastName}`);
  }

  if (userDetails.age) {
    console.log(`You are ${userDetails.age} years old`);
  }
}
