interface Person {
  address: {
    address: string;
    city: string;
    state: string;
    stateCode:string;
    postalCode: string;
  };
  age: number;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  birthDate: string;
  bloodGroup:string;
  company: {
    department: string;
    name: string;
    title: string;
  };
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: { color: "Brown"; type: "Curly" };
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  role: string;
  ssn: string
  university: string;
  userAgent: string;
  username: string;
  weight: number;
}
