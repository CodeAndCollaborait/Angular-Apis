export class UserModel {
  id: number = 0;
  name: string = '';
  username: string = '';
  email: string = '';
  address:
    | {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
          lat: number;
          lng: number;
        };
      }
    | undefined;
  phone: number = 0;
  website: string = '';
  company:
    | {
        name: string;
        catchPhrase: string;
        bs: string;
      }
    | undefined;
}
