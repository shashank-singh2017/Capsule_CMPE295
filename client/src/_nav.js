export default {
  items: [
    {
      name: 'Admin Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      divider: true,
    },
    {
      name: 'User Details',
      url: '/user-details',
      icon: 'icon-user',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    }
  ],
};
