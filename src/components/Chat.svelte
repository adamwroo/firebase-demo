<script>
    import { onDestroy } from 'svelte';
    import { collection, query, onSnapshot, orderBy } from "firebase/firestore"; 
    import { db } from '../firebase';

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

<div>
    {#each messages as message (message.id)}
        <p>{message.text}</p>
    {/each}
</div>