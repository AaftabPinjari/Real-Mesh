import Swal from 'sweetalert2'

function Contact() {



    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);


        formData.append("access_key", "d1a411dc-f1e5-44a5-be1b-b77c95ce60a7");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Thank You !",
                text: "You Submitted The Details",
                icon: "success"
            });
        }
    };

    return (
        <section
            className="min-h-screen flex flex-col items-center justify-evenly
        ">
            <h1 className="text-lg font-semibold">Enter Your Order Details Here</h1>
            <form className="flex text-black flex-col gap-3" onSubmit={onSubmit}>
                <label>Enter Your Name:</label>
                <input required placeholder="Name" className="max-w-96 px-3 py-2 border border-gray-400" type="text" name="name" />
                <label>Enter Your Phone Number:</label>
                <input required placeholder="Phone No." className="px-3 py-2 border border-gray-400" type="number" maxLength={10} name="Phone Number" />
                <label>Enter Your Order Details:</label>
                <textarea required placeholder="Order Details" className="px-3 min-h-36  py-2 border outline-none border-gray-400" name="Order Details"></textarea>
                <button className="rounded-sm bg-black text-white px-4 py-2" type="submit">Submit Details</button>
            </form>

        </section>
    )
}

export default Contact