import * as Yup from 'yup';

import {
  roleItems,
  favGunItems,
  favMapItems,
  perspectiveItems,
  teamTypeItems,
  tierItems
} from './Items';

const validationSchema = [
  Yup.object({
    gameName: Yup.string().required('Required'),
    gameId: Yup.number('Must be a number type').required('Required'),
    bio: Yup.string().required('Required').max(70),
    role: Yup.string()
      .required('Required')
      .oneOf(roleItems.map((r) => r.value)),
    favoriteGun: Yup.array()
      .of(
        Yup.object().shape({
          label: Yup.string()
            .required('Required')
            .oneOf(favGunItems.map((f) => f.label)),
          value: Yup.string()
            .required('Required')
            .oneOf(favGunItems.map((f) => f.value))
        })
      )
      .min(1, 'Min of 1 Favorite Gun')
      .max(3, 'Max of 3 Favorite Gun')
  }),
  Yup.object({
    favoriteMap: Yup.string()
      .required('Required')
      .oneOf(favMapItems.map((m) => m.value)),
    server: Yup.string().required('Required'),
    season: Yup.number().required('Required').min(19).max(30),
    perspective: Yup.string()
      .required('Required')
      .oneOf(perspectiveItems.map((p) => p.value)),
    teamType: Yup.string()
      .required('Required')
      .oneOf(teamTypeItems.map((tt) => tt.value)),
    rpValue: Yup.number().required('Required').min(0).max(100),
    kdValue: Yup.number().required('Required').min(0).max(15),
    tierValue: Yup.string()
      .required('Required')
      .oneOf(tierItems.map((t) => t.value))
  }),
  Yup.object({
    city: Yup.string().required('Required'),
    district: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    pincode: Yup.string()
      .required('Required')
      .matches(/^[1-9]{1}[0-9]{5}$/, 'Invalid Pin Code')
  }),
  Yup.object({
    instagram: Yup.string().url(),
    youtube: Yup.string().url(),
    twitter: Yup.string().url(),
    facebook: Yup.string().url()
  })
];

export default validationSchema;
