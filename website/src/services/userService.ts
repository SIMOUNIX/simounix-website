import { signUp } from 'aws-amplify/auth'

export async function createUser(username, email, tempPassword) {
  console.log('Creating user', username, email, tempPassword)
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: username,
      password: tempPassword,
      options: {
        userAttributes: {
          email: email
        }
      }
    })
    console.log('User created successfully', userId)
    return { isSignUpComplete, userId, nextStep }
  } catch (error) {
    console.error('Error creating user', error)
    return error
  }
}
