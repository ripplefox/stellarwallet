
myApp.factory('Id', function($window) {
  
  return {
    isValidAddress : function(address) {
      return StellarSdk.StrKey.isValidEd25519PublicKey(address);
    },
    isValidSecret : function(secret) {
      return StellarSdk.StrKey.isValidEd25519SecretSeed(secret);
    },
    isValidEmail : function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    isValidMnemonic : function(value) {
      var wl1 = bip39.wordlists.english;
      var wl2 = bip39.wordlists.chinese_simplified;
      var wl3 = bip39.wordlists.japanese;
      
      return bip39.validateMnemonic(value, wl1) || bip39.validateMnemonic(value, wl2) || bip39.validateMnemonic(value, wl3);
      
    },
    generateMnemonic : function() {
      return bip39.generateMnemonic();
    },
    getMnemonicInEnglish : function(input) {
      if (bip39.validateMnemonic(input, bip39.wordlists.english)) return input;
      if (bip39.validateMnemonic(input, bip39.wordlists.chinese_simplified)) {
        const entropy = bip39.mnemonicToEntropy(input, bip39.wordlists.chinese_simplified);
        return bip39.entropyToMnemonic(entropy);
      }
      if (bip39.validateMnemonic(input, bip39.wordlists.japanese)) {
        const entropy = bip39.mnemonicToEntropy(input, bip39.wordlists.japanese);
        return bip39.entropyToMnemonic(entropy);
      }
    },
    getMnemonicLang : function(mnemonic, lang) {
      if (!mnemonic) return "";
      var wl = bip39.wordlists.english;
      if (lang == 'cn') wl = bip39.wordlists.chinese_simplified;
      if (lang == 'jp') wl = bip39.wordlists.japanese;
      const entropy = bip39.mnemonicToEntropy(mnemonic);
      return bip39.entropyToMnemonic(entropy, wl);
    },
    generateAccount : function(mnemonic) {
      var kp;
      if (mnemonic) {
        var seedHex = bip39.mnemonicToSeedSync(mnemonic).toString("hex");
        var hddata = derivePath("m/44'/148'/0'", seedHex);
        const keypair = StellarSdk.Keypair.fromRawEd25519Seed(hddata.key);
        const address = keypair.publicKey();
        const secret = keypair.secret();
        return { secret, address };
      } else {
        const keypair = StellarSdk.Keypair.random();
        const address = keypair.publicKey();
        const secret = keypair.secret();
        return { secret, address };
      }
    },
    fromSecret : function(secret) {
      var keypair = StellarSdk.Keypair.fromSecret(secret);
      return {address:  keypair.publicKey(), secret: secret};
    },
    generateFilename : function() {
      var dt = new Date();
      var datestr = (''+dt.getFullYear()+(dt.getMonth()+1)+dt.getDate()+'_'+dt.getHours()+dt.getMinutes()+dt.getSeconds()).replace(/([-: ])(\d{1})(?!\d)/g,'$10$2');
      return "stellar" + datestr + ".txt";
    }
  };
});
