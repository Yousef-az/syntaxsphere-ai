import { fetchWithAuth } from '../api';
import type { ServiceResponse } from '$lib/types/common';
import type { SlackChannel, SlackMessage } from '$lib/types/integrations';

export async function getChannels(): Promise<ServiceResponse<SlackChannel[]>> {
    return fetchWithAuth<SlackChannel[]>('/integrations/slack/channels');
}

export async function getMessages(channelId: string): Promise<ServiceResponse<SlackMessage[]>> {
    return fetchWithAuth<SlackMessage[]>(`/integrations/slack/channels/${channelId}/messages`);
}

export async function sendMessage(channelId: string, message: string): Promise<ServiceResponse<SlackMessage>> {
    return fetchWithAuth<SlackMessage>(`/integrations/slack/channels/${channelId}/messages`, {
        method: 'POST',
        body: JSON.stringify({ message }),
    });
}

export async function connectSlack(code: string): Promise<ServiceResponse<{ success: boolean }>> {
    return fetchWithAuth<{ success: boolean }>('/integrations/slack/connect', {
        method: 'POST',
        body: JSON.stringify({ code }),
    });
}