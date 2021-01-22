export interface IAddress {
  city: string;
  geo: {
    lat: string;
    lng: string;
  };
  street: string;
  suite: string;
  zipcode: string;
}

export interface ICompany {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface IUser {
  address: IAddress;
  company: ICompany;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface ITodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
