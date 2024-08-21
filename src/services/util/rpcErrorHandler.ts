
export function restartStream(code: any) {
  let retry = false

  switch (code) {
    case 0: {
      //OK
      break
    }
    case 1: {
      //CANCELLED
      retry = true
      break
    }
    case 2: {
      //UNKNOWN
      retry = true
      break
    }
    case 3: {
      // INVALID_ARGUMENT
      break
    }
    case 4: {
      //DEADLINE_EXCEEDED
      retry = true
      break
    }
    case 5: {
      //NOT_FOUND
      break
    }
    case 6: {
      // ALREADY_EXISTS
      break
    }
    case 7: {
      //PERMISSION_DENIED
      break
    }
    case 8: {
      //RESOURCE_EXHAUSTED
      break
    }
    case 9: {
      // FAILED_PRECONDITION
      break
    }
    case 10: {
      //ABORTED
      retry = true
      break
    }
    case 11: {
      //OUT_OF_RANGE
      break
    }
    case 12: {
      // UNIMPLEMENTED
      break
    }
    case 13: {
      //INTERNAL
      retry = true
      break
    }
    case 14: {
      //UNAVAILABLE
      retry = true
      break
    }
    case 15: {
      // DATA_LOSS
      retry = true
      break
    }
    case 16: {
      //UNAUTHENTICATED
      break
    }
  }
  return retry
}

export async function genericErrorForUnary(code: any) {
  switch (code) {
    case 1: {
      //CANCELLED
      break
    }
    case 2: {
      //UNKNOWN
      break
    }
    case 3: {
      // INVALID_ARGUMENT
      break
    }
    case 4: {
      //DEADLINE_EXCEEDED
      break
    }
    case 5: {
      //NOT_FOUND
      //showSnackbar(i18n.t('error_generic_not_found'))
      break
    }
    case 6: {
      // ALREADY_EXISTS
      break
    }
    case 7: {
      //PERMISSION_DENIED
      break
    }
    case 8: {
      //RESOURCE_EXHAUSTED
      break
    }
    case 9: {
      // FAILED_PRECONDITION
      break
    }
    case 10: {
      //ABORTED
      break
    }
    case 11: {
      //OUT_OF_RANGE
      break
    }
    case 12: {
      // UNIMPLEMENTED
      break
    }
    case 13: {
      //INTERNAL
      break
    }
    case 14: {
      //UNAVAILABLE
      break
    }
    case 15: {
      // DATA_LOSS
      break
    }
    case 16: {
      //UNAUTHENTICATED
      break
    }
    default: {
      break
    }
  }
}
export function excludeErrorMessages(message: string) {
  if (typeof message === 'string') {
    return message.includes('Http response at 400 or 500 level')
  }
}
