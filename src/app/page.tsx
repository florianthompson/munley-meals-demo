import Image from "next/image";

const meals = [
  { name: "Hawaiian Bowl", image: "/meals/meal-1.png", price: "$13.95" },
  { name: "Buffalo Chicken Wrap", image: "/meals/meal-2.jpg", price: "$13.95" },
  { name: "Chicken Parm", image: "/meals/meal-3.jpg", price: "$13.95" },
  { name: "Chicken Quesadilla", image: "/meals/meal-4.png", price: "$13.95" },
  { name: "Sliced Sirloin", image: "/meals/meal-5.png", price: "$13.95" },
  { name: "Taco Bowl", image: "/meals/meal-6.jpg", price: "$13.95" },
  { name: "Penne with Meatballs", image: "/meals/meal-7.jpg", price: "$14.95" },
  { name: "Surf and Turf", image: "/meals/meal-8.jpg", price: "$14.95" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Demo Concept</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Personalized Meals, Delivered</h1>
        <p className="max-w-2xl text-neutral-600">
          A portfolio demo inspired by modern meal delivery storefronts. Clean product cards, clear pricing, and a conversion-first layout.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {meals.map((meal) => (
            <article key={meal.name} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="relative aspect-square">
                <Image src={meal.image} alt={meal.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h2 className="font-semibold">{meal.name}</h2>
                <p className="mt-1 text-sm text-neutral-500">Chef prepared • High protein</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold">{meal.price}</span>
                  <button className="rounded-full bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white">Add</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
