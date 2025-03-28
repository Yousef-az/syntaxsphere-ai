export interface ServiceResponse<T> {
    success: boolean;
    data?: T;
    error?: {
        status: number;
        message: string;
    };
}