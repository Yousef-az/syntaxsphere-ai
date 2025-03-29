<script lang="ts">
    export let data: Array<{
        id: string;
        customer: string;
        amount: number;
        status: 'completed' | 'pending' | 'failed';
        date: string;
    }>;

    const statusClasses = {
        completed: 'bg-emerald-500/10 text-emerald-400',
        pending: 'bg-amber-500/10 text-amber-400',
        failed: 'bg-red-500/10 text-red-400'
    };
</script>

<div class="table-container">
    <table>
        <thead>
        <tr>
            <th>CUSTOMER</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
            <th>DATE</th>
        </tr>
        </thead>
        <tbody>
        {#each data as row, i}
            <tr class="stagger-item" style="animation-delay: {i * 0.05 + 0.3}s;">
                <td>{row.customer}</td>
                <td>${row.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td>
                    <span class="status-pill {statusClasses[row.status]}">
                      {row.status}
                    </span>
                </td>
                <td>{row.date}</td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>

<style>
    .table-container {
        width: 100%;
        overflow-x: auto;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px);
    }

    table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
    }

    th {
        text-align: left;
        padding: 1rem;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    td {
        padding: 1rem;
        color: white;
        font-size: 0.9rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    tr:last-child td {
        border-bottom: none;
    }

    .status-pill {
        padding: 0.25rem 0.75rem;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: capitalize;
    }

    /* Add staggered animation for table rows */
    tr.stagger-item {
        opacity: 0;
        animation: slideUp 0.3s ease-out forwards;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>