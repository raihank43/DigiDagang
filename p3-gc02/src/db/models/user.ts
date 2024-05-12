import { ObjectId } from "mongodb";
import { db } from "../config";
import bcryptjs from "bcryptjs";
import { z } from "zod";

// type Users = {
//   _id: ObjectId;
//   name: string;
//   username: string;
//   email: string;
//   password: string;
// };

// type NewUserInput = Users;

const userSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  username: z.string().min(5),
  password: z.string().min(5),
});

type Users = z.infer<typeof userSchema>;

export default class User {
  static userCollection() {
    return db.collection<Users>("users");
  }

  static async findAll() {
    return this.userCollection().find().toArray();
  }

  static async create(newUser: Users) {
    const newUserParsed = userSchema.parse(newUser);

    console.log(newUserParsed);

    const isEmailUniqueValid = await this.userCollection().findOne({
      email: newUser.email,
    });
    const isUsernameUniqueValid = await this.userCollection().findOne({
      username: newUser.username,
    });

    if (isEmailUniqueValid) {
      throw new Error("Email must be unique.");
    }

    if (isUsernameUniqueValid) {
      throw new Error("Username must be unique.");
    }

    return await this.userCollection().insertOne({
      ...newUser,
      password: await bcryptjs.hash(newUser.password, 10),
    });
  }

  static async getUserByEmail(email: string) {
    const userCollection = this.userCollection();

    const user = await userCollection.findOne({ email: email })

    return user;
  }
}
