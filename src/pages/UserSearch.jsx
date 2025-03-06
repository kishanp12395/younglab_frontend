import { useState, useEffect } from "react";

const UserSearch = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const url = import.meta.env.VITE_API_URL;

    const fetchUser = async () => {
        if (!name.trim()) {
            setError("Please enter a valid name.");
            setUser(null);
            setMessage("");
            return;
        }

        setError("");
        setUser(null);
        setMessage("");

        try {
            const response = await fetch(`${url}/?name=${name}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "User not found.");
            }

            setUser(data.user);
            setMessage("User details fetched successfully!");

            // Clear the input field after a short delay
            setTimeout(() => setName(""), 1000);
        } catch (err) {
            setError(err.message || "Failed to fetch user details.");
        }
    };

    // Automatically clear messages when name changes
    useEffect(() => {
        setError("");
    }, [name]);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow-sm">
                        <h2 className="mb-3 text-center">Search User</h2>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter user name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <button className="btn btn-primary" onClick={fetchUser}>Search</button>
                        </div>

                        {error && <p className="alert alert-danger text-center">{error}</p>}
                        {message && <p className="alert alert-success text-center">{message}</p>}

                        {user && (
                            <div className="mt-4">
                                <h3 className="text-center">User Details</h3>
                                <ul className="list-group">
                                    <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
                                    <li className="list-group-item"><strong>Age:</strong> {user.age}</li>
                                    <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSearch;
