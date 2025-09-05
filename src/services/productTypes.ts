interface ProductDimensions {
	width: number;
	height: number;
	depth: number;
}

interface ProductMeta {
	createdAt: Date;
	updatedAt: Date;
	b;
	barcode: string;
	qrCode: string;
}

interface Rating {
	comment: string;
	date: Date;
	rating: number;
	reviewerEmail: string;
	reviewerName: string;
}

export interface ProductDetails {
	availabilityStatus: string;
	brand: string;
	category: string;
	description: string;
	dimensions: ProductDimensions;
	discountPercentage: number;
	id: number;
	images: string[];
	meta: ProductMeta;
	minimumOrderQuantity: number;
	price: number;
	rating: number;
	reviews: Rating;
	shippingInformation: string;
	sku: string;
	stock: number;
	tags: string[];
	thumbnail: string;
	title: string;
	warrantyInformation: string;
	weight: number;
}
