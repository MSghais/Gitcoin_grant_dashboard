import crypto from "crypto";

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 32 bytes (256 bits)
const IV_LENGTH = 16; // For AES, this is always 16

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  const encrypted = cipher.update(text);

  return (
    iv.toString("hex") +
    ":" +
    Buffer.concat([encrypted, cipher.final()]).toString("hex")
  );
}

export function decrypt(text: string): string {
  const textParts = text.split(":");
  const iv = Buffer.from(textParts.shift(), "hex");
  const encryptedText = Buffer.from(textParts.join(":"), "hex");
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  const decrypted = decipher.update(encryptedText);

  return Buffer.concat([decrypted, decipher.final()]).toString();
}

//   // Function to encrypt the private key
//  function encryptPrivateKey(privateKey: string, password: string, isIvEncrypted?: boolean): { iv: string; encryptedData: string } {
//     const iv = crypto.WordArray.random(16).toString();
//     const key = crypto.PBKDF2(password, iv, { keySize: 256 / 32, iterations: 10000 });

//     const encryptedData = crypto.AES.encrypt(privateKey, key, {
//       iv: crypto.enc.Hex.parse(iv)
//       , mode: crypto.mode.CBC
//     }).toString();

//     return { iv, encryptedData };
//   }

//   // Function to decrypt the private key
//  function decryptPrivateKey(encryptedData: string, iv: string, password: string, isIvEncrypted?: boolean): string {
//     try {

//       let ivPk = iv;
//       if (isIvEncrypted) {
//       }
//       const key = crypto.PBKDF2(password, ivPk, { keySize: 256 / 32, iterations: 10000 });

//       const decryptedData = crypto.AES.decrypt(encryptedData, key, {
//         iv: crypto.enc.Hex.parse(iv)
//         , mode: crypto.mode.CBC
//       });

//       return decryptedData.toString(crypto.enc.Utf8);
//     }
//     catch (e) {
//       console.log("ERROR decryptPrivateKey")

//     }

//   }
