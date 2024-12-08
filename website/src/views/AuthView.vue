<!-- auth view, ask for username and password -->

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signIn, getCurrentUser } from 'aws-amplify/auth'

const username = ref('')
const password = ref('')

const router = useRouter()

async function handleSubmit() {
  try {
    await signIn({
        username: username.value,
        password: password.value
    })


    // print current session details
    const { username_, userId_, signInDetails_ } = await getCurrentUser()

    console.log('signed in as', username_, userId_, signInDetails_)

    // redirect to the home page
    router.push('/')

  } catch (error) {
    console.error('error signing in', error)
  }
}

</script>

<template>
  <div class="auth">
    <h1>Sign in</h1>
    <input v-model="username" type="text" placeholder="username" />
    <input v-model="password" type="password" placeholder="password" />
    <button @click="handleSubmit">Sign in</button>
    </div>
</template>
