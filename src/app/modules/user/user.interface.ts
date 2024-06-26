import { Model } from 'mongoose';
import { roleEnum } from './user.constant';

export interface TUser {
  name: string;
  email: string;
  password: string;
  conformPassword?: string;
  division: string;
  district: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  role?: 'admin' | 'volunteer' | 'user';
  status?: 'in-progress' | 'blocked';
  isDeleted?: boolean;
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof roleEnum;
