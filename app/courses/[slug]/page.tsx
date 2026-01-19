import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CourseDetail from '@/components/CourseDetail'

const courses = {
  'tcf-france': {
    title: 'TCF France Preparation',
    description: 'Complete preparation for TCF France exam',
  },
  'tef-canada': {
    title: 'TEF Canada Preparation',
    description: 'Comprehensive TEF Canada preparation course',
  },
  'delf-dalf': {
    title: 'DELF/DALF Preparation',
    description: 'Master French with DELF/DALF certification',
  },
  'ielts': {
    title: 'IELTS Preparation',
    description: 'IELTS Academic and General training',
  },
  'goethe': {
    title: 'Goethe German Preparation',
    description: 'German language certification preparation',
  },
  'toeic': {
    title: 'TOEIC Preparation',
    description: 'TOEIC test preparation for professional English',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const course = courses[slug as keyof typeof courses]

  if (!course) {
    return {
      title: 'Course Not Found',
    }
  }

  return {
    title: course.title,
    description: course.description,
  }
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = courses[slug as keyof typeof courses]

  if (!course) {
    notFound()
  }

  return <CourseDetail slug={slug} />
}


