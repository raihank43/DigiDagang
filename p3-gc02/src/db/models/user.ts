import { ObjectId } from "mongodb";
import { db } from "../config";

type Users = {
    _id: ObjectId
    name: string
    email: string
    password: string
}

export default class User {
  static userCollection() {
    return db.collection<Users>("users");
  }

  static async findAll () {
    return this.userCollection().find().toArray()

  }
}
