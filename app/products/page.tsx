type Props = {
  searchParams: Promise<{
    sort?: string
  }>
}

const products = [
  { id: 1, name: "sneaker", price: 100, image: "", description: "A comfy sneaker" },
  { id: 2, name: "shoe", price: 150, image: "", description: "A smart shoe" },
  { id: 3, name: "boot", price: 200, image: "", description: "A sturdy boot" },
  { id: 4, name: "sandal", price: 120, image: "", description: "A cool sandal" },
  { id: 5, name: "slippers", price: 150, image: "", description: "A soft slipper" },
]

export default async function Page({ searchParams }: Props) {
  const { sort = "name" } = await searchParams;

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "name") {
      return a.name.localeCompare(b.name);
    } else if (sort === "price") {
      return a.price - b.price;
    } else {
      return a.id - b.id;
    }
  });

  return (
    <div>
      <h1>Products</h1>
      <p>Sort by: {sort}</p>

      <div style={{ marginBottom: 20 }}>
        <a href="/products?sort=name" style={{ marginRight: 10 }}>
          Name
        </a>

        <a href="/products?sort=price" style={{ marginRight: 10 }}>
          Price
        </a>

        <a href="/products?sort=id">
          ID
        </a>
      </div>

      {sortedProducts.map((product) => (
        <div key={product.id} style={{ marginBottom: 20 }}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}