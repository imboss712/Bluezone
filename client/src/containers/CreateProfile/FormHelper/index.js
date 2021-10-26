import * as Yup from 'yup';

const validationSchema = Yup.object({
  game: Yup.string().required('Required').max(30),
  gameName: Yup.string().required('Required').max(20),
  gameId: Yup.number('Must be a number type').required('Required'),
  bio: Yup.string().required('Required').max(32)
});

export { validationSchema };
