export type Root = Root2[];

export interface Root2 {
  data: Data;
  kids: Kids;
}

export interface Data {
  "Identification number": string;
  Name: string;
  Gender: string;
  Risk: string;
  "Hair length": string;
  IQ: string;
  "Admission date": string;
  "Last breakdown": string;
  "Yearly fee": string;
  "Knows the Joker?": string;
}

export interface Kids {
  has_relatives?: HasRelatives;
}

export interface HasRelatives {
  records: Record[];
}

export interface Record {
  data: Data2;
  kids: Kids2;
}

export interface Data2 {
  "Relative ID": string;
  "Patient ID": string;
  "Is alive?": string;
  "Frequency of visits": string;
}

export interface Kids2 {
  has_phone?: HasPhone;
}

export interface HasPhone {
  records: Record2[];
}

export interface Record2 {
  data: Data3;
  kids: Kids3;
}

export interface Data3 {
  "Phone ID": string;
  "ID of the relative": string;
  Phone: string;
}

export interface Kids3 {}
