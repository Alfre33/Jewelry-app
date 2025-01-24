"use client";
import { createUpdateProduct } from "@/actions/jawels/create-update-jawel";
import { Product } from "@/interfaces/product.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registrationJawelSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().nonempty("El nombre es obligatorio"),
  price: z.string().nonempty("El precio es oblligatorio"),
  type: z.string().nonempty("El tipo es obligatorio"),
  gender: z.string().nonempty("El género es obligatorio"),
  material: z.string().nonempty("El material es obligatorio"),
  description: z.string().nonempty("La descripción es obligatoria"),
  inStock: z.string().nonempty("El stock es obligatorio"),
  images: z
    .array(
      z
        .instanceof(File)
        .refine(
          (file) =>
            ["image/png", "image/jpeg", "image/gif","image/jpg"].includes(file.type),
          "Solo se permiten imágenes"
        )
    )
    .min(1, "Debes subir al menos una imagen")
    .optional(),
});

export type JawelFormData = z.infer<typeof registrationJawelSchema>;
interface Props {
  initialData?: Product | null;
}
export const CreateProductFormi= ({ initialData }: Props) => {
  // Observa las imágenes en el estado del formulario

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<JawelFormData>({
    resolver: zodResolver(registrationJawelSchema),
    mode: "onSubmit",
    defaultValues: {
      description:initialData?.description ??'',
      gender:initialData?.gender ??'',
      id:initialData?.id ??'',
      inStock:initialData?.inStock.toString() ,	
      material:initialData?.material ??'',
      name:initialData?.name ??'',
      price:initialData?.price.toString()?? '',
      type:initialData?.type ?? ''
    }
  });
  const images = watch("images") || [];
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const onSubmit = async (data: JawelFormData) => {
    console.log(data);
    const resp=await createUpdateProduct(data)
    console.log(resp)
  };

  // Maneja la carga de múltiples imágenes
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) =>
      ["image/png", "image/jpeg", "image/gif"].includes(file.type)
    );

    // Actualiza el estado de imágenes
    setValue("images", [...images, ...validFiles]);
    setPreviewImages([
      ...previewImages,
      ...validFiles.map((file) => URL.createObjectURL(file)),
    ]);
  };

  // Elimina una imagen específica
  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreviews = previewImages.filter((_, i) => i !== index);

    setValue("images", updatedImages);
    setPreviewImages(updatedPreviews);
  };

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Nombre
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-bronce-600">
                    <input
                      type="text"
                      id="name"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 
              focus:outline focus:outline-0 sm:text-sm/6"
                      placeholder="janesmith"
                      {...register("name", { required: true })}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    {...register("description", { required: true })}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-bronce-600 sm:text-sm/6"
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500">{errors.description.message}</p>
                  )}
                </div>
                <p className="mt-3 text-sm/6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    {...register("price", { required: true })}
                    id="price"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base 
            text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 
            focus:-outline-offset-2 focus:outline-bronce-600 sm:text-sm/6"
                  />
                  {errors.price && (
                    <p className="text-red-500">{errors.price.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Stock
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    {...register("inStock", { required: true })}
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base 
            text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2
        focus:outline-bronce-600 sm:text-sm/6"
                  />
                  {errors.inStock && (
                    <p className="text-red-500">{errors.inStock.message}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Caterogoria
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="type"
                    {...register("type", { required: true })}
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-bronce-600 sm:text-sm/6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  {errors.type && (
                    <p className="text-red-500">{errors.type.message}</p>
                  )}
                  <svg
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Genero
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    {...register("gender", { required: true })}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-bronce-600 sm:text-sm/6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500">{errors.gender.message}</p>
                  )}
                  <svg
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="col-span-full">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 space-y-10">
                    <fieldset>
                      <legend className="text-sm/6 font-semibold text-gray-900">
                        Material de fabricacion
                      </legend>
                      <p className="mt-1 text-sm/6 text-gray-600">
                        Selecciona el tipo de material del que esta hecho la
                        joya
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            {...register("material", { required: true })}
                            type="radio"
                            checked
                            className="relative size-4 appearance-none rounded-full border 
              border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-bronce-600 
              checked:bg-bronce-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronce-600 
              disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto 
              forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                          />
                          <label className="block text-sm/6 font-medium text-gray-900">
                            Plata
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            {...register("material", { required: true })}
                            type="radio"
                            className="relative size-4 appearance-none 
              rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white 
              checked:border-bronce-600 checked:bg-bronce-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-bronce-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 
              forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                          />
                          <label className="block text-sm/6 font-medium text-gray-900">
                            Oro
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <label className="block text-sm/6 font-medium text-gray-900">
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg
                      className="mx-auto size-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label className="relative cursor-pointer rounded-md bg-white font-semibold text-bronce-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-bronce-600 focus-within:ring-offset-2 hover:text-bronce-500">
                        <span>Upload a file</span>
                        <input
                          onChange={handleImageUpload}
                          multiple
                          accept="image/*"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {previewImages.map((src, index) => (
            <div key={index} className="relative w-36 h-36">
              <Image
                src={src}
                width={60}
                height={60}
                alt={`Preview ${index}`}
                className="h-32 w-full object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 py-1 text-xs hover:scale-110"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-bronce-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bronce-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronce-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};
