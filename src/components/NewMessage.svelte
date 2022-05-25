<script>
    import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
    import { db } from '../firebase';
    import { user } from '../stores';

    const collectionName = "messages";
    let newMessage = '';

    const sendMessage = async() => {
        const newMessageCopy = newMessage;
        newMessage = '';

        await addDoc(collection(db, collectionName), {
            uid: $user?.uid ?? '',
            timestamp : serverTimestamp(),
            text: newMessageCopy
        });
    }
</script>

<textarea on:keydown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()} rows="4" cols="50" bind:value={newMessage}></textarea>
