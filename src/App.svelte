<script>
	import Login from './components/Login.svelte';
	import Chat from './components/Chat.svelte';
	import NewMessage from './components/NewMessage.svelte';
</script>

<header>
	<Login />
</header>
<main>
	<Chat />
</main>
<footer>
	<NewMessage />
</footer>

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
	}

	header {
		position: sticky;
		top: 0px;
		align-self: end;
	}

	main {
		flex-grow: 1;
		text-align: center;
		padding: 1em;
		overflow-y: scroll;
		align-self: center;
	}
	
	:global(main > div) {
		width: min(40em, 90vw);
	}

	footer {
		align-self: center;
	}
</style>