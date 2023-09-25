"use client";
export const handlePayment = async (form) => {
    console.log("handling");
    console.log(form);
    console.log("handling");
    // const res = await fetch("/api/pay/bkash/create", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });
    // const data = await res.json();
    // return data;
};

// export const bkashPayment = async (form) => {
//     const paymentData = await handlePayment(form);
//     setPayment(paymentData);
//     if (paymentData) {
//         setLoading(false);
//         localStorage.setItem("bkash_id_token", paymentData.token.id_token);
//         localStorage.setItem(
//             "bkash_refresh_token",
//             paymentData.token.refresh_token
//         );
//         window.location.href = paymentData.data.bkashURL;
//     }
// };

export default async function bkashPayment(form) {
    console.log(form);
    const paymentData = await handlePayment(form);
    return paymentData;
}
