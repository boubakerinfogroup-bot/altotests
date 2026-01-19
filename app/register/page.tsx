import type { Metadata } from 'next'
import RegisterForm from '@/components/RegisterForm'

export const metadata: Metadata = {
  title: 'Register - Create Your Account',
  description: 'Create your free account to start your language test preparation journey with Alto Tests.',
  openGraph: {
    title: 'Register - Alto Tests',
    description: 'Create your free account to start learning.',
  },
}

export default function RegisterPage() {
  return <RegisterForm />
}


