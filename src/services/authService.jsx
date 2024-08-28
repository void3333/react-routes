export const login = async (username, password) => {
    try {
        const response = await fetch('https://34903e44-2bca-47dc-b1aa-2be208906a61.mock.pstmn.io/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });

        if (!response.ok) {
            const errorText = await response.text();
            new Error(`Login failed: ${errorText}`);
        }

        const data = await response.json();

        if (!data.token) {
            new Error('No token found in response');
        }

        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

export const logout = () => {
    localStorage.removeItem('token');
};
