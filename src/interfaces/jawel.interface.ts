import {  Gender, JewelType, Material } from "@prisma/client";

export interface Jawel{
    JewelImage: {
        id: number;
        url: string;
        jewelId: string;
    }[];
    id?: string;
    name: string;
    price: number;
    type: JewelType;
    gender: Gender
    material: Material;
    description: string;
    inStock: number;
    slug: string;
}