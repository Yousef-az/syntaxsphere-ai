export interface SlackChannel {
    id: string;
    name: string;
    isPrivate: boolean;
    memberCount: number;
}

export interface SlackMessage {
    id: string;
    userId: string;
    userName: string;
    text: string;
    timestamp: string;
    reactions?: Array<{
        name: string;
        count: number;
        users: string[];
    }>;
}

export interface ZohoContact {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
}

export interface SalesforceOpportunity {
    id: string;
    name: string;
    amount: number;
    stage: string;
    closeDate: string;
    probability: number;
}