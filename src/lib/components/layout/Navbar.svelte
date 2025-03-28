<script lang="ts">
    import { Bell, Search, Settings, User } from 'lucide-svelte';
    import Button from '$lib/components/common/Button.svelte';
</script>

<header class="navbar">
    <div class="navbar-section">
        <div class="search-container">
            <Search size={18} class="search-icon" />
            <input type="text" placeholder="Search..." class="search-input" />
        </div>
    </div>

    <div class="navbar-section">
        <button class="icon-button">
            <Bell size={20} />
            <span class="notification-badge">3</span>
        </button>

        <button class="icon-button">
            <Settings size={20} />
        </button>

        <div class="user-profile">
            <div class="user-avatar">
                <span>JD</span>
            </div>
            <div class="user-info">
                <span class="user-name">John Doe</span>
                <span class="user-role">Administrator</span>
            </div>
        </div>
    </div>
</header>

<style>
    .navbar {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .navbar-section {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .search-container {
        position: relative;
        width: 300px;
    }

    .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-tertiary);
    }

    .search-input {
        width: 100%;
        padding: 0.5rem 1rem 0.5rem 2.5rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: var(--text-primary);
        font-size: 0.9rem;
        transition: all 0.3s ease;
    }

    .search-input:focus {
        background: rgba(255, 255, 255, 0.1);
        border-color: var(--accent);
        outline: none;
    }

    .search-input::placeholder {
        color: var(--text-tertiary);
    }

    .icon-button {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        position: relative;
        transition: all 0.3s ease;
    }

    .icon-button:hover {
        background: rgba(255, 255, 255, 0.05);
        color: var(--text-primary);
    }

    .notification-badge {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 18px;
        height: 18px;
        background: var(--accent);
        color: var(--bg-primary);
        border-radius: 50%;
        font-size: 0.7rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .user-profile {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .user-profile:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    .user-avatar {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: var(--accent);
        color: var(--bg-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .user-info {
        display: flex;
        flex-direction: column;
    }

    .user-name {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-primary);
    }

    .user-role {
        font-size: 0.75rem;
        color: var(--text-tertiary);
    }

    @media (max-width: 768px) {
        .search-container {
            width: 200px;
        }

        .user-info {
            display: none;
        }
    }
</style>