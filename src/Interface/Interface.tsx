export interface ICardData {
  price: string | number;
  desc: string;
  iconColor: string;
  pointer?: string;
}

export interface IOfficeBudgetData {
  ordinalNumber: string;
  description: string;
  amount: string;
  actualAmount: string;
  varianceAmount: string;
  date: string;
}

export interface IStaff {
  id: number | string;
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
  designationId: number | string;
  roleId: number | string;
  email: string;
}
export interface IPaymentVaucher {
  subject: string;
  date: string;
  preparedBy: number;
  sendTo: number;
  accountName: string;
  accountNumber: number;
  bankName: string;
  items: {
    clss: string;
    desc: string;
    count: number;
    unitPrice: number;
    VAT: number;
    WHT: number;
  }[];
}


