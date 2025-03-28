import type { ServiceResponse } from '$lib/types/common';

const API_BASE_URL = 'https://api.example.com/v1'; // Replace with actual API endpoint

export async function fetchWithAuth<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ServiceResponse<T>> {
    try {
        // Get the token from local storage
        const token = localStorage.getItem('auth_token');

        const headers = {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        };

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return {
                success: false,
                error: {
                    status: response.status,
                    message: errorData.message || 'An error occurred',
                },
            };
        }

        const data = await response.json();

        return {
            success: true,
            data,
        };
    } catch (error) {
        return {
            success: false,
            error: {
                status: 0,
                message: error instanceof Error ? error.message : 'Network error',
            },
        };
    }
}