import { MenuItem } from 'src/app/menu/model/menuitem.model';

export const environment = {
  lastfmKey: 'bfb13105a262da3a624d5c4387a57391', //fake account
  production: false,
  menu: {
    main: new MenuItem('/main', 'Main', 'home-outline'),
  },
  countries: ['Spain', 'Germany', 'France'],
};
