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

    const secondaryItems = [
        { label: 'Settings', href: '/settings', icon: Settings },
    ];

    // Determine if a menu item is active
    $: isActive = (href: string) => $page.url.pathname.startsWith(href);
</script>

<aside class="sidebar">
    <div class="sidebar-header">
        <img src="/logo.svg" alt="SYNTAXSPHERE" class="logo" />
        <span class="logo-text">NEPTUNE</span>
    </div>

    <nav class="sidebar-nav">
        <ul class="nav-list">
            {#each menuItems as item}
                <li>
                    <a
                            href={item.href}
                            class="nav-link"
                            class:active={isActive(item.href)}
                    >
                        <svelte:component this={item.icon} size={18} />
                        <span>{item.label}</span>
                    </a>
                </li>
            {/each}
        </ul>

        <div class="divider">Integrations</div>

        <ul class="nav-list">
            <li>
                <a href="/integrations/slack" class="nav-link" class:active={isActive('/integrations/slack')}>
                    <img src="/icons/slack.svg" alt="Slack" class="integration-icon" />
                    <span>Slack</span>
                </a>
            </li>
            <li>
                <a href="/integrations/zoho" class="nav-link" class:active={isActive('/integrations/zoho')}>
                    <img src="/icons/zoho.svg" alt="Zoho" class="integration-icon" />
                    <span>Zoho</span>
                </a>
            </li>
            <li>
                <a href="/integrations/salesforce" class="nav-link" class:active={isActive('/integrations/salesforce')}>
                    <img src="/icons/salesforce.svg" alt="Salesforce" class="integration-icon" />
                    <span>Salesforce</span>
                </a>
            </li>
        </ul>

        <div class="sidebar-footer">
            <ul class="nav-list">
                {#each secondaryItems as item}
                    <li>
                        <a
                                href={item.href}
                                class="nav-link"
                                class:active={isActive(item.href)}
                        >
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
        background: rgba(15, 20, 36, 0.75);
        backdrop-filter: blur(10px);
        border-right: 1px solid rgba(132, 215, 219, 0.1);
        display: flex;
        flex-direction: column;
        transition: width 0.3s ease;
        z-index: 10;
    }

    .sidebar-header {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .logo {
        height: 28px;
        width: auto;
    }

    .logo-text {
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
        letter-spacing: 0.5px;
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
    }

    .nav-link:hover {
        background: rgba(132, 215, 219, 0.05);
        color: white;
    }

    .nav-link.active {
        background: rgba(132, 215, 219, 0.1);
        color: #8CD7DB;
        border-left: 3px solid #8CD7DB;
    }

    .integration-icon {
        width: 18px;
        height: 18px;
        opacity: 0.7;
    }

    .divider {
        font-size: 0.7rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.4);
        text-transform: uppercase;
        letter-spacing: 0.05em;
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