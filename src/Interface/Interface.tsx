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
