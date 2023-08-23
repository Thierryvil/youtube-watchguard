export interface HttpResponse<T> {
  statusCode: number
  data: T
}

export const serverError = (error: Error): HttpResponse<string> => ({
  statusCode: 500,
  data: error.stack ?? "Internal Server Error",
})

export const ok = <T>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  data,
})

export const clientError = <T>(data: T): HttpResponse<T> => ({
  statusCode: 404,
  data,
})
