class AuthRequestInterceptor {
  constructor() {}
  /**
   * @template REQUEST, RESPONSE
   * @param {!Request<REQUEST, RESPONSE>} request
   * @param {function(!Request<REQUEST,RESPONSE>):!Promise<!UnaryResponse<RESPONSE>>}
   * invoker
   * @return {!Promise<!UnaryResponse<RESPONSE>>}
   */
  intercept(request: { getMetadata: () => any }, invoker: (arg0: any) => any) {
    const metadata = request.getMetadata()
    metadata.token = ""
    return invoker(request)
  }
}

export const AuthInterceptor = new AuthRequestInterceptor()