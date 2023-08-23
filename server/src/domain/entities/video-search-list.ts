export interface VideoSearchList {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnail: string
}

export interface VideoSearchListWithDuration extends VideoSearchList {
  duration: number
}
