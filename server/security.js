Meteor.methods({
  getHash: function(myString){
    return CryptoJS.HmacSHA256(myString, "HNUez2yE7Q_O-Ri45WyM0FYcMPWN_lGNXraLRs-E").toString();
  }
});