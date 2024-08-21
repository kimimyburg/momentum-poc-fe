import { AuthInterceptor } from "./auth-interceptor"

export const UnaryInterceptors = {
  unaryInterceptors: [AuthInterceptor],
  streamInterceptors: [AuthInterceptor],
}

export const StreamInterceptors = {
  streamInterceptors: [AuthInterceptor],
}