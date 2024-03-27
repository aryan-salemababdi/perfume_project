import CartPage from '@/components/Molecule/CartPage/CartPage'

export default async function Home() {

  const res = await fetch(`${process.env.BASE_URL}/products`, {
    cache: "no-store",
  });
  const data = await res.json()

  return (
    <main suppressHydrationWarning={true}>
      <CartPage products={data} />
    </main>
  )
}
