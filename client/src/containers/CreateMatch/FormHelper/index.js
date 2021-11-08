import * as Yup from 'yup';
import { add } from 'date-fns';

const teamItems = [
  { label: 'Solo', value: 'Solo' },
  { label: 'Duo', value: 'Duo' },
  { label: 'Squad', value: 'Squad' }
];

const perspectiveItems = [
  { label: 'TPP', value: 'TPP' },
  { label: 'FPP', value: 'FPP' }
];

const serverItems = [{ label: 'India', value: 'India' }];

const mapItems = [
  { label: 'Erangel', value: 'Erangel' },
  { label: 'Miramar', value: 'Miramar' },
  { label: 'Sanhok', value: 'Sanhok' }
];

const entryItems = [
  { label: '₹ 0', value: 0 },
  { label: '₹ 10', value: 10 },
  { label: '₹ 25', value: 25 },
  { label: '₹ 50', value: 50 },
  { label: '₹ 75', value: 75 },
  { label: '₹ 100', value: 100 }
];

const discountItems = [
  { label: '0%', value: 0 },
  { label: '25%', value: 25 },
  { label: '50%', value: 50 },
  { label: '75%', value: 75 },
  { label: '100%', value: 100 }
];

const prizePoolItems = [
  { type: 'Solo', value: 0.7 },
  { type: 'Duo', value: 0.75 },
  { type: 'Squad', value: 0.8 }
];

const validationSchema = Yup.object({
  title: Yup.string().required('Required').min(15).max(28),
  matchDate: Yup.date()
    .typeError('Invalid Date')
    .min(new Date(), 'Match Date must be later than Today')
    .max(
      add(new Date(), { months: 1 }),
      'Match Date must not be later than a month from Today'
    )
    .required('Required')
    .nullable(),
  matchTime: Yup.date()
    .typeError('Invalid Time')
    .required('Required')
    .nullable(),
  teamType: Yup.string()
    .required('Required')
    .oneOf(teamItems.map((t) => t.value)),
  perspective: Yup.string()
    .required('Required')
    .oneOf(perspectiveItems.map((p) => p.value)),
  server: Yup.string()
    .required('Required')
    .oneOf(serverItems.map((s) => s.value)),
  map: Yup.string()
    .required('Required')
    .oneOf(mapItems.map((m) => m.value)),
  entryFees: Yup.number()
    .required('Required')
    .oneOf(entryItems.map((e) => e.value)),
  discountPercent: Yup.number()
    .required('Required')
    .oneOf(discountItems.map((e) => e.value)),
  prizePool: Yup.number().required('Required')
});

export {
  teamItems,
  perspectiveItems,
  serverItems,
  mapItems,
  entryItems,
  discountItems,
  prizePoolItems,
  validationSchema
};
