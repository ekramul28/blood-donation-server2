export type TUser = {
  name: string;
  email: string;
  password: string;
  conformPassword: string;
  division: string;
  district: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  role?: 'admin' | 'volunteer' | 'user';
  status?: 'in-progress' | 'blocked';
  isDeleted?: boolean;
};
