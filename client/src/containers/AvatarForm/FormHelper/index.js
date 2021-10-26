import * as Yup from 'yup';

const FILE_SIZE = 2000000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .required('Required')
    .test(
      'fileFormat',
      'Unsupported format! Please upload an image in jpg, jpeg or png format',
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    )
    .test(
      'fileSize',
      'Image is too large! Please upload less than 2MB',
      (value) => value && value.size <= FILE_SIZE
    )
});

export { validationSchema };
