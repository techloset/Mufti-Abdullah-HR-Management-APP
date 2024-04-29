export type HomeBoxProps = {
  iconSrc: string;
  title: string;
  totalCount: number;
  updateDate: string;
};

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  maritalStatus: string;
  gender: string;
  nationality: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  imageUrl: string;
  startDate: Date;
  employeeID?: number;
  userName?: string;
  employeeType?: string;
  emailAddress?: string;
  department?: string;
  designation?: string;
  workingDays?: [];
  joinDate?: Date;
  officeLocation?: string;
  appointmentLetter?: string;
  salarySlips?: string;
  relivingLetter?: string;
  experienceLetter?: string;
  stockID?: string;
  skypeID?: string;
  githubID?: string;
  id?: string;
  createdDate: Date;
};
export type FormProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export type DepartmentEmployeeIds = {
  [key: string]: string[];
};

export type User = {
  user: {
    email: string;
  };
};
export type Change = {
  target: {
    name: string;
    value: string;
  };
};
export type EmployeeData = {
  imageUrl?: string;
  userName?: string;
  designation?: string;
  employeeType?: string;
  joinDate?: string;
};
