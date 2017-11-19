import HttpError from '@rill/error'

/**
 * Simple error handling middleware which redirects to the error page.
 */
export default async function errorHandlerMiddleware ({ res }, next) {
  try {
    await next()
  } catch (err) {
    let message = err.message;

    if (!(err instanceof HttpError)) {
      message = 'An unknown error has occurred.'
      console && console.error && console.error(err)
    }
    res.redirect(`/500?message=${message}`)
  }
}
