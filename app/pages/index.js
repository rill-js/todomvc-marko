import './style.css'
import Router from 'rill'
import page from '@rill/page'
import render from '@rill/marko'
import homePage from './home.marko'
import errorPage from './500.marko'
import missingPage from './404.marko'

export default new Router()
  .get(page
    .html({ lang: 'en', 'data-framework': 'Rill' })
    .meta({ charset: 'utf-8' })
    .meta({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' })
    .title('TodoMVC')
    .meta({ name: 'description', content: 'Todo MVC app using Rill and Marko.' })
    .link({ rel: 'stylesheet', href: '/index.css' })
    .script({ src: '/polyfill.js', async: true })
    .script({ src: '/index.js', async: true })
  )
  .get('/404',
    ({ res }, next) => {
      res.status = 404
      return next()
    },
    render(missingPage)
  )
  .get('/500',
    ({ req, res, locals }, next) => {
      res.status = 500
      locals.message = req.query.message
      return next()
    },
    render(errorPage)
  )
  .get('/:filter(all|pending|completed)?',
    ({ req, session, locals }, next) => {
      locals.todos = (session.get('todos') || [])
      locals.filter = req.params.filter || 'all'
      return next()
    },
    render(homePage)
  )
