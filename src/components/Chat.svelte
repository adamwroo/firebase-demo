<script>
    import { onDestroy } from 'svelte';
    import { collection, addDoc, serverTimestamp, query, onSnapshot, orderBy } from "firebase/firestore"; 
    import { db } from '../firebase';
    import { user } from '../stores';

    const collectionName = "messages";
    let newMessage = '';
    let messages = [];

    const sendMessage = async() => {
        const newMessageCopy = newMessage;
        newMessage = '';

        await addDoc(collection(db, collectionName), {
            uid: $user?.uid ?? '',
            timestamp : serverTimestamp(),
            text: newMessageCopy
        });
    }

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
    <textarea rows="4" cols="50" bind:value={newMessage}></textarea>
    <button on:click={sendMessage} disabled={ newMessage == '' }>Send</button>
</div>