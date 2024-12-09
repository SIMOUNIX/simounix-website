<!-- auth view, ask for username and password -->

<script setup>
import '@/assets/views/auth.css'

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

// if enter is clicked then submit form
document.onkeydown = function (e) {
  if (e.key === 'Enter') {
    handleSubmit()
  }
}

</script>

<template>
  <div class="auth">
    <div class="auth-form">
      <h1>Login</h1>
      <p>Username</p>
      <input v-model="username" type="text" placeholder="username" />
      <p>Password</p>
      <input v-model="password" type="password" placeholder="password" />
      <button @click="handleSubmit">Sign in</button>
    </div>
  </div>
</template>
