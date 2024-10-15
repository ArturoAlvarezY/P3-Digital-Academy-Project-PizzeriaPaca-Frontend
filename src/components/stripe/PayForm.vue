<template>
    <div>
        <h1>Checkout</h1>
        <div ref="embeddedCheckout"></div>
    </div>
</template>

<script setup>
import { loadStripe } from '@stripe/stripe-js';
import { onMounted, ref } from 'vue';
import axios from 'axios';

//Hablar con el equipo del carrito para meterle defineProps al productId, para poder acceder 

const props = defineProps(['productId']);
const embeddedCheckout = ref(null);
const clientSecret = ref(null);  

onMounted(async () => {
  try {
    const response = await axios.post(`http://localhost:8080/api/v1/payment/secure/create-checkout-session/${props.productId}`);
    clientSecret.value = response.data;

    const stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY);

    if (stripe && clientSecret.value) {
      const embeddedCheckoutInstance = await stripe.initEmbeddedCheckout({
        clientSecret: clientSecret.value,
        appearance: {
          theme: 'stripe',
        },
      });

      embeddedCheckoutInstance.mount(embeddedCheckout.value);
    }
  } catch (error) {
    console.error("Error fetching clientSecret: ", error);
  }
});
</script>
