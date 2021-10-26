import React, { lazy, Suspense } from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';

const AvatarPreview = lazy(() => import('./AvatarPreview'));

const ProfileContent = (props) => {
  const {
    user,
    profile: { bio, gameName }
  } = props;

  return (
    <>
      <Chip
        icon={<FaceIcon />}
        label={bio}
        color="primary"
        variant="outlined"
        sx={{ marginBottom: 1 }}
      />

      <Suspense>
        <AvatarPreview user={user} />
      </Suspense>

      <section style={{ marginTop: '8px', marginBottom: '12px' }}>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2" gutterBottom>
          {gameName}
        </Typography>
      </section>
    </>
  );
};

export default ProfileContent;
