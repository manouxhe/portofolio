'use server'

import { redirect } from 'next/navigation'

export type CvItem = {
  category: 'skill' | 'language' | 'education' | 'experience'
  value: string
}

const cvItems: CvItem[] = []

export async function getCvItems(): Promise<CvItem[]> {
  return cvItems
}

export async function addCvItem(form: FormData) {
  const category = form.get('category') as CvItem['category']
  const value = String(form.get('value'))

  cvItems.push({ category, value })
  redirect('/cv')
}

export async function deleteCvItem(index: number) {
  cvItems.splice(index, 1)
  redirect('/cv')
}
