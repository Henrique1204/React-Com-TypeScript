export enum StatusSaleEnum {
	PAID = 'pago',
	PROCESSING = 'processando',
	FAIL = 'falha',
}

export enum PaymentMethod {
	BANK_PAYMENT_SLIP = 'boleto',
	PIX = 'pix',
	CARD = 'cartao',
}

export type Sale = {
	id: string;
	name: string;
	price: number;
	status: StatusSaleEnum;
	payment: PaymentMethod;
	installments: number | null;
	data: string;
};

export type SaleContextState = {
	loading: boolean;
	error: string | null;
	data: Sale[] | null;
	startDate: string;
	endDate: string;
	setStartDate: React.Dispatch<React.SetStateAction<string>>;
	setEndDate: React.Dispatch<React.SetStateAction<string>>;
};

export type PartialSaleContextState = Partial<SaleContextState>;
