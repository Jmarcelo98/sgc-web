export const UrlSgc = "sgc/";
export const UrlAdmin = "admin/";


export const MenuItemsConfig = [
  {
    title: 'Admin',
    icon: 'pi pi-users',
    routerLink: '',
    children: [
      {
        title: 'Usuários',
        routerLink: UrlAdmin + 'usuarios',
      },
      {
        title: 'Perfis',
        routerLink: UrlAdmin + 'perfis'
      }
    ]
  },
  {
    title: 'E-commerce',
    icon: 'pi pi-desktop',
    routerLink: '',
    children: [
      {
        title: 'Menu',
        routerLink: UrlSgc + 'menus'
      },
      {
        title: 'Camisas',
        routerLink: UrlSgc + 'camisas'
      },

    ]
  },
  {
    title: 'Teste',
    icon: 'pi pi-users',
    routerLink: 'teste',
    children: []
  },

];

