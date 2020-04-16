import _ from 'lodash'

// menu items used in the main navigation
const primaryNavItems = [
  'galerie',
  'mitglieder',
  'Tipps & Tricks',
  'termine',
  'kontakt'
]

// menu items separately used in the footer
const secondaryNavItems = ['impressum', 'datenschutz']

// all menu items (e.g. for a sitemap)
export function getRefinedRoutes(inputRoutes) {
  let routes = {}
  inputRoutes.forEach((route) => {
    const splitPath = route.path.split('/')
    splitPath.splice(0, 1)
    const splitName = route.name.split('-')
    const text = splitName[splitName.length - 1]
    const capitalizedText = text.charAt(0).toUpperCase() + text.substring(1)
    const routeItem = {
      name: route.name,
      path: route.path,
      text: capitalizedText
    }

    if (splitPath[0].length > 0) {
      // handle normal elements
      // add all children in children prop
      if (splitPath.length > 1) {
        for (let i = splitPath.length - 1; i > 0; i--) {
          splitPath.splice(i, 0, 'children')
        }
      }
      routes = _.merge(routes, _.set({}, splitPath, routeItem))
    } else {
      // index behaves differently
      routes.index = {
        name: route.name,
        path: route.path,
        text: 'Startseite'
      }
    }
  })
  return routes
}

function getMenuItems(inputRoutes, menuItems) {
  const routes = getRefinedRoutes(inputRoutes)

  const sortedRoutes = []

  if (menuItems === primaryNavItems) {
    sortedRoutes.push(routes.index)
  }

  menuItems.forEach((name) => {
    if (routes[name]) {
      if (routes[name].children) {
        routes[name].children = _.sortBy(routes[name].children, ['name'])
      }
      sortedRoutes.push(routes[name])
    }
  })

  return sortedRoutes
}

export function getSortedPrimaryMenu(inputRoutes) {
  return getMenuItems(inputRoutes, primaryNavItems)
}

export function getSortedSecondaryMenu(inputRoutes) {
  return getMenuItems(inputRoutes, secondaryNavItems)
}

export default getSortedPrimaryMenu
