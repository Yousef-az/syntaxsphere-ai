<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    onMount(() => {
        goto('/dashboard');
    });
</script>

<div class="redirecting">
    <h1>SYNTAXSPHERE-AI</h1>
    <p>Redirecting to dashboard...</p>
</div>

<style>
    .redirecting {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: linear-gradient(135deg, #0a0a0a 0%, #111111 100%);
        color: white;
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        background: linear-gradient(90deg, #fff, #5EEAD4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
    }

    p {
        color: rgba(255, 255, 255, 0.6);
    }
</style>