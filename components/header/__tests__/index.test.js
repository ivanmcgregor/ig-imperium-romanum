import Header from '../index'

describe('Header component', () => {
  const {
    computed: { routes }
  } = Header

  test('the site structure generation', () => {
    const localThis = {
      $router: {
        options: {
          routes: [
            {
              path: '/anleitungen',
              name: 'anleitungen'
            },
            {
              path: '/anschaffungsratgeber',
              name: 'anschaffungsratgeber'
            },
            {
              path: '/galerien',
              name: 'galerien'
            },
            {
              path: '/kontakt',
              name: 'kontakt'
            },
            { path: '/links', name: 'links' },
            {
              path: '/mitglieder',
              name: 'mitglieder'
            },
            {
              path: '/anleitungen/scutum',
              name: 'anleitungen-scutum'
            },
            {
              path: '/galerien/2019 Winterwanderung',
              name: 'galerien-2019 Winterwanderung'
            },
            {
              path: '/galerien/2019 Schuhnageln',
              name: 'galerien-2019 Schuhnageln'
            },
            { path: '/', name: 'index' }
          ]
        }
      }
    }

    expect(routes.call(localThis)).toEqual([
      {
        name: 'index',
        path: '/',
        text: 'Start'
      },
      {
        children: [
          {
            name: 'galerien-2019 Schuhnageln',
            path: '/galerien/2019 Schuhnageln',
            text: '2019 Schuhnageln'
          },
          {
            name: 'galerien-2019 Winterwanderung',
            path: '/galerien/2019 Winterwanderung',
            text: '2019 Winterwanderung'
          }
        ],
        name: 'galerien',
        path: '/galerien',
        text: 'Galerien'
      },
      {
        name: 'mitglieder',
        path: '/mitglieder',
        text: 'Mitglieder'
      },
      {
        name: 'anschaffungsratgeber',
        path: '/anschaffungsratgeber',
        text: 'Anschaffungsratgeber'
      },
      {
        children: [
          {
            name: 'anleitungen-scutum',
            path: '/anleitungen/scutum',
            text: 'Scutum'
          }
        ],
        name: 'anleitungen',
        path: '/anleitungen',
        text: 'Anleitungen'
      },
      {
        name: 'kontakt',
        path: '/kontakt',
        text: 'Kontakt'
      },
      {
        name: 'links',
        path: '/links',
        text: 'Links'
      }
    ])
  })
})
