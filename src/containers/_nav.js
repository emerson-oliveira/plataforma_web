export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Ferramentas']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Escala',
    route: '/timesheet',
    icon: 'cil-calendar',
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'Painel',
            to: '/timesheet',
            badge: {
              color: 'info',
              text: 'NEW',
            },
          },
      {
        _tag: 'CSidebarNavItem',
        name: 'Motoristas',
        to: '/timesheet/drivers',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Veiculos',
        to: '/timesheet/vehicles',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
    ],
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

