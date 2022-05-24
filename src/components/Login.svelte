<script>
    import { auth } from '../firebase';
    import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
    import { user } from '../stores';

    const provider = new GoogleAuthProvider();
    const login = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                $user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            $user = null;
        }).catch((error) => {
            // An error happened.
        });
    }

    const logUser = () => console.log($user);
</script>

{#if $user}
    { $user.displayName }
    <button on:click={logout}>Logout</button>
{:else}
    <button on:click={login}>Login</button>
{/if}

<button on:click={logUser}>Log user</button>