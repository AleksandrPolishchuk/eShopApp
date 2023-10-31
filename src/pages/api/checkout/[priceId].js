export default async function handler(req, res) {
  const { priceId } = req.query;

  await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${SITE_URL}/success`,
    test_url: `${SITE_URL}/test`,
  });
}
