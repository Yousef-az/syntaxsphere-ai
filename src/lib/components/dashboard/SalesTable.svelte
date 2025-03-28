<script lang="ts">
    export let data: Array<{
        id: string;
        customer: string;
        amount: number;
        status: 'completed' | 'pending' | 'failed';
        date: string;
    }>;

    const statusClasses = {
        completed: 'bg-emerald-500/10 text-emerald-500',
        pending: 'bg-amber-500/10 text-amber-500',
        failed: 'bg-red-500/10 text-red-500'
    };
</script>

<div class="table-container">
    <table>
        <thead>
        <tr>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {#each data as row}
            <tr>
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
        background: rgba(20, 24, 33, 0.7);
        border: 1px solid rgba(132, 215, 219, 0.1);
        border-radius: 12px;
        padding: 1rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
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
        font-weight: 500;
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
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: capitalize;
    }
</style>