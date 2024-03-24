import { cartProductPrice } from "@/components/AppContext";
import Trash from "@/components/icons/Trash";
import Image from "next/image";

export default function CartProduct({ index, product, onRemove }) {
  return (
    <div className="flex items-center max-[321px]:grid max-[321px]:grid-cols-1 justify-center gap-4 border-b py-4">
      <div className="w-24 max-[321px]:w-full block">
        <img
          className="min-[321px]:max-w-24 w-full"
          src={product.image}
          alt={""}
        ></img>
      </div>
      <div className="grow">
        <h3 className="font-semibold">{product.name}</h3>
        {product.size && (
          <div className="text-sm">
            Size: <span>{product.size.name}</span>
          </div>
        )}
        {product.extras?.length > 0 && (
          <div className="text-sm text-gray-500">
            {product.extras.map((extra) => (
              <div key={extra.name}>
                {extra.name} ${extra.price}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text-lg font-semibold">${cartProductPrice(product)}</div>
      {!!onRemove && (
        <div className="ml-2">
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="p-2 hover:bg-red-500 hover:text-white"
          >
            <Trash />
          </button>
        </div>
      )}
    </div>
  );
}
