import { ObjectId } from "mongodb";
import { db } from "../config";

type Users = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

type NewUserInput = Users;

export default class User {
  static userCollection() {
    return db.collection<Users>("users");
  }

  static async findAll() {
    return this.userCollection().find().toArray();
  }

  static async create(newUser: NewUserInput) {
    return await this.userCollection().insertOne(newUser);
  }
}
