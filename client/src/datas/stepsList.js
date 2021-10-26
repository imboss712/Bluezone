const getSteps = () => {
  return [
    'Create An Account',
    'Complete Your Profile',
    'Join A Tournament',
    'Play Game',
    'Earn Real Money'
  ];
};

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return 'First, create an account on Bluezone by providing some personal information.';
    case 1:
      return 'Complete your profile on Bluezone by filling in BGMI stats, details about your interests, address and your social media links.';
    case 2:
      return 'Joining the tournament is the most important step. So choose a Solo, Duo, or Squad tournament and pay the entry fee and you are done.';
    case 3:
      return 'Join the tournament and show your gaming skills, dedication to score well in the tournament. Be sure to take a screenshot of the tournament result.';
    case 4:
      return 'Winnings will be credited directly to your Bluezone Wallet within one hour of the completion of the tournament. You can withdraw your winnings to your bank account, wallet or UPI instantly.';
    default:
      return 'Unknown step';
  }
};

export { getSteps, getStepContent };
