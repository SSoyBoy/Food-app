import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({ detail, onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;
  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div
      className="bg-gray-200 w-full p-4 rounded-lg text-center 
      group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all"
    >
      <div
        className="cursor-pointer select-none"
        onDoubleClick={() => detail()}
      >
        <div className="text-center">
          <img src={image} className="mx-auto h-44 w-44" alt="pizza" />
        </div>
        <h4 className="font-semibold text-xl my-3 truncate">{name}</h4>
        <p className="text-gray-500 text-sm line-clamp-3 truncate">
          {description}
        </p>
      </div>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}
