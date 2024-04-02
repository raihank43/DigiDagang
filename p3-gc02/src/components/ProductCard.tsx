export default function ProductCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/2/201de609-0cb0-4210-b6fc-a559b588168c.png"
        alt="nama produk"
        className="w-full h-48 object-cover rounded"
      />
      <h4 className="mt-4 font-bold text-neutral-950">Product Name</h4>
      <p className="mt-2 text-lime-800">Rp100.000</p>
    </div>
  );
}
