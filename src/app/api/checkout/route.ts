import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

export async function POST(req: NextRequest) {
  try {
    const origin = req.nextUrl?.origin || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    console.log('Using origin:', origin);

    const { product } = await req.json();
    console.log('Product received in API:', product);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
              images: [`${origin}${product.image}`], // Ensure full URL
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/store/success`,
      cancel_url: `${origin}/store/cancel`,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error: any) {
    console.error('Checkout API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
