export interface Category {
    id: number;
    categoryName: string | null,
    categoryDescription: string | null,
    categoryColor: string | null,
}

export interface CategoryState  {
    categories: Category[] ;
}