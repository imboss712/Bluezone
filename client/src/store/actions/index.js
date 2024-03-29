export { setAlert } from './alert';

export {
  registerUser,
  verifyUser,
  loginUser,
  resendCode,
  getUser,
  updateUser,
  logout,
  logoutAll,
  deleteUser,
  addAmount,
  requestAmount
} from './auth';

export {
  getMyProfile,
  getProfileById,
  createProfile,
  updateProfile,
  getAvatar,
  uploadAvatar,
  deleteAvatar
} from './profile';

export {
  getMatchById,
  getAllMatches,
  getMyMatches,
  sortByDate,
  sortByEntry,
  createMatch,
  updateMatch,
  sendRoomIdPwd,
  changeMatchStatus,
  deleteMatch
} from './match';

export {
  createTeam,
  joinTeam,
  removeTeam,
  leaveTeam,
  kickTeammate,
  getAllTeams,
  getMyTeam,
  postResult
} from './team';

export { getTransactions, getPayouts } from './wallet';

export {
  getBankDetails,
  getBankDetailById,
  createBankDetails,
  editBankDetails
} from './bank';

export { getWithdrawalRequests, sendPayout } from './withdrawal';

export { createFeedback, getFeedbacks } from './feedback';
