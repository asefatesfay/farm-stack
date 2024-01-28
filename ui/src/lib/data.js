// const users = [
//   { id: 1, name: "Jane Doe" },
//   { id: 2, name: "James Rudolph" },
//   { id: 3, name: "John Smith" },
//   { id: 4, name: "Foydor Dostoyvsky" },
//   { id: 5, name: "George Orwell" },
// ];

// const posts = [
//   {
//     userId: 1,
//     title: "Crime and Punishment",
//     id: 1,
//     body: "Lorem Ipsum Lorem Ipsum ....",
//   },
//   {
//     userId: 2,
//     title: "Winter is coming",
//     id: 2,
//     body: "Lorem Ipsum Lorem Ipsum ....",
//   },
//   { userId: 3, title: "1984", id: 3, body: "Lorem Ipsum Lorem Ipsum ...." },
//   {
//     userId: 4,
//     title: "Rise and Kill first",
//     id: 4,
//     body: "Lorem Ipsum Lorem Ipsum ....",
//   },
//   {
//     userId: 5,
//     title: "Brothers of Karamazov",
//     id: 5,
//     body: "Lorem Ipsum Lorem Ipsum ....",
//   },
//   {
//     userId: 1,
//     title: "The Idiot",
//     id: 6,
//     body: "Lorem Ipsum Lorem Ipsum ....",
//   },
// ];

import {Post, User} from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
  connectToDb();
  try {
    const posts = await Post.find();
    return posts;
  } catch(error) {
    throw new Error(error);
  }
};

export const getUsers = async () => {
  connectToDb();
  try {
    const users = await User.find();
    return users;
  } catch(error) {
    throw new Error(error);
  }
};

export const getUser = async (id) => {
  connectToDb();
  try {
    const user = await User.findById(id);
    return user;
  } catch(error) {
    throw new Error(error);
  }
};

export const getPost = async (slug) => {
  connectToDb();
  try {
    const post = await Post.findOne({slug});
    return post;
  } catch(error) {
    throw new Error(error);
  }
};
