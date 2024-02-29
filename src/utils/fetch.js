export const signup = async (username, email, password) => {
    const response = await fetch("https://localhost:5001/users/signup", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        })
    });

    const data = await response.json();
    console.log("data in fetch signpup", data);
};
export const login = async (username, password) => {
    const response = await fetch("https://localhost:5001/users/login", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    });

    const data = await response.json();
    console.log("data in fetch login", data);
};