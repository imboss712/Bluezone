import manas_panigrahi from '../assets/manas_panigrahi.jpeg';
import alok_kumar from '../assets/alok_kumar.jpeg';
import dheeraj_patel from '../assets/dheeraj_patel.jpeg';

const homeFeedbacksList = [
  {
    _id: 1,
    name: 'Manas Panigrahi',
    image: manas_panigrahi,
    address: { city: 'Patna', state: 'Bihar' },
    feedback:
      'A very good platform for gamers either they want to experience or practice, they can play daily online tournaments and earn money. Playing tournaments on Bluezone is also great fun.'
  },
  {
    _id: 2,
    name: 'Alok Gupta',
    image: alok_kumar,
    address: { city: 'Rohtas', state: 'Bihar' },
    feedback:
      'The best part is that you can play solo, duo or squad tournaments at any time on your favorite map. They host a variety of paid tournaments, each with its own entry fee and prize money.'
  },
  {
    _id: 3,
    name: 'Dheeraj Patel',
    image: dheeraj_patel,
    address: { city: 'Jaunpur', state: 'Uttar Pradesh' },
    feedback:
      "Withdrawing money on Bluezone is instant and safe. You can withdraw your winnings from wallet to UPI, Paytm Wallet, or Bank Account. So don't wait? Register now and play with your squad."
  }
];

export default homeFeedbacksList;
