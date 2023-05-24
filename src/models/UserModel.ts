import { z } from "zod";

export enum UserRole {
  User = "user",
  Admin = "admin",
}

export enum BooleanDB {
  True = 1,
  false = 0,
}

export interface UserModel {
  id: number;
  profileImg?: FileList;
  username: string;
  password?: string;
  aboutMe?: string;
  role: UserRole;
  isActive: BooleanDB;
  isfollowed?: boolean;
  followersAmout: number;
  followingAmount: number;
  postsAmount: number;
}

export const userSchema = z.object({
  //   id: z.number().optional(),

  // profileImg: z
  //   .instanceof(FileList)
  //   // .refine(data => {
  //   //   data
  //   // })
  //   .optional(),

  username: z
    .string()
    .min(6, "Username required to be 6-20 chars long")
    .max(20, "Username required to be 6-20 chars long"),

  password: z
    .string()
    .min(8, "Password required to be 8-20 chars long")
    .max(20, "Password required to be 8-20 chars long"),

  aboutMe: z
    .string()
    .max(100, "About section can contain up to 100 chars")
    .optional(),
});

export type UserSchema = z.infer<typeof userSchema>;
