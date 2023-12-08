const launchRazorpay = () => {
    let options = {
        key: "rzp_test_9Zc0lQjf6OHKJy",
        image: "https://taxadvisor.net.in/wp-content/uploads/2021/06/rp-1-2048x433.png",
        amount: 500*100,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Ticket Purchase on Rental",
        handler: ()=>{
            alert("Payment Successfull")
        },
        theme: {color:"#f84464"}
    };

    let razorpay = new window.Razorpay(options);
    razorpay.open();
};

export default launchRazorpay;