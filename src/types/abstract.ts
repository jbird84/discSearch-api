import { FilterQuery, Model, PopulateOptions, QueryOptions } from "mongoose";

export interface IBase {
	created_at: Date;
	updated_at: Date;
}

export interface IDisc {
	id: string;
	name: string;
	brand: string;
	category: string;
	speed: string;
	glide: string;
	turn: string;
	fade: string;
	stability: string;
	link: string;
	pic: string;
	name_slug: string;
	brand_slug: string;
	category_slug: string;
	stability_slug: string;
	color: string;
	background_color: string;
}

export interface IDiscCollections {
	discCollection: HTMLCollectionOf<Element>;
	putterCollection: HTMLCollectionOf<Element>;
}

export interface IBaseModel<T extends IBase = IBase> extends Model<T> {
	assertFindOne(filter?: FilterQuery<T>, options?: Options<T>, projection?: Projection): Promise<T>;
	assertFind(filter?: FilterQuery<T>, options?: Options<T>, projection?: Projection): Promise<T[]>;
	createOrUpdate(filter: FilterQuery<T>, doc: Partial<T>): Promise<T>;
	assertExists(filter: FilterQuery<T>, options?: Options<T>): Promise<void>;
	getCount(filter: FilterQuery<T>, options?: Options<T>): Promise<number>;
}

interface IDiscXt extends IBase, IDisc {}

export type IDiscModel = IBaseModel<IDiscXt>;

export type Projection = Record<string, 0 | 1>;

export interface Options<T extends IBase = IBase> extends QueryOptions {
	sort?: {
		// eslint-disable-next-line no-unused-vars
		[k in keyof Partial<T>]: 1 | -1 | number;
	};
	populate?: PopulateOptions[];
	limit?: number;
	skip?: number;
	new?: boolean;
}

export type DiscFilterRegex = { $regex: string; $options: string };
export interface IDiscFilter {
	id?: string;
	name_slug?: DiscFilterRegex;
	brand_slug?: DiscFilterRegex;
	category_slug?: DiscFilterRegex;
	stability_slug?: string;
	speed?: string;
	glide?: string;
	turn?: string;
	fade?: string;
}
