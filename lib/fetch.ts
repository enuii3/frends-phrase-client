import fetch, { Response } from 'node-fetch'
import { Phrase } from '../types/types'

export const getAllPhrasesData = async (): Promise<Phrase[]> => {
  const res: Response = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/phrase/`)
  )
  return (await res.json()) as Phrase[]
}
