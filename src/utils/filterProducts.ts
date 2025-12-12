import type { IProductsType } from "../types/types";
import { filters } from "./arrays";

const toLowerMap = (arr?: string[]) => arr?.map((v) => v.toLowerCase()) ?? [];
export type ActiveFilters = Record<string, string[]>;
export const getFiltersFromParams = (params: URLSearchParams): ActiveFilters => {
    const obj: ActiveFilters = {};
    params.forEach((value, key) => {
        (obj[key] ??= []).push(value);
    });
    return obj;
};


export const filterProducts = (products: IProductsType[], activeFilters: ActiveFilters) => {
    let result = [...products];

    const brandFilter = toLowerMap(activeFilters.brand);
    const categoryFilter = toLowerMap(activeFilters.category);
    const typeFilter = toLowerMap(activeFilters.type);
    const sizeFilter = toLowerMap(activeFilters.size);
    const colorFilter = toLowerMap(activeFilters.color);
    const sortFilter = activeFilters.sortby?.[0];

    // BRAND
    if (brandFilter.length) {
        result = result.filter((p) => brandFilter.includes(p.brand.toLowerCase()));
    }

    // CATEGORY
    if (categoryFilter.length) {
        result = result.filter((p) => categoryFilter.includes(p.category.toLowerCase()));
    }

    // TYPE
    if (typeFilter.length) {
        result = result.filter((p) => typeFilter.includes(p.type.toLowerCase()));
    }

    // SIZE
    if (sizeFilter.length) {
        result = result.filter((p) =>
            p.size.some((s) => sizeFilter.includes(s.toLowerCase()))
        );
    }

    // COLOR
    if (colorFilter.length) {
        const colorHexFilter = colorFilter
            .map((name) => filters.colors.find((c) => c.label.toLowerCase() === name)?.color.toLowerCase())
            .filter(Boolean) as string[];

        result = result.filter((p) =>
            p.colors.some((color) => colorHexFilter.includes(color.toLowerCase()))
        );
    }

    // SORTING
    if (sortFilter) {
        const sortMap: Record<string, (a: IProductsType, b: IProductsType) => number> = {
            "rating(h-l)": (a, b) => b.rating - a.rating,
            "rating(l-h)": (a, b) => a.rating - b.rating,
            "price(h-l)": (a, b) => b.price - a.price,
            "price(l-h)": (a, b) => a.price - b.price,
            "newest": (a, b) => Number(b.isNew) - Number(a.isNew)
        };

        const sorter = sortMap[sortFilter.toLowerCase()];
        if (sorter) result.sort(sorter);
    }

    return result;
};
