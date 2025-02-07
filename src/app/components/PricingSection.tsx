// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: 0,
      billing: "month",
      yearlyPrice: 0,
    },
    {
      name: "Plus",
      price: 28,
      billing: "month",
      yearlyPrice: 336,
    },
    {
      name: "Max",
      price: 48,
      billing: "month",
      yearlyPrice: 576,
    },
    {
      name: "Generative",
      price: 96,
      billing: "month",
      yearlyPrice: 1152,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="border rounded-lg shadow-sm">
            <div>
              <div className="text-xl font-semibold">{plan.name}</div>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              {plan.yearlyPrice > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  Billed ${plan.yearlyPrice} yearly
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
