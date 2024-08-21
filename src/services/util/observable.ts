import { StreamInterceptors, UnaryInterceptors } from '@/interceptors/interceptor'
import {Observable} from 'rxjs'

export function createObservableStream(stream: any) {
  return new Observable((subscriber: any) => {
    let streamError: undefined = undefined
    stream.on('data', function (response: { toObject: () => any }) {
      subscriber.next(response.toObject())
    })

    stream.on('error', function (error: any) {
      streamError = error
      subscriber.error(error)
    })

    stream.on('end', function () {
      if (streamError == undefined) {
        subscriber.complete()
      } else {
        // eslint-disable-next-line no-console
        console.info(`[${new Date().toLocaleString()}] generic stream ended with error.`)
      }
    })

    return {
      unsubscribe() {
        stream.cancel()
      },
    }
  })
}

export function createObservable(subscriber: any, response: any, err: any) {
  if (err) {
    subscriber.error(err)
  }
  if (response) {
    subscriber.next(response.toObject())
  }
  subscriber.complete()
}

export function clientObservable(grpcClient: any, method: any, request: any, metadata: any) {
  const client = new grpcClient("test", null, UnaryInterceptors)

  return new Observable(subscriber => {
    client[method](request, metadata, function (err: any, response: any) {
      return createObservable(subscriber, response, err)
    })
  })
}

export function clientObservableStream(grpcClient: new (arg0: any, arg1: null, arg2: any) => any, method: string | number, request: any, metadata: any) {
  const client = new grpcClient("test", null, StreamInterceptors)
  const stream = client[method](request, metadata)
  return createObservableStream(stream)
}