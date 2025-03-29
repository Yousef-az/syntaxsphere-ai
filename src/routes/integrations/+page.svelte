<script lang="ts">
    import { fade } from 'svelte/transition';
    import IntegrationCard from '$lib/components/integrations/IntegrationCard.svelte';
    import AddIntegrationCard from '$lib/components/integrations/AddIntegrationCard.svelte';

    // Integration data
    const integrations = [
        {
            id: 'slack',
            name: 'Slack',
            icon: '/icons/slack.svg',
            status: 'connected',
            lastSync: '5 min ago',
            features: ['Messaging', 'Channels', 'Users', 'Files'],
            description: 'Access Slack conversations, channels and files directly in your command center.'
        },
        {
            id: 'zoho',
            name: 'Zoho',
            icon: '/icons/zoho.svg',
            status: 'connected',
            lastSync: '17 min ago',
            features: ['CRM', 'Support', 'Projects', 'Invoices'],
            description: 'Manage your customer relationships, support tickets and projects in one place.'
        },
        {
            id: 'salesforce',
            name: 'Salesforce',
            icon: '/icons/salesforce.svg',
            status: 'connected',
            lastSync: '43 min ago',
            features: ['Leads', 'Opportunities', 'Accounts', 'Reports'],
            description: 'Access your Salesforce CRM data including leads, opportunities and accounts.'
        }
    ];

    const availableIntegrations = [
        {
            id: 'gmail',
            name: 'Gmail',
            icon: '/icons/gmail.svg',
            status: 'available',
            features: ['Email', 'Labels', 'Contacts', 'Attachments'],
            description: 'Integrate your Gmail account to access emails and contacts.'
        },
        {
            id: 'stripe',
            name: 'Stripe',
            icon: '/icons/stripe.svg',
            status: 'available',
            features: ['Payments', 'Invoices', 'Customers', 'Subscriptions'],
            description: 'Connect your Stripe account to track payments and manage customers.'
        },
        {
            id: 'github',
            name: 'GitHub',
            icon: '/icons/github.svg',
            status: 'available',
            features: ['Repositories', 'Issues', 'Pull Requests', 'Actions'],
            description: 'Access GitHub repositories, issues and pull requests.'
        }
    ];
</script>

<div class="integrations">
    <header class="integrations-header">
        <h1 in:fade={{ duration: 600, delay: 100 }}>Integrations</h1>
        <p class="subtitle">Manage your connected platforms and add new integrations</p>
    </header>

    <div class="section">
        <h2 class="section-title" in:fade={{ duration: 600, delay: 200 }}>Active Integrations</h2>
        <div class="integrations-grid">
            {#each integrations as integration, i}
                <IntegrationCard
                        integration={integration}
                        index={i}
                />
            {/each}
        </div>
    </div>

    <div class="section">
        <h2 class="section-title" in:fade={{ duration: 600, delay: 300 }}>Available Integrations</h2>
        <div class="integrations-grid">
            {#each availableIntegrations as integration, i}
                <AddIntegrationCard
                        integration={integration}
                        index={i}
                />
            {/each}
        </div>
    </div>
</div>

<style>
    .integrations {
        max-width: 1800px;
        margin: 0 auto;
    }

    .integrations-header {
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        background: linear-gradient(90deg, #fff, #5EEAD4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;
    }

    .subtitle {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
    }

    .section {
        margin-bottom: 3rem;
    }

    .section-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
        margin-bottom: 1.5rem;
    }

    .integrations-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
    }

    @media (max-width: 1200px) {
        .integrations-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .integrations-grid {
            grid-template-columns: 1fr;
        }
    }
</style>