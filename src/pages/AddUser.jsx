import { useState, useEffect } from "react";

const AddUser = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const url = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const response = await fetch(`${url}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, age, email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to add user.");
            }

            setMessage("User added successfully!");
            setName("");
            setAge("");
            setEmail("");
        } catch (error) {
            setMessage("Error: Unable to connect to the server.");
        }
    };

    // Clear message after 1 second
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 3000);
            return () => clearTimeout(timer); // Cleanup timeout to avoid memory leaks
        }
    }, [message]);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow-sm">
                        <h2 className="text-center mb-3">Add User</h2>
                        {message && <p className="alert alert-info text-center">{message}</p>}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Age</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    value={age} 
                                    onChange={(e) => setAge(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Add User</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
