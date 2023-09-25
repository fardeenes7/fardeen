async function GrantToken() {
    const url = process.env.NEXT_PUBLIC_BKASH_URL + "token/grant";
    console.log(url);
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            username: process.env.NEXT_PUBLIC_BKASH_USERNAME,
            password: process.env.NEXT_PUBLIC_BKASH_PASSWORD,
        },
        body: JSON.stringify({
            app_key: process.env.NEXT_PUBLIC_BKASH_APP_KEY,
            app_secret: process.env.NEXT_PUBLIC_BKASH_APP_SECRET,
        }),
    });
    const data = await res.json();
    console.log(data);
    return data;
}

export async function CreatePayment() {
    const token = await GrantToken();
    const url = process.env.NEXT_PUBLIC_BKASH_URL + "create";
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: "Bearer " + token.id_token,
            "X-APP-Key": process.env.NEXT_PUBLIC_BKASH_APP_KEY,
        },
        body: JSON.stringify({
            mode: "0011",
            payerReference: "01700000000",
            callbackURL: "localhost:3000",
            amount: "100",
            currency: "BDT",
            intent: "sale",
            merchantInvoiceNumber: "123456",
        }),
    });
    const data = await res.json();
    console.log(data);
    //return data and token together
    return {
        data: data,
        token: token,
    };
}




