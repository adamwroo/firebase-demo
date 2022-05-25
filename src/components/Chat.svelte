<script>
    import { onDestroy } from 'svelte';
    import { collection, query, onSnapshot, orderBy } from "firebase/firestore"; 
    import { db } from '../firebase';
    import { user } from '../stores';

    const collectionName = "messages";
    let messages = [];

    const q = query(collection(db, collectionName), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const localMessages = [];
        querySnapshot.forEach((doc) => {
            let id = doc.id;
            localMessages.push({ id, ...doc.data() });
        });

        messages = localMessages;
    });

    onDestroy(() => {
        unsubscribe();
    })
</script>

<div class="container">
    {#each messages as message (message.id)}
        <div class="message" class:mine={$user && message.uid == $user?.uid}>
            {#if message.user}
                <small><b>from { message.user }</b></small>
            {/if}
            <p>{message.text}</p>
        </div>
    {/each}
</div>

<style>
    div.container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    div.message {
        border: 1px solid #ccc;
        border-radius: 2px;
        max-width: 20em;
        align-self: start;
        padding: 0.5rem;
    }

    div.message.mine {
        align-self: end;
    }
</style>