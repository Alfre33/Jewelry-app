
interface Props{
    title:string;
    size:string;
    color?:string;
}
export const Tittle = ({size,title,color}:Props) => {
  return (
    <h1 className={`mb-3 bg-gradient-to-r from-${color ?? 'bronce'}-600 to-${color ?? 'bronce'}-800 bg-clip-text text-transparent font-semibold text-${size} text-center`}>
     {title}
    </h1>
  );
};
