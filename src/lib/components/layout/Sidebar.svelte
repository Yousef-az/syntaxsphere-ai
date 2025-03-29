<script lang="ts">
    import { page } from '$app/stores';
    import { Home, BarChart2, Settings, Layers, Bell, User, LogOut } from 'lucide-svelte';

    const menuItems = [
        { label: 'Dashboard', href: '/dashboard', icon: Home },
        { label: 'Analytics', href: '/analytics', icon: BarChart2 },
        { label: 'Management', href: '/management', icon: Layers },
        { label: 'Notifications', href: '/notifications', icon: Bell },
        { label: 'Corporates', href: '/corporates', icon: User },
    ];

    const integrationItems = [
        { label: 'Slack', href: '/integrations/slack', icon: '/icons/slack.svg' },
        { label: 'Zoho', href: '/integrations/zoho', icon: '/icons/zoho.svg' },
        { label: 'Salesforce', href: '/integrations/salesforce', icon: '/icons/salesforce.svg' },
    ];

    const secondaryItems = [
        { label: 'Settings', href: '/settings', icon: Settings },
    ];

    // Determine if a menu item is active
    $: isActive = (href: string) => $page.url.pathname.startsWith(href);
</script>

<aside class="sidebar">
    <div class="sidebar-header">
        <div class="logo-container">
            <img src="/logo.svg" alt="SYNTAXSPHERE" class="logo" />
        </div>
    </div>

    <nav class="sidebar-nav">
        <ul class="nav-list">
            {#each menuItems as item}
                <li>
                    <a href={item.href} class="nav-link" class:active={isActive(item.href)}>
                        <svelte:component this={item.icon} size={18} />
                        <span>{item.label}</span>
                    </a>
                </li>
            {/each}
        </ul>

        <div class="divider">Integrations</div>

        <ul class="nav-list">
            {#each integrationItems as item}
                <li>
                    <a href={item.href} class="nav-link" class:active={isActive(item.href)}>
                        <div class="integration-icon-wrapper">
                            <img src={item.icon} alt={item.label} class="integration-icon" />
                        </div>
                        <span>{item.label}</span>
                    </a>
                </li>
            {/each}
        </ul>

        <div class="sidebar-footer">
            <ul class="nav-list">
                {#each secondaryItems as item}
                    <li>
                        <a href={item.href} class="nav-link" class:active={isActive(item.href)}>
                            <svelte:component this={item.icon} size={18} />
                            <span>{item.label}</span>
                        </a>
                    </li>
                {/each}
                <li>
                    <button class="nav-link logout">
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</aside>

<style>
    .sidebar {
        width: 250px;
        min-height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(20px);
        border-right: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        flex-direction: column;
        transition: width 0.3s ease;
        z-index: 10;
    }

    .sidebar-header {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .logo-container {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 48px;
        width: auto;
        object-fit: contain;
    }

    .sidebar-nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1.5rem 0;
        overflow-y: auto;
    }

    .nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.8rem 1.5rem;
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: all 0.2s ease;
        border-left: 3px solid transparent;
        margin-bottom: 2px;
    }

    .nav-link:hover {
        background: rgba(255, 255, 255, 0.05);
        color: white;
    }

    .nav-link.active {
        background: rgba(45, 212, 191, 0.15);
        color: #5EEAD4;
        border-left: 3px solid #2DD4BF;
    }

    .integration-icon-wrapper {
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .integration-icon {
        width: 18px;
        height: 18px;
        opacity: 0.7;
        transition: opacity 0.2s ease;
        filter: brightness(0) invert(1); /* Makes icons white */
    }

    .nav-link:hover .integration-icon,
    .nav-link.active .integration-icon {
        opacity: 1;
    }

    .divider {
        font-size: 0.7rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.4);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 1.5rem 1.5rem 0.75rem;
    }

    .sidebar-footer {
        margin-top: auto;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 1rem;
    }

    .logout {
        cursor: pointer;
        border: none;
        background: transparent;
        width: 100%;
        text-align: left;
        font-size: inherit;
        font-family: inherit;
    }

    .logout:hover {
        color: #f87171;
    }
</style>