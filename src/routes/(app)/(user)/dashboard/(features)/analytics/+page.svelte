<script lang="ts">
    import Loading from '$lib/components/Basic/Loading.svelte';
    import BarChart from '$lib/components/Charts/BarChart.svelte';


    export let data;
	$: ({publicPageStats, messages} = data)


    function getEarnings(publicPageStats, messages): {totalEarnings: number, earningsPerView: number, earningsPerMessage: number} {
        if(!messages || !publicPageStats) return {totalEarnings: publicPageStats.total_earnings, earningsPerView: 0, earningsPerMessage: 0}

        const totalEarnings = publicPageStats.total_earnings;
        const earningsPerView  = publicPageStats.views > 0 ? totalEarnings / publicPageStats.views : 0;
        const earningsPerMessage  = messages.length > 0 ? totalEarnings / messages.length : 0;

        return {
            totalEarnings : totalEarnings,
            earningsPerView : earningsPerView,
            earningsPerMessage : earningsPerMessage,
        }
    }

    $:({totalEarnings, earningsPerView, earningsPerMessage} = getEarnings(publicPageStats, messages))
 

    function getActivityChart(){
            return [
                { letter: 'Visits', frequency: publicPageStats.views },
                { letter: 'Filtered Spams', frequency: publicPageStats.messaging_attempts },
                { letter: 'Messages', frequency: messages.length },
            ];
        }

        function getActivityEarning(){
            const totalEarnings = messages.length > 0? messages.reduce((acc, curr) => acc + curr.price, 0) : 0;
            const earningsPerView = publicPageStats.views>0 ? totalEarnings / publicPageStats.views : 0;
            const earningsPerMessage = messages.length>0 ? totalEarnings / messages.length : 0;
            return  [
                { label: 'Earnings Per View', value: earningsPerView },
                { label: 'Earnings Per Message', value: earningsPerMessage },
                { label: 'Total Earnings', value:totalEarnings },
            ];
        }

</script>






{#if publicPageStats && messages}


    <h1>Analytics</h1>

    <h2 class='text-center'>Summary</h2>

    <h3>Activities</h3>
    <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
        
            <div class="logo-item">
                Visits: {publicPageStats.views}
            </div>
            <div class="logo-item">
                Filtered Spams: {publicPageStats.messaging_attempts}
            </div>
            <div class="logo-item">
                Messages: {messages.length}
            </div>
    </div>

    <h3>Earnings</h3>
     <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1" >

        <div class="logo-item">
            Total Earnings: {totalEarnings} {publicPageStats.currency}
        </div>
        <div class="logo-item">
            Earnings Per View: {earningsPerView} {publicPageStats.currency}
        </div>
        <div class="logo-item">
            Earnings Per Message: {earningsPerMessage} {publicPageStats.currency}
        </div>
    </div>


    <p>Better analytics coming soon...</p>
    <!-- Graphs -->
    <!-- <BarChart toChart={getActivityChart} />
        <BarChart toChart={getActivityEarning} /> -->


{:else}
    <Loading />
{/if}

